/// <reference types="storybook__react" />

import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { WithNotes } from '@storybook/addon-notes';

storiesOf('Component', module)
  .add('with some emoji', () => (
    <WithNotes notes={'A very simple component'}>
      my component
    </WithNotes>
  ));
