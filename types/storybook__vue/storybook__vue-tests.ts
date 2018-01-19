import Vue from 'vue';
import { addDecorator, configure, getStorybook, setAddon, storiesOf, StoryFunction, Story } from '@storybook/vue';

interface AddCenteredAddon {
  addCentered(this: Story, storyName: string, storyFn: StoryFunction): Story & this;
}

const addCenteredAddon = {
  addCentered(this: Story, storyName: string, storyFn: StoryFunction): void {
    console.log(this.kind);
    this.add(storyName, storyFn);
  }
};

const Decorator = (story: StoryFunction) => {
  const wrapper = story();
  return {
    components: { wrapper },
    template: '<div :style="{ border: borderStyle }"><wrapper/></div>',
    data() {
      return { borderStyle: 'medium solid red' };
    }
  };
};

addDecorator(Decorator);
configure(() => undefined, module);
getStorybook().forEach(({ fileName, kind, stories }) => stories.forEach(({ name, render }) => render()));
setAddon(addCenteredAddon);

storiesOf('Storybook__vue', module)
  .addDecorator(Decorator)
  .add('story as a template', () => '<div></div>')
  .add('story as a component', () => ({
    components: {},
    template: '<div></div>'
  }));

storiesOf<AddCenteredAddon>('Add_Centered_Addon', module)
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
