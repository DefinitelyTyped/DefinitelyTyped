import * as FastRedact from "fast-redact";

FastRedact({ paths: [] }); // $ExpectType redactFn
FastRedact({ paths: [], censor: '[REDACTED]' }); // $ExpectType redactFn
FastRedact({ paths: [], strict: true }); // $ExpectType redactFn
FastRedact({ paths: [], serialize: JSON.stringify }); // $ExpectType redactFn
FastRedact({ paths: [], serialize: false }); // $ExpectType redactFn
FastRedact({ paths: [], remove: true }); // $ExpectType redactFn
FastRedact({ paths: [] })(""); // $ExpectType ""
