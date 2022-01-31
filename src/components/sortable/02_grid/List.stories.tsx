import { Meta, Story } from '@storybook/react'
import { List } from './List'

export default {
  title: 'sortable/02_grid/List',
  component: List,
} as Meta

const Template: Story = () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <List />
}

export const Primary = Template.bind({})
Primary.args = {}
