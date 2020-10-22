import dlv = require('dlv');

const obj = {
    undef: undefined,
    zero: 0,
    one: 1,
    n: null,
    f: false,
    a: {
        two: 2,
        b: {
            three: 3,
            c: {
                four: 4,
            },
        },
    },
    array: [
        ['a', 'b'],
        ['c', 'd'],
    ],
};

// Test without defaults
dlv(obj, '');
dlv(obj, 'one');
dlv(obj, 'one.two');
dlv(obj, 'a');
dlv(obj, 'a.two');
dlv(obj, 'a.b');
dlv(obj, 'a.b.three');
dlv(obj, 'a.b.c');
dlv(obj, 'a.b.c.four');
dlv(obj, 'n');
dlv(obj, 'n.badkey');
dlv(obj, 'f');
dlv(obj, 'f.badkey');
dlv(obj, ['array', 0, 1]);
dlv(obj, ['array', 1, 1]);

// Test defaults
dlv(obj, '', 'foo');
dlv(obj, 'undef', 'foo');
dlv(obj, 'n', null);
dlv(obj, 'n.badkey', 'foo');
dlv(obj, 'zero', 0);
dlv(obj, 'a.badkey', 'foo');
dlv(obj, 'a.badkey.anotherbadkey', 'foo');
dlv(obj, 'f', false);
dlv(obj, 'f.badkey', 'foo');
