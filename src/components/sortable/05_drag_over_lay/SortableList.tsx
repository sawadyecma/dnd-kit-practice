import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from '@dnd-kit/core'
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { Checkbox, List, ListItem } from '@material-ui/core'
import React, { useState } from 'react'
import { SortableItem } from './SortableItem'

const LIST = ['あいうえお', 'かきくけこ', 'さしすせそ']

export const SortableList = () => {
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

  const activeItem = items.find((_, index) => index === activeIndex)
  return (
    <>
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <SortableContext items={items}>
          <List>
            {items.map((item) => (
              <SortableItem key={item} id={item} />
            ))}
          </List>
        </SortableContext>
        {activeItem && (
          <DragOverlay>
            <ListItem style={{ backgroundColor: 'red' }}>
              <Checkbox />
              {activeItem}(DragOverlay)
            </ListItem>
          </DragOverlay>
        )}
      </DndContext>
    </>
  )
}
