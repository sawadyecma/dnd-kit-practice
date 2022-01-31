import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core'
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import React, { useState } from 'react'
import { SortableItem } from './SortableItem'

const LIST = ['あいうえお', 'かきくけこ', 'さしすせそ']

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
          {items.map((item) => (
            <SortableItem key={item} id={item} />
          ))}
        </SortableContext>
      </DndContext>
    </>
  )
}
