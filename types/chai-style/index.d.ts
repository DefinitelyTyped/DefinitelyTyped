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
