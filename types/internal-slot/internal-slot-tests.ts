import SLOT = require('internal-slot');

const PRIMITIVES: [null, undefined, true, false, string, '', number, 0] = [
    null,
    undefined,
    true,
    false,
    'foo',
    '',
    42,
    0,
];
const NON_STRINGS: [null, undefined, true, false, number, 0, object, any[], () => void, RegExp] = [
    null,
    undefined,
    true,
    false,
    42,
    0,
    {},
    [],
    () => {},
    /a/g,
];

//#region assert
{
    PRIMITIVES.forEach(primitive => {
        SLOT.assert(primitive, ''); // $ExpectError
    });

    NON_STRINGS.forEach(nonString => {
        SLOT.assert({}, nonString); // $ExpectError
    });

    SLOT.assert({}, ''); // $ExpectType void
}
//#endregion

//#region has
{
    PRIMITIVES.forEach(primitive => {
        SLOT.has(primitive, ''); // $ExpectError
    });

    NON_STRINGS.forEach(nonString => {
        SLOT.has({}, nonString); // $ExpectError
    });

    SLOT.has({}, 'any'); // $ExpectType boolean
}
//#endregion

//#region get
{
    PRIMITIVES.forEach(primitive => {
        SLOT.get(primitive, ''); // $ExpectError
    });

    NON_STRINGS.forEach(nonString => {
        SLOT.get({}, nonString); // $ExpectError
    });

    SLOT.get({}, 'any'); // $ExpectType any
}
//#endregion

//#region set
{
    PRIMITIVES.forEach(primitive => {
        SLOT.set(primitive, '', null); // $ExpectError
    });

    NON_STRINGS.forEach(nonString => {
        SLOT.set({}, nonString, null); // $ExpectError
    });

    SLOT.set({}, 'any', 42); // $ExpectType void
    SLOT.set({}, 'any', Infinity); // $ExpectType void
}
//#endregion
