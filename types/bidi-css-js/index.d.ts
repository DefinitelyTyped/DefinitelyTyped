// Type definitions for bidi-css-js 3.1
// Project: https://www.npmjs.com/package/bidi-css-js
// Definitions by: Gabor Juhasz <https://github.com/juhg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// source: https://github.com/TxHawks/bidi-css-js/blob/master/src/index.js#L11
type Property =
    | 'paddingStart'
    | 'paddingEnd'
    | 'marginStart'
    | 'marginEnd'
    | 'paddingInlineStart'
    | 'paddingInlineEnd'
    | 'marginInlineStart'
    | 'marginInlineEnd'
    | 'insetInlineStart'
    | 'insetInlineEnd'
    | 'start'
    | 'end'
    | 'borderStart'
    | 'borderEnd'
    | 'borderStartColor'
    | 'borderEndColor'
    | 'borderStartStyle'
    | 'borderEndStyle'
    | 'borderStartWidth'
    | 'borderEndWidth'
    | 'borderInlineStart'
    | 'borderInlineEnd'
    | 'borderInlineStartColor'
    | 'borderInlineEndColor'
    | 'borderInlineStartStyle'
    | 'borderInlineEndStyle'
    | 'borderInlineStartWidth'
    | 'borderInlineEndWidth'
    | 'borderTopStartRadius'
    | 'borderTopEndRadius'
    | 'borderBottomStartRadius'
    | 'borderBottomEndRadius'
    | 'borderStartStartRadius'
    | 'borderStartEndRadius'
    | 'borderEndStartRadius'
    | 'borderEndEndRadius';

declare function bidiCssJs(
    styles:
        | Record<Property, string | number | symbol> // autocomplete for most common properties
        | { [key: string]: string | number | symbol }, // but accept any string
    direction: 'ltr' | 'rtl',
): Record<string, string | number>;

export = bidiCssJs;
