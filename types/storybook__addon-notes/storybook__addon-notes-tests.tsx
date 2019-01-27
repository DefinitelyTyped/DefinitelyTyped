import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withNotes, withMarkdownNotes, } from '@storybook/addon-notes';

const SIMPLE_MARKDOWN = `
## Markdown for component

A very simple component with markdown notes
`;

storiesOf('Component', module)
  .addDecorator(withNotes())
  .add('with withNotes',
    () => (<div>my component</div>)
  );

storiesOf('Component', module)
  .addDecorator(withNotes('Some text'))
  .add('with withNotes',
    () => (<div>my component</div>)
  );

storiesOf('Component', module)
  .addDecorator(withNotes({ text: 'Some text' }))
  .add('with withNotes',
    () => (<div>my component</div>)
  );

storiesOf('Component', module)
  .addDecorator(withNotes({ markdown: 'Some text' }))
  .add('with withNotes',
    () => (<div>my component</div>)
  );

storiesOf('Component', module)
  .addDecorator(withNotes({ markdown: 'Some text', markdownOptions: { sanitize: true } }))
  .add('with withNotes',
    () => (<div>my component</div>)
  );
