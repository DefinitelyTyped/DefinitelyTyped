import * as React from 'react';
import { addParameters, storiesOf, addDecorator } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

const { Component } = React;

// Test parameters as global options
addParameters({
    jsx: {
        skip: 3,
        enableBeautify: false,
        onBeforeRender: str => '',
    },
});

// Test `addWithJSX` function
storiesOf('Component', module).addWithJSX('simple info', () => (
    <Component>Click the "?" mark at top-right to view the info.</Component>
));

storiesOf('Component with options', module).addWithJSX(
    'simple info',
    () => <Component>Click the "?" mark at top-right to view the info.</Component>,
    {
        skip: 2,
        enableBeautify: false,
        onBeforeRender: str => '',
    }
);

storiesOf('Component with partial options', module).addWithJSX(
    'simple info',
    () => <Component>Click the "?" mark at top-right to view the info.</Component>,
    {
        skip: 2,
    }
);

// Test `jsxDecorator` decorator
storiesOf('test', module)
    .addDecorator(jsxDecorator)
    .add('Paris', () => <Component>Hello</Component>)
    .add('Orleans', () => <Component color="#236544">Hello</Component>);

// Test with global `jsxDecorator` decorator
addDecorator(jsxDecorator);
