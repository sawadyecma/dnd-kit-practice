import { Over } from '@dnd-kit/core'

export const PAPER_HEIGHT = 240
export const PAPER_WIDTH = 160

export const calcInsertPos = (
  over: Over | null,
  id: string,
  index: number | undefined,
  activeIndex: number
): InsertPosition => {
  if (index === undefined) {
    return undefined
  }
  if (over?.id !== id) {
    return undefined
  }
  if (index > activeIndex) {
    return 'After'
  }
  if (index < activeIndex) {
    return 'Before'
  }
  return undefined
}

export type InsertPosition = 'Before' | 'After' | undefined
