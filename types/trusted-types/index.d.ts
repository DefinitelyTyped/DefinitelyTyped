// Type definitions for trusted-types 2.0
// Project: https://github.com/WICG/trusted-types
// Definitions by: Jakub Vrana <https://github.com/vrana>
//                 Damien Engels <https://github.com/engelsdamien>
//                 Emanuel Tesar <https://github.com/siegrift>
//                 Bjarki <https://github.com/bjarkler>
//                 Sebastian Silbermann <https://github.com/eps1lon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import * as lib from './lib';

// Re-export the type definitions globally.
declare global {
    // tslint:disable-next-line no-empty-interface -- interface to allow module augmentation
    interface TrustedHTML extends lib.TrustedHTML {}
    // tslint:disable-next-line no-empty-interface -- interface to allow module augmentation
    interface TrustedScript extends lib.TrustedScript {}
    // tslint:disable-next-line no-empty-interface -- interface to allow module augmentation
    interface TrustedScriptURL extends lib.TrustedScriptURL {}

    // tslint:disable-next-line no-empty-interface -- interface to allow module augmentation
    interface TrustedTypePolicy extends lib.TrustedTypePolicy {}

    // tslint:disable-next-line no-empty-interface -- interface to allow module augmentation
    interface TrustedTypePolicyFactory extends lib.TrustedTypePolicyFactory {}

    // tslint:disable-next-line no-empty-interface -- interface to allow module augmentation
    interface TrustedTypePolicyOptions extends lib.TrustedTypePolicyOptions {}

    // Attach the relevant Trusted Types properties to the Window object.
    // tslint:disable-next-line no-empty-interface -- interface to allow module augmentation
    interface Window extends lib.TrustedTypesWindow {}
}

// These are the available exports when using the polyfill as npm package (e.g. in nodejs)
interface InternalTrustedTypePolicyFactory extends lib.TrustedTypePolicyFactory {
    TrustedHTML: typeof lib.TrustedHTML;
    TrustedScript: typeof lib.TrustedScript;
    TrustedScriptURL: typeof lib.TrustedScriptURL;
}

declare const trustedTypes: InternalTrustedTypePolicyFactory;

declare class TrustedTypesEnforcer {
    constructor(config: TrustedTypeConfig);
    install: () => void;
    uninstall: () => void;
}

// tslint:disable-next-line no-unnecessary-class
declare class TrustedTypeConfig {
    constructor(
        isLoggingEnabled: boolean,
        isEnforcementEnabled: boolean,
        allowedPolicyNames: string[],
        allowDuplicates: boolean,
        cspString?: string | null,
        windowObject?: Window,
    );
}

export { trustedTypes, TrustedTypesEnforcer, TrustedTypeConfig, TrustedTypePolicy, TrustedTypePolicyFactory };
