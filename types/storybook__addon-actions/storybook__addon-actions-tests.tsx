/// <reference types="storybook__react" />

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction, configureActions } from '@storybook/addon-actions';

configureActions({
    depth: 100
});

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

interface CustomComponentProps {
    id: string;
    setValues(id: string, values: string[]): void;
}
class CustomComponent extends React.Component<CustomComponentProps> {
    setSomeValues = () => {
        this.props.setValues(this.props.id, ['one', 'two', 'three']);
    }
    render() {
        return <button onClick={this.setSomeValues}>Set some values</button>;
    }
}

storiesOf('CustomComponent', module)
    .add('decorated custom action', () => (
        <CustomComponent id="test" setValues={firstArgAction('set-values')} />
    ));
