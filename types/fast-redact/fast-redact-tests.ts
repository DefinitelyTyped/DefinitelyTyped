import * as FastRedact from 'fast-redact';

// should return redactFn
FastRedact(); // $ExpectType redactFn
FastRedact({ paths: [] }); // $ExpectType redactFn
FastRedact({ paths: ['some.path'] }); // $ExpectType redactFn
FastRedact({ paths: [], censor: '[REDACTED]' }); // $ExpectType redactFn
FastRedact({ paths: [], strict: true }); // $ExpectType redactFn
FastRedact({ paths: [], serialize: JSON.stringify }); // $ExpectType redactFn
FastRedact({ paths: [], serialize: true }); // $ExpectType redactFn
FastRedact({ paths: [], serialize: false }); // $ExpectType redactFnNoSerialize
FastRedact({ paths: [], remove: true }); // $ExpectType redactFn

// should return string
FastRedact()(''); // $ExpectType string

// should return string or T
FastRedact()({ someField: 'someValue' }); // $ExpectType string | { someField: string; }
