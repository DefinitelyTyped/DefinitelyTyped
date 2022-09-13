// tslint:disable: no-async-without-await space-before-function-paren
import debounce = require('promise-debounce');

debounce(() => Promise.resolve()); // $ExpectType () => Promise<void>
debounce(() => Promise.resolve(undefined)); // $ExpectType () => Promise<undefined>

debounce(async function () {
    this; // $ExpectType ObjectConstructor
}, Object);
