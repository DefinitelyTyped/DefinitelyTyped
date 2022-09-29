// $ExpectType Static
const glide = new Glide('.glide');

new Glide('.glide', { direction: 'rtl' });

glide.on('mount.after', () => {});

const Transformer: Glide.TransformerFunction = (_Glide: Glide.Properties, _Components, _Events: Glide.EventsBus) => {
    return { modify: (translate: number) => translate + 100 };
};

glide.mutate([Transformer]);

interface CustomComponent extends Glide.Component {
    mount(): void;
    method(): void;
}

const Component: Glide.ComponentFunction<CustomComponent> = (_Glide, _Components, Events) => {
    const Example = {
        mount() {
            // $ExpectType BuildComponent
            const Build = _Components.Build;
            Build.activeClass();
            // $ExpectType AutoplayComponent
            const Autoplay = _Components.Autoplay;
            Autoplay.start();
            Events.emit('example.mount');
            Events.emit('example.mount', { test: 1 });
        },
        method() {},
    };

    Events.on('mount.after', () => {
        Example.method();
    });

    Events.on('run.after', ({ direction, steps }) => {});
    Events.on('example.mount', ({ test }) => {});

    return Example;
};

glide.mount({ Component });

// $ExpectType Properties
const mounted = glide.mount();

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
