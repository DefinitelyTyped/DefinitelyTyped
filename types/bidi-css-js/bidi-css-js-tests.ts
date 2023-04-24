import bidiCssJs = require('bidi-css-js');

// $ExpectType Record<string, string | number>
bidiCssJs({ start: 8 }, 'rtl');
// $ExpectType Record<string, string | number>
bidiCssJs({ paddingEnd: '10vw' }, 'ltr');
// $ExpectType Record<string, string | number>
bidiCssJs({ somethingInvalid: 123 }, 'ltr');
// @ts-expect-error
bidiCssJs({ paddingEnd: '10vw' }, '');
// @ts-expect-error
bidiCssJs({ paddingEnd: '10vw' });
// @ts-expect-error
bidiCssJs('', 'ltr');
