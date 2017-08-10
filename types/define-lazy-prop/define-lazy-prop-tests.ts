import defineLazyProp = require('define-lazy-prop');

const unicorn = {
    foo: 'bar'
};

const rainbowUnicorn = defineLazyProp(unicorn, 'rainbow', () => 1);

rainbowUnicorn.rainbow; // $ExpectType number
rainbowUnicorn.foo; // $ExpectType string
