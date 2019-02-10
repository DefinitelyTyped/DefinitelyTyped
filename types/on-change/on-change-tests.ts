import onChange = require('on-change');

const object = {
    foo: false,
    a: {
        b: [
            {
                c: false,
            },
        ],
    },
};

const watchedObject = onChange(object, () => {});

watchedObject.foo = true;
watchedObject.a.b[0].c = true;
