// Type definitions for is-secret 1.2
// Project: https://github.com/watson/is-secret#readme
// Definitions by: wrumsby <https://github.com/wrumsby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace isSecret;
export = isSecret;

declare namespace isSecret {
    function key(key: string): boolean;

    function value(value: string): boolean;
}
