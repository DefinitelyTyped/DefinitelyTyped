import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { hrefTo, linkTo } from '@storybook/addon-links';
import LinkTo from '@storybook/addon-links/react';

storiesOf('Button', module)
  .add('First', () => (
    <button onClick={linkTo('Button', 'Second')}>Go to "Second"</button>
  ))
  .add('Second', () => (
    <button onClick={linkTo('Button', 'First')}>Go to "First"</button>
  ))
  .add('With function', () => (
    <button onClick={linkTo((arg1, arg2) => 'Button', () => 'First')}>Go to "First"</button>
  ))
  .add('With <LinkTo> component', () => (
    <LinkTo story="First" kind="Button"><button>Go to "First"</button></LinkTo>
  ));

hrefTo('Button', 'First').then(link => link);
