import React from 'react'
import { Button } from '@material-ui/core'
import { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import { SortableList } from './SortableList'

export default {
  title: 'sortable/01_list/SortableList',
  component: SortableList,
} as Meta

const Template: Story = () => {
  return <SortableList />
}

export const Primary = Template.bind({})
export const WithOpenClose = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Button onClick={() => setOpen(false)}>Close</Button>
      {open && <SortableList />}
    </>
  )
}
Primary.args = {}
