import { Meta, Story } from '@storybook/react'
import { List } from './List'

export default {
  title: 'sortable/04_grid_di_comp/List',
  component: List,
} as Meta

const Template: Story = () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <List />
}

export const Primary = Template.bind({})
Primary.args = {}
