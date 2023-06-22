import emailPrompt, { Options } from 'email-prompt';

// test type exports
type Opts = Options;

emailPrompt(); // $ExpectType Promise<string>
emailPrompt({ start: '>' }); // $ExpectType Promise<string>
emailPrompt({ domains: new Set(['foo.bar']) }); // $ExpectType Promise<string>
emailPrompt({ forceLowerCase: false }); // $ExpectType Promise<string>
emailPrompt({ suggestionColor: 'blue' }); // $ExpectType Promise<string>
emailPrompt({ autocompleteChars: new Set(['\r']) }); // $ExpectType Promise<string>
emailPrompt({ resolveChars: new Set(['\n']) }); // $ExpectType Promise<string>
emailPrompt({ abortChars: new Set() }); // $ExpectType Promise<string>
emailPrompt({ allowInvalidChars: true }); // $ExpectType Promise<string>
// @ts-expect-error
emailPrompt({ foo: 'bar' });
