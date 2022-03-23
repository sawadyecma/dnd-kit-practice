import React from 'react'
import { Meta, Story } from '@storybook/react'
import { SortableList } from './SortableList'

export default {
  title: 'sortable/05_drag_over_lay/SortableList',
  component: SortableList,
} as Meta

const Template: Story = () => {
  return <SortableList />
}

export const Primary = Template.bind({})
Primary.args = {}
