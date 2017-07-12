/// <reference types="storybook__react" />

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

storiesOf('Button', module)
  .add('First', () => (
    <button onClick={linkTo('Button', 'Second')}>Go to "Second"</button>
  ))
  .add('Second', () => (
    <button onClick={linkTo('Button', 'First')}>Go to "First"</button>
  ));
