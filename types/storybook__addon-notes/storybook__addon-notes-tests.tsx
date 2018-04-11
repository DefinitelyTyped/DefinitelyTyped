import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withNotes, WithNotes } from '@storybook/addon-notes';

storiesOf('Component', module)
  .add('with some emoji', () => (
    <WithNotes notes={'A very simple component'}>
      my component
    </WithNotes>
  ))
  .add('with withNotes',
    withNotes('A very simple component')(
      () => (<div>my component</div>)
    )
  );
