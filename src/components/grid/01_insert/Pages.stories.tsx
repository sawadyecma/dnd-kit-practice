import { Meta, Story } from '@storybook/react'
import { Pages } from './Pages'

export default {
  title: 'grid/01_insert/Pages',
  component: Pages,
} as Meta

const Template: Story = () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Pages />
}

export const Primary = Template.bind({})
Primary.args = {}
