import React from 'react'
import { DndContext } from '@dnd-kit/core'

import { Draggable } from './Draggable'
import { Droppable } from './Droppable'

export function App() {
  return (
    <DndContext>
      <Draggable>Draggable</Draggable>
      <Droppable>Droppable </Droppable>
    </DndContext>
  )
}
