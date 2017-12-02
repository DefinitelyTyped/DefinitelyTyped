// Type definitions for chai-webdriverio 0.4
// Project: https://github.com/marcodejongh/chai-webdriverio
// Definitions by: Nickolai Orekhov <https://github.com/sherlock1982>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="webdriverio" />
/// <reference types="chai" />

declare global {
    namespace Chai {
        interface Assertion {
            count: (count: number) => void;
            focus: () => void;
            text: (expected: string|number|RegExp) => void;
            there: () => void;
            value: (expected: string|number|RegExp) => void;
            visible: () => void;
            immediately: Assertion;
        }
    }
}

declare function chaiWebdriverIO(client: WebdriverIO.Client<void>, options?: any): (chai: any, utils: any) => void;
export = chaiWebdriverIO;
