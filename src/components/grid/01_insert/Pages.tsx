import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  useDndContext,
} from '@dnd-kit/core'
import { arrayMove, SortableContext, useSortable } from '@dnd-kit/sortable'
import React, { useState } from 'react'
import { Page, PageProps } from './Page'
import { makeStyles } from '@material-ui/core'
import { calcInsertPos } from './constant'

const PAGES = [
  'page1',
  'page2',
  'page3',
  'page4',
  'page5',
  'page6',
  'page7',
  'page8',
  'page9',
  'page10',
]

const useStyle = makeStyles((theme) => {
  return {
    wrapper: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 160px)',
      gap: theme.spacing(2),
    },
  }
})

export const Pages = () => {
  const classes = useStyle()
  const [items, setItems] = useState(PAGES)
  const [activeId, setActiveId] = useState<string | null>(null)
  const getIndex = items.indexOf.bind(items)
  const activeIndex = activeId ? getIndex(activeId) : -1

  const handleDragEnd = ({ over }: DragEndEvent) => {
    setActiveId(null)
    if (over) {
      const overIndex = getIndex(over.id)
      if (activeIndex !== overIndex) {
        setItems((items) => arrayMove(items, activeIndex, overIndex))
      }
    }
  }

  const handleDragStart = (e: DragStartEvent) => {
    setActiveId(e.active.id)
  }

  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <SortableContext items={items}>
        <div className={classes.wrapper}>
          {items.map((id, index) => (
            <SortablePage
              id={id}
              index={index + 1}
              key={id}
              activeIndex={activeIndex}
            />
          ))}
        </div>
      </SortableContext>
      <DragOverlay>
        {activeId ? <PageOverlay id={activeId} items={items} /> : null}
      </DragOverlay>
    </DndContext>
  )
}

const PageOverlay = ({ id, items, index }: PageProps & { items: string[] }) => {
  const { over } = useDndContext()
  const activeIndex = items.indexOf(id)

  const insertPos = calcInsertPos(over, id, index, activeIndex)

  return <Page id={id} clone insertPosition={insertPos} />
}

const SortablePage = ({
  id,
  activeIndex,
}: PageProps & { activeIndex: number }) => {
  const { listeners, index, isDragging, over, setNodeRef } = useSortable({
    id,
  })

  return (
    <Page
      ref={setNodeRef}
      id={id}
      active={isDragging}
      insertPosition={calcInsertPos(over, id, index, activeIndex)}
      {...listeners}
    />
  )
}
