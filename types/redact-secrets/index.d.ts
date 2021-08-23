// Type definitions for redact-secrets 1.0
// Project: https://github.com/watson/redact-secrets#readme
// Definitions by: wrumsby <https://github.com/wrumsby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

interface Redactor {
    map: (obj: any) => any;
    forEach: (obj: any) => void;
}

declare function Redact(redacted: string): Redactor;

export = Redact;
