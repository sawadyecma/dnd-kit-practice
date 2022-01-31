import React, { useState } from 'react'
import { DndContext } from '@dnd-kit/core'

import { Droppable } from './Droppable'
import { Draggable } from './Draggable'

export function App() {
  const [isDropped, setIsDropped] = useState(false)
  const draggableMarkup = <Draggable>Drag me</Draggable>

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped && draggableMarkup}
      <Droppable>{isDropped ? 'Dropped' : 'Drop here'}</Droppable>
    </DndContext>
  )

  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true)
    }
  }
}
