import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export function SortableItem(props: { id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id })

  const listWrapperStyle = {
    backgroundColor: 'opacity',
    width: 200,
    height: 240,
    padding: 24,
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const listContentStyle = {
    backgroundColor: 'red',
    height: 240 - 48,
    width: 200 - 48,
    transition,
  }

  return (
    <div ref={setNodeRef} {...attributes} {...listeners}>
      <div style={listWrapperStyle}>
        <div style={listContentStyle}>{props.id}</div>
      </div>
    </div>
  )
}
