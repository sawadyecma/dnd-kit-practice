import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Checkbox, ListItem } from '@material-ui/core'

export const SortableItem = (props: { id: string }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ListItem>
        <Checkbox />
        {props.id}
      </ListItem>
    </div>
  )
}
