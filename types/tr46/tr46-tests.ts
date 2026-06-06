import { Options, toASCII, ToASCIIOptions, toUnicode } from "tr46";

// test type exports
type O = Options;
type TAO = ToASCIIOptions;

toASCII("foo.bar"); // $ExpectType string | null
toASCII("foo.bar", { checkBidi: true }); // $ExpectType string | null
toASCII("foo.bar", { checkHyphens: true }); // $ExpectType string | null
toASCII("foo.bar", { checkJoiners: true }); // $ExpectType string | null
toASCII("foo.bar", { ignoreInvalidPunycode: true }); // $ExpectType string | null
toASCII("foo.bar", { transitionalProcessing: true }); // $ExpectType string | null
toASCII("foo.bar", { useSTD3ASCIIRules: true }); // $ExpectType string | null
toASCII("foo.bar", { verifyDNSLength: true }); // $ExpectType string | null
// @ts-expect-error
toASCII("foo.bar", { foo: true });

toUnicode("foo.bar"); // $ExpectType { domain: string, error: boolean }
toUnicode("foo.bar", { checkBidi: true }); // $ExpectType { domain: string, error: boolean }
toUnicode("foo.bar", { checkHyphens: true }); // $ExpectType { domain: string, error: boolean }
toUnicode("foo.bar", { checkJoiners: true }); // $ExpectType { domain: string, error: boolean }
toUnicode("foo.bar", { ignoreInvalidPunycode: true }); // $ExpectType { domain: string, error: boolean }
toUnicode("foo.bar", { transitionalProcessing: true }); // $ExpectType { domain: string, error: boolean }
toUnicode("foo.bar", { useSTD3ASCIIRules: true }); // $ExpectType { domain: string, error: boolean }
// @ts-expect-error
toUnicode("foo.bar", { verifyDNSLength: true });
// @ts-expect-error
toUnicode("foo.bar", { foo: true });
