import * as React from 'react';
import { storiesOf, setAddon, addDecorator, configure, getStorybook, RenderFunction, Story } from '@storybook/react';

const Decorator = (story: RenderFunction) => <div>{story()}</div>;

storiesOf('Welcome', module)
    // local addDecorator
    .addDecorator(Decorator)
    .add('to Storybook', () => <div/>);
    .add('to Storybook as Array', () => [<div />, <div />]);

// global addDecorator
addDecorator(Decorator);

// setAddon
interface AnyAddon {
    addWithSideEffect<T>(this: Story & T, storyName: string, storyFn: RenderFunction): Story & T;
}
const AnyAddon: AnyAddon = {
    addWithSideEffect<T>(this: Story & T, storyName: string, storyFn: RenderFunction): Story & T {
        console.log(this.kind === 'withAnyAddon');
        return this.add(storyName, storyFn);
    }
};
setAddon(AnyAddon);
storiesOf<AnyAddon>('withAnyAddon', module)
    .addWithSideEffect('custom story', () => <div/>)
    .addWithSideEffect('more', () => <div/>)
    .add('another story', () => <div/>)
    .add('to Storybook as Array', () => [<div />, <div />]);
    .addWithSideEffect('even more', () => <div/>);

// configure
configure(() => undefined, module);

// getStorybook
getStorybook().forEach(({ kind, stories }) => stories.forEach(({ name, render }) => render()));
