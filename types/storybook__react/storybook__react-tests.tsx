import * as React from 'react';
import { storiesOf, setAddon, addDecorator, configure, getStorybook, RenderFunction, Story } from '@storybook/react';

const Decorator = (story: RenderFunction) => <div>{story()}</div>;

storiesOf('Welcome', module)
    // local addDecorator
    .addDecorator(Decorator)
    .add('to Storybook', () => <div/>);

// global addDecorator
addDecorator(Decorator);

// setAddon
interface AnyAddon {
    xyz(): void;
}
const AnyAddon: AnyAddon = {
    xyz() {}
};
setAddon(AnyAddon);
storiesOf<AnyAddon>('withAnyAddon', module).xyz();

// configure
configure(() => undefined, module);

// getStorybook
getStorybook().forEach(({ kind, stories }) => stories.forEach(({ name, render }) => render()));
