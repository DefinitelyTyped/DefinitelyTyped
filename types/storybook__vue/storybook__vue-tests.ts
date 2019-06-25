import Vue, { ComponentOptions } from 'vue';
import { addDecorator, configure, getStorybook, setAddon, storiesOf, StoryFunction, Story, addParameters, DecoratorParameters } from '@storybook/vue';

interface CustomStory extends Story {
    addCentered(storyName: string, storyFn: StoryFunction): this;
}

const addCenteredAddon = {
    addCentered(this: Story, storyName: string, storyFn: StoryFunction): void {
        console.log(this.kind);
        this.add(storyName, storyFn);
    }
};

const Decorator = (story: () => ComponentOptions<Vue>) => {
    const wrapper = story();
    return {
        components: { wrapper },
        template: '<div :style="{ border: borderStyle }"><wrapper/></div>',
        data() {
            return { borderStyle: 'medium solid red' };
        }
    };
};
const parameters: DecoratorParameters = { parameter: 'foo' };

addDecorator(Decorator);
addParameters(parameters);
configure(() => undefined, module);
getStorybook().forEach(({ fileName, kind, stories }) => stories.forEach(({ name, render }) => render()));
setAddon(addCenteredAddon);

storiesOf('Storybook__vue', module)
    .addDecorator(Decorator)
    .add('story as a template', () => '<div></div>')
    .add('story as a component', () => ({
        components: {},
        template: '<div></div>'
    }))
    .add('story has a option', () => ({
        components: {},
        template: '<div></div>'
    }), { notes: 'I have notes' });

(storiesOf('Custom_Story', module) as CustomStory)
    .addCentered('custom story', () => ({
        template: '<div></div>'
    }))
    .add('story as a template', () => '<div></div>')
    .add('story as a component', () => ({
        components: {},
        template: '<div></div>'
    }))
    .addCentered('custom story', () => ({
        template: '<div></div>'
    }));
