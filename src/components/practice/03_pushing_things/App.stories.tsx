import { Meta, Story } from '@storybook/react'
import { App } from './App'

export default {
  title: 'practice/03_pushing_things/App',
  component: App,
} as Meta

const Template: Story = () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <App />
}

export const Primary = Template.bind({})
Primary.args = {}
