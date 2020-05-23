// Type definitions for redact-secrets 1.0
// Project: https://github.com/watson/redact-secrets#readme
// Definitions by: wrumsby <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Redact {
    map: (obj: object) => object;
    forEach: (obj: object) => void;
}

declare function redactFn(redacted: string): Redact;

export = redactFn;
