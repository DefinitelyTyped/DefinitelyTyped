import { assign, merge } from '@ember/polyfills';

(() => { /* assign */
    assign({}, { a: 'b'});
    assign({}, { a: 'b'}).a; // $ExpectType string
    assign({ a: 6 }, { a: 'b'}).a; // $ExpectType string
    assign({ a: 6 }, {}).a; // $ExpectType number
    assign({ b: 6 }, {}).a; // $ExpectError
    // TODO enable after https://github.com/typed-ember/ember-cli-typescript/issues/291
    // assign({}, { b: 6 }, {}).b; // $ExpectType number
    assign({ a: 'hello' }, { b: 6 }, {}).a; // $ExpectType string
    // TODO enable after https://github.com/typed-ember/ember-cli-typescript/issues/291
    // assign({ a: 'hello' }, { b: 6 }, { a: true }).a; // $ExpectType boolean
    // TODO enable after https://github.com/typed-ember/ember-cli-typescript/issues/291
    // assign({ a: 'hello' }, '', { a: true }).a; // $ExpectError
    assign({ d: ['gobias industries'] }, { a: 'hello' }, { b: 6 }, { a: true }).d; // $ExpectType string[]
})();

(() => { /* merge */
    merge({}, { a: 'b'});
    merge({}, { a: 'b'}).a; // $ExpectType string
    merge({ a: 6 }, { a: 'b'}).a; // $ExpectType string
    merge({ a: 6 }, {}).a; // $ExpectType number
    merge({ b: 6 }, {}).a; // $ExpectError
})();
