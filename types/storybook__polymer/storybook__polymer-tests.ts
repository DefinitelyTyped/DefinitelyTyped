import {
    storiesOf,
    setAddon,
    addDecorator,
    addParameters,
    configure,
    getStorybook,
    RenderFunction,
    Story,
    forceReRender,
    DecoratorParameters,
    clearDecorators,
} from '@storybook/polymer';
import { html } from 'lit-element';

// const Decorator = (story: RenderFunction) => <div>{story()}</div>;
const Decorator = (story: RenderFunction) =>
    html`
        ${story()}
    `;
const parameters: DecoratorParameters = { parameter: 'foo' };

forceReRender();

storiesOf('Welcome', module)
    // local addDecorator
    .addDecorator(Decorator)
    .add(
        'to Storybook',
        () =>
            html`
                <div></div>
            `
    )
    .add('to Storybook as Array', () => [
        html`
            <div></div>
        `,
        html`
            <div></div>
        `,
    ])
    .add(
        'and a story with additional parameters',
        () => html`
            <div></div>
        `,
        parameters
    );

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
    },
};
setAddon(AnyAddon);
storiesOf<AnyAddon>('withAnyAddon', module)
    .addWithSideEffect(
        'custom story',
        () => html`
            <div></div>
        `
    )
    .addWithSideEffect(
        'more',
        () => html`
            <div></div>
        `
    )
    .add(
        'another story',
        () => html`
            <div></div>
        `
    )
    .add('to Storybook as Array', () => [
        html`
            <div></div>
        `,
        html`
            <div></div>
        `,
    ])
    .add(
        'and a story with additional parameters',
        () => html`
            <div></div>
        `,
        parameters
    )
    .addWithSideEffect(
        'even more',
        () => html`
            <div></div>
        `
    );

// configure
configure(() => undefined, module);

// getStorybook
getStorybook().forEach(({ kind, stories }) => stories.forEach(({ name, render }) => render()));
