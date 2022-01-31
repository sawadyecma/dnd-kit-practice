import { Meta, Story } from '@storybook/react'
import { SortableList } from './SortableList'

export default {
  title: 'sortable/03_list_di_comp/SortableList',
  component: SortableList,
} as Meta

const Template: Story = () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <SortableList />
}

export const Primary = Template.bind({})
Primary.args = {}
