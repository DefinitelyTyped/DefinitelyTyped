import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withNotes, withMarkdownNotes, WithNotes } from '@storybook/addon-notes';

const SIMPLE_MARKDOWN = `
## Markdown for component

A very simple component with markdown notes
`;

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
  )
  .add('with withMarkdownNotes',
    withMarkdownNotes(SIMPLE_MARKDOWN)(
      () => (<div>my component</div>)
    )
  );
