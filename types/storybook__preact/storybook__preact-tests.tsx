/** @jsx h */
import { h } from 'preact';
import { storiesOf, setAddon, addDecorator, addParameters, configure, getStorybook, RenderFunction, Story, forceReRender, DecoratorParameters, clearDecorators } from '@storybook/preact';

const Decorator = (story: RenderFunction) => <div>{story()}</div>;
const parameters: DecoratorParameters = { parameter: 'foo' };

forceReRender();

storiesOf('Welcome', module)
    // local addDecorator
    .addDecorator(Decorator)
    .add('to Storybook', () => <div/>)
    .add('to Storybook as Array', () => [<div />, <div />])
    .add('and a story with additional parameters', () => <div/>, parameters);

// global addDecorator
addDecorator(Decorator);
addParameters(parameters);
clearDecorators();

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
    .add('to Storybook as Array', () => [<div />, <div />])
    .add('and a story with additional parameters', () => <div/>, parameters)
    .addWithSideEffect('even more', () => <div/>);

// configure
configure(() => undefined, module);

// getStorybook
getStorybook().forEach(({ kind, stories }) => stories.forEach(({ name, render }) => render()));
