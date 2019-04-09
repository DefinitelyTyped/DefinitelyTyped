import Glide, {
    Autoplay,
    Anchors,
    Breakpoints,
    Controls,
    GlideOptions,
    Images,
    Swipe, ComponentInterface, ComponentCollectionInterface, EventsBus, Mutator, Component, MutatorInterface,
} from '@glidejs/glide';

class MyComponent implements ComponentInterface {
    public constructor (private glide: Glide, private components: ComponentCollectionInterface, private events: EventsBus) {}
    public mount() {
        this.glide.go('=1');
    }
};

const component: Component<MyComponent> = (glide, components, events) => {
    return new MyComponent(glide, components, events);
};

const iLikeBigGaps: Mutator<MutatorInterface> = (glide, components, events) => {
    const iCannotLie = components.Gaps.grow * 4;
    return {
        modify(translate: number) { return translate + iCannotLie }
    }
};

new Glide(selector, options).mount({ Autoplay, Anchors, Breakpoints, Images, Controls, Swipe, component });
