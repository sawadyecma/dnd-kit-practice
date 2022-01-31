import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core'
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import React, { useState } from 'react'
import { SortableItem } from './SortableItem'

const LIST = [
  'Page1',
  'Page2',
  'Page3',
  'Page4',
  'Page5',
  'Page6',
  'Page7',
  'Page8',
  'Page9',
  'Page10',
  'Page11',
  'Page12',
]

export const List = () => {
  const [items, setItems] = useState(LIST)
  const [activeId, setActiveId] = useState<string | null>(null)
  const getIndex = items.indexOf.bind(items)
  const activeIndex = activeId ? getIndex(activeId) : -1

  const handleDragStart = ({ active }: DragStartEvent) => {
    console.log(active)
    if (!active) {
      setActiveId(null)
      return
    }
    setActiveId(active.id)
  }

  const handleDragEnd = ({ over }: DragEndEvent) => {
    console.log(over)
    setActiveId(null)
    if (over) {
      const overIndex = getIndex(over.id)
      if (activeIndex !== overIndex) {
        setItems((items) => arrayMove(items, activeIndex, overIndex))
      }
    }
  }

  return (
    <>
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <SortableContext items={items}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '200px 200px 200px 200px',
            }}
          >
            {items.map((item) => (
              <SortableItem key={item} id={item} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </>
  )
}
