import extenso = require('extenso');

extenso('42'); // $ExpectType string
extenso(42); // $ExpectType string
extenso('42', { mode: 'number' }); // $ExpectType string
extenso('42', { mode: 'currency' }); // $ExpectType string

extenso('42', { negative: 'formal' }); // $ExpectType string
extenso('42', { negative: 'informal' }); // $ExpectType string

extenso('16', { locale: 'br' }); // $ExpectType string
extenso('16', { locale: 'pt' }); // $ExpectType string

extenso(42, { mode: 'currency' }); // $ExpectType string
extenso(42, { mode: 'currency', currency: { type: 'BRL' } }); // $ExpectType string
extenso(42, { mode: 'currency', currency: { type: 'EUR' } }); // $ExpectType string
extenso(42, { mode: 'currency', currency: { type: 'USD' } }); // $ExpectError

extenso('42', { number: { gender: 'm' } }); // $ExpectType string
extenso('42', { number: { gender: 'f' } }); // $ExpectType string

extenso('3,14', { number: { decimal: 'formal' } }); // $ExpectType string
extenso('3,14', { number: { decimal: 'informal' } }); // $ExpectType string

// $ExpectType string
extenso('42', {
    mode: 'number',
    locale: 'br',
    negative: 'formal',
    scale: 'short',
    number: {
        gender: 'm',
        decimal: 'formal',
    },
});

// $ExpectType string
extenso('42', {
    mode: 'currency',
    locale: 'br',
    negative: 'formal',
    scale: 'short',
    currency: {
        type: 'BRL',
    },
});
