import * as React from 'react'
import { storiesOf } from '@storybook/react'
import figmaDecorator, { WithFigma } from 'storybook-figma'

storiesOf('Button', module)
  .add('primary', () => (
    <WithFigma
      url={'https://www.figma.com/file/LbcvMJxDtshDmYtdyfJfkA72/Button-Primary'}
    >
      <button>My Button </button>
    </WithFigma>
  ))
  .add('secondary', () => (
    <WithFigma
      url={'https://www.figma.com/file/LbcvMJxDtshDmYtdyfJfkA72/Button-Secondary'}
    >
      <button>My Secondary Button</button>
    </WithFigma>
  ))


storiesOf('App', module)
  .addDecorator(figmaDecorator({
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  }))
  .add('My App', () => (
    <div>Hello world</div>
  ))