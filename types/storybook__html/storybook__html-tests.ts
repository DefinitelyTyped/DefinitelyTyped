import { storiesOf, setAddon, addDecorator, addParameters, configure, getStorybook, RenderFunction, Story, forceReRender, DecoratorParameters, clearDecorators } from '@storybook/html';

const Decorator = (story: RenderFunction) => `<div>${story()}</div>`;
const parameters: DecoratorParameters = { parameter: 'foo' };

forceReRender();

storiesOf('Welcome', module)
    // local addDecorator
    .addDecorator(Decorator)
    .add('to Storybook', () => "<div></div>")
    .add('to Storybook as Array', () => ["<div></div>", "<div></div>"])
    .add('and a story with additional parameters', () => "<div></div>", parameters);

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
    .addWithSideEffect('custom story', () => "<div></div>")
    .addWithSideEffect('more', () => "<div></div>")
    .add('another story', () => "<div></div>")
    .add('to Storybook as Array', () => ["<div></div>", "<div></div>"])
    .add('storybook with dom', () => {
        const button = document.createElement('button');
        button.innerText = '😀 😎 👍 💯';
        return button;
    })
    .add('and a story with additional parameters', () => "<div></div>", parameters)
    .addWithSideEffect('even more', () => "<div></div>");

// configure
configure(() => undefined, module);

// getStorybook
getStorybook().forEach(({ kind, stories }) => stories.forEach(({ name, render }) => render()));
