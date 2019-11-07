// Type definitions for chai-like 1.1
// Project: https://github.com/zation/chai-like
// Definitions by: Chayim Refael Friedman <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="chai" />

declare global {
    namespace Chai {
        interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
            like(expected: any): void;
        }
    }
}

declare namespace ChaiLike {
    interface Plugin {
        match(object: any, expected: any): boolean;
        assert(object: any, expected: any): boolean;
    }

    function extend(plugin: Plugin): void;
    function clearPlugins(): void;
}

declare const chaiLike: Chai.ChaiPlugin;
export = chaiLike;
