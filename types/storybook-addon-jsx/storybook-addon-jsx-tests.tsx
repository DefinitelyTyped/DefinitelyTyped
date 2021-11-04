import { addParameters, storiesOf, addDecorator } from '@storybook/react';
import * as React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';

// Test parameters as global options
addParameters({
    jsx: {
        skip: 3,
        enableBeautify: false,
        onBeforeRender: () => '',
    },
});

// Test `addWithJSX` function
storiesOf('Component', module).addWithJSX('simple info', () => (
    <div>Click the "?" mark at top-right to view the info.</div>
));

storiesOf('Component with options', module).addWithJSX(
    'simple info',
    () => <div>Click the "?" mark at top-right to view the info.</div>,
    {
        skip: 2,
        enableBeautify: false,
        onBeforeRender: () => '',
    }
);

storiesOf('Component with partial options', module).addWithJSX(
    'simple info',
    () => <div>Click the "?" mark at top-right to view the info.</div>,
    {
        skip: 2,
    }
);

// Test `jsxDecorator` decorator
storiesOf('test', module)
    .addDecorator(jsxDecorator)
    .add('Paris', () => <div>Hello</div>)
    .add('Orleans', () => <div color="#236544">Hello</div>);

// Test with global `jsxDecorator` decorator
addDecorator(jsxDecorator);
