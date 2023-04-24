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
        // @ts-expect-error
        SLOT.assert(primitive, '');
    });

    NON_STRINGS.forEach(nonString => {
        // @ts-expect-error
        SLOT.assert({}, nonString);
    });

    SLOT.assert({}, ''); // $ExpectType void
}
//#endregion

//#region has
{
    PRIMITIVES.forEach(primitive => {
        // @ts-expect-error
        SLOT.has(primitive, '');
    });

    NON_STRINGS.forEach(nonString => {
        // @ts-expect-error
        SLOT.has({}, nonString);
    });

    SLOT.has({}, 'any'); // $ExpectType boolean
}
//#endregion

//#region get
{
    PRIMITIVES.forEach(primitive => {
        // @ts-expect-error
        SLOT.get(primitive, '');
    });

    NON_STRINGS.forEach(nonString => {
        // @ts-expect-error
        SLOT.get({}, nonString);
    });

    SLOT.get({}, 'any'); // $ExpectType any
}
//#endregion

//#region set
{
    PRIMITIVES.forEach(primitive => {
        // @ts-expect-error
        SLOT.set(primitive, '', null);
    });

    NON_STRINGS.forEach(nonString => {
        // @ts-expect-error
        SLOT.set({}, nonString, null);
    });

    SLOT.set({}, 'any', 42); // $ExpectType void
    SLOT.set({}, 'any', Infinity); // $ExpectType void
}
//#endregion
