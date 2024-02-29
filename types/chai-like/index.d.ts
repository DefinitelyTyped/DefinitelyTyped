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

    interface ChaiLike extends Chai.ChaiPlugin {
        extend(plugin: Plugin): void;
        clearPlugins(): void;
    }
}

declare const chaiLike: ChaiLike.ChaiLike;
export = chaiLike;
