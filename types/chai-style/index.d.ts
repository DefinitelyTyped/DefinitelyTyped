// Type definitions for chai-style 1.0
// Project: https://github.com/darlanmendonca/chai-style
// Definitions by: Avi Vahl <https://github.com/AviVahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="chai" />

declare const chaiStyle: Chai.ChaiPlugin;
export = chaiStyle;

declare global {
    namespace Chai {
        interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
            style(styleName: string, styleValue?: string): Assertion;
        }
    }
}
