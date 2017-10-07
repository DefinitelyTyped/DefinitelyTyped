/// <reference types="storybook__react" />

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';

const firstArgAction = decorateAction([
    args => args.slice(0, 1)
]);

storiesOf('Button', module)
    .add('action', () => (
        <button onClick={ action('my-action') }>
          Hello World!
        </button>
    ))
    .add('decorated action', () => (
        <button onClick={ firstArgAction('button-click') }>
          Hello World!
        </button>
    ));
