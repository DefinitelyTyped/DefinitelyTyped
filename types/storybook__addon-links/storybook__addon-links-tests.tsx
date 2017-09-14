import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

storiesOf('Button', module)
  .add('First', () => (
    <button onClick={linkTo('Button', 'Second')}>Go to "Second"</button>
  ))
  .add('Second', () => (
    <button onClick={linkTo('Button', 'First')}>Go to "First"</button>
  ))
  .add('With function', () => (
    <button onClick={linkTo((arg1, arg2) => 'Button', () => 'First')}>Go to "First"</button>
  ));
