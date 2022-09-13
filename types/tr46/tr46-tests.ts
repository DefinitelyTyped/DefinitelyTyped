import { Options, ProcessingOption, toASCII, ToASCIIOptions, toUnicode } from 'tr46';

// test type exports
type PO = ProcessingOption;
type O = Options;
type TAO = ToASCIIOptions;

toASCII('foo.bar'); // $ExpectType string
toASCII('foo.bar', { checkBidi: true }); // $ExpectType string
toASCII('foo.bar', { checkHyphens: true }); // $ExpectType string
toASCII('foo.bar', { checkJoiners: true }); // $ExpectType string
toASCII('foo.bar', { processingOption: 'nontransitional' }); // $ExpectType string
toASCII('foo.bar', { processingOption: 'transitional' }); // $ExpectType string
// @ts-expect-error
toASCII('foo.bar', { processingOption: 'foo' });
toASCII('foo.bar', { useSTD3ASCIIRules: true }); // $ExpectType string
toASCII('foo.bar', { verifyDNSLength: true }); // $ExpectType string
// @ts-expect-error
toASCII('foo.bar', { foo: true });

toUnicode('foo.bar'); // $ExpectType string
toUnicode('foo.bar', { checkBidi: true }); // $ExpectType string
toUnicode('foo.bar', { checkHyphens: true }); // $ExpectType string
toUnicode('foo.bar', { checkJoiners: true }); // $ExpectType string
// @ts-expect-error
toUnicode('foo.bar', { processingOption: 'nontransitional' });
toUnicode('foo.bar', { useSTD3ASCIIRules: true }); // $ExpectType string
toUnicode('foo.bar', { verifyDNSLength: true }); // $ExpectType string
// @ts-expect-error
toUnicode('foo.bar', { foo: true });
