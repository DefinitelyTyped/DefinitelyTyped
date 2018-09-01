import * as React from 'react';
import {
    storiesOf,
    setAddon,
    addDecorator,
    configure,
    getStorybook,
    RenderFunction,
    getStorybookUI,
    Story
} from '@storybook/react-native';

const Decorator = (story: RenderFunction) => <div>{story()}</div>;

storiesOf('Welcome', module)
    // local addDecorator
    .addDecorator(Decorator)
    .add('to Storybook', () => <div />)
    .add('to Storybook as Array', () => [<div />, <div />]);

// global addDecorator
addDecorator(Decorator);

// setAddon
interface AnyAddon {
    addWithSideEffect<T>(
        this: Story & T,
        storyName: string,
        storyFn: RenderFunction
    ): Story & T;
}
const AnyAddon: AnyAddon = {
    addWithSideEffect<T>(
        this: Story & T,
        storyName: string,
        storyFn: RenderFunction
    ): Story & T {
        console.log(this.kind === 'withAnyAddon');
        return this.add(storyName, storyFn);
    }
};
setAddon(AnyAddon);
storiesOf<AnyAddon>('withAnyAddon', module)
    .addWithSideEffect('custom story', () => <div />)
    .addWithSideEffect('more', () => <div />)
    .add('another story', () => <div />)
    .add('to Storybook as Array', () => [<div />, <div />])
    .addWithSideEffect('even more', () => <div />);

// configure
configure(() => undefined, module);

// getStorybook
getStorybook().forEach(({ kind, stories }) =>
    stories.forEach(({ name, render }) => render())
);

const StorybookUI = getStorybookUI({
    port: 9001,
    host: 'localhost',
    onDeviceUI: true
});

const TestRender = () => <StorybookUI />;
