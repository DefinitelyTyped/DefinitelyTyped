// $ExpectType Static
const glide = new Glide('.glide');

new Glide('.glide', { direction: 'rtl' });

glide.on('mount.after', () => {});

const Transformer: Glide.TransformerFunction = (_Glide, _Components, _Events) => {
    return {
        modify(translate) {
            return translate + 100;
        },
    };
};

glide.mutate([Transformer]);

const Component: Glide.ComponentFunction = (_Glide, _Components, Events) => {
    const Example = {
        mount() {
            Events.emit('example.mount');
        },

        method() {},
    };

    Events.on('mount.after', () => {
        Example.method();
    });

    return Example;
};

glide.mount({ Component });

// $ExpectType Properties
const mounted = glide.mount();

// $ExpectType number
mounted.index;

// $ExpectType Options
mounted.settings;

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
