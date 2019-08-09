import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';

storiesOf('Text', module)
    .addDecorator(
        withBackgrounds([
            {
                name: 'white',
                value: '#fff',
                default: true
            },
            {
                name: 'black',
                value: '#000'
            }
        ])
    )
    .add('default', () => <p>This is just sample.</p>);
