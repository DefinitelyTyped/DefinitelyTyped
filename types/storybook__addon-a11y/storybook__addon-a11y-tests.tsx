import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

storiesOf('button', module)
  .addDecorator(checkA11y)
  .add('Accessible', () => (
    <button>
      Accessible button
    </button>
  ));
