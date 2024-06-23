/// <reference types="chai" />
/// <reference types="chai-as-promised" />

declare global {
    namespace Chai {
        interface LanguageChains {
            always: Assertion;
        }

        interface Assertion {
            (message?: string): Assertion;
            ensure: Assertion;
        }

        interface PromisedAssertion extends Eventually, PromiseLike<any> {
            (message?: string): PromisedAssertion;
            ensure: PromisedAssertion;
        }
    }
}

declare const dirtyChai: Chai.ChaiPlugin;
export = dirtyChai;
