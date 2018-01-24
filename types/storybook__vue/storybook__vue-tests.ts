import Vue from 'vue';
import { storiesOf, setAddon, addDecorator, configure, getStorybook, RenderFunction, Story } from '@storybook/vue';

const HelloWorld = Vue.component('hello-world', {
    template: '<h2>Hello World</h2>'
});
const Decorator = () => ({
    template: '<div style="text-align: center;"><story/></div>'
});

storiesOf('HelloWorld', module)
    .add('story as a template', () => '<hello-world></hello-world>')
    .add('story as a component', () => ({
        components: { HelloWorld },
        template: '<hello-world></hello-world>'
    }))
    .add('story with a render method', () => ({
        components: { HelloWorld },
        render: (h) => h(HelloWorld)
    }))
    .addDecorator(Decorator)
    .add('story with a decorator', () => ({
        components: { HelloWorld },
        template: '<hello-world></hello-world>'
    }));

// global addDecorator
addDecorator(Decorator);

// setAddon
interface AnyAddon {
    addWithSideEffect<T>(this: Story & T, storyName: string, storyFn: RenderFunction): Story & T;
}
const addon: AnyAddon = {
    addWithSideEffect<T>(this: Story & T, storyName: string, storyFn: RenderFunction): Story & T {
        console.log(this.kind === 'withAnyAddon');
        return this.add(storyName, storyFn);
    }
};
setAddon(addon);
storiesOf<AnyAddon>('withAnyAddon', module)
    .addWithSideEffect('custom story', () => ({
        template: '<div>custom story</div>'
    }))
    .addWithSideEffect('more', () => ({
        template: '<div>more</div>'
    }))
    .add('another story', () => ({
        template: '<div></div>'
    }))
    .addWithSideEffect('even more', () => ({
        template: '<div></div>'
    }));

// configure
configure(() => undefined, module);

// getStorybook
getStorybook().forEach(({ kind, stories }) => stories.forEach(({ name, render }) => render()));
