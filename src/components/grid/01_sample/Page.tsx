import { makeStyles, Theme } from '@material-ui/core'
import React, { forwardRef } from 'react'
import { PAPER_HEIGHT, PAPER_WIDTH, InsertPosition } from './constant'

export interface PageProps {
  active?: boolean
  clone?: boolean
  insertPosition?: InsertPosition
  id: string
  index?: number
}

interface StyleProps {
  active?: boolean
  insertPosition: InsertPosition
  clone?: boolean
}

const useStyle = makeStyles<Theme, StyleProps>({
  wrapper: {
    position: 'relative',
    width: PAPER_WIDTH,
  },
  item: {
    backgroundColor: ({ active }) => (active ? 'rgba(230, 230, 230)' : 'blue'),
    height: PAPER_HEIGHT,
    width: PAPER_WIDTH,
    '&::before': {
      // 疑似要素共通
      content: '""',
      backgroundColor: 'green',
      position: 'absolute',
      height: PAPER_HEIGHT,
      top: 0,
      width: 8,

      // 疑似要素非共通
      left: -12,
      display: ({ insertPosition }) =>
        insertPosition === 'Before' ? 'block' : 'none',
    },
    '&::after': {
      // 疑似要素共通
      content: '""',
      backgroundColor: 'green',
      position: 'absolute',
      height: PAPER_HEIGHT,
      top: 0,
      width: 8,

      // 疑似要素非共通
      right: -12,
      display: ({ insertPosition }) =>
        insertPosition === 'After' ? 'block' : 'none',
    },
  },
  clone: {
    marginTop: 10,
    marginLeft: 10,
    height: PAPER_HEIGHT,
    width: PAPER_WIDTH,
    transform: 'scale(1.025)',
    cursor: 'grabbing',
    backgroundColor: 'blue',
  },
})

export const Page = forwardRef<HTMLDivElement, PageProps>(function Page(
  // eslint-disable-next-line react/prop-types
  { id, active, clone, insertPosition, ...props },
  ref
) {
  const classes = useStyle({
    active,
    insertPosition,
    clone,
  })

  return (
    <>
      <div className={classes.wrapper}>
        {clone ? (
          <div ref={ref} className={classes.clone} data-id={id} {...props}>
            {id}
          </div>
        ) : (
          <div ref={ref} className={classes.item} data-id={id} {...props}>
            {id}
          </div>
        )}
      </div>
    </>
  )
})
