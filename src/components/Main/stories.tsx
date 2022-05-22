import { Meta, Story } from '@storybook/react/types-6-0'

import { MainProps } from './types'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story<MainProps> = (args) => <Main {...args} />
