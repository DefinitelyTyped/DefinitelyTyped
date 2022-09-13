import Glide, {
    Anchors,
    Autoplay,
    Breakpoints,
    Controls,
    Images,
    Keyboard,
    Swipe,
    Component,
    ComponentFunction,
    Properties,
    TransformerFunction,
    EventsBus,
} from 'glidejs__glide/dist/glide.modular.esm';

// $ExpectType Glide
const glide = new Glide('.glide');

new Glide('.glide', { direction: 'rtl' });

glide.on('mount.after', () => {});

const Transformer: TransformerFunction = (_Glide: Properties, _Components, _Events: EventsBus) => {
    return { modify: (translate: number) => translate + 100 };
};

glide.mutate([Transformer]);

const Component: ComponentFunction = (_Glide: Properties, _Components, Events: EventsBus) => {
    const Example = {
        mount() {
            // $ExpectType BuildComponent
            const Build = _Components.Build;
            Build.activeClass();
            // $ExpectType AutoplayComponent | undefined
            const Autoplay = _Components.Autoplay;
            Autoplay?.start();
            Events.emit('example.mount');
            Events.emit('example.mount', { test: 1 });
        },
        method() {},
    };

    Events.on('mount.after', () => {
        Example.method();
    });

    return Example;
};

const Example: Component = {
    // @ts-expect-error
    mount(i: number) {
        return i;
    },
};

// $ExpectType Properties
const mounted = glide.mount();
glide.mount({ Autoplay });
glide.mount({ Component });
glide.mount({ Component, Autoplay });
glide.mount({ Anchors, Autoplay, Breakpoints, Controls, Images, Keyboard, Swipe });

// @ts-expect-error
glide.mount({ Autoplay: Component });

// $ExpectType number
mounted.index;

// $ExpectType Required<Options>
mounted.settings;

// $ExpectType number | false
mounted.settings.autoplay;

// $ExpectType Type
mounted.type;

// $ExpectType boolean
mounted.disabled;

mounted.update({ startAt: 0 });

mounted.destroy();

mounted.go('>');

mounted.pause();

mounted.play();

mounted.play(4000);

mounted.play();

mounted.disable();

mounted.enable();

// $ExpectType boolean
mounted.isType('carousel');
