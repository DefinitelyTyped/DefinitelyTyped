// Type definitions for trusted-types 2.0
// Project: https://github.com/WICG/trusted-types
// Definitions by: Jakub Vrana <https://github.com/vrana>
//                 Damien Engels <https://github.com/engelsdamien>
//                 Emanuel Tesar <https://github.com/siegrift>
//                 Bjarki <https://github.com/bjarkler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import * as lib from './lib';

// Re-export the type definitions globally.
declare global {
    const TrustedHTML: typeof lib.TrustedHTML;
    type TrustedHTML = lib.TrustedHTML;
    const TrustedScript: typeof lib.TrustedScript;
    type TrustedScript = lib.TrustedScript;
    const TrustedScriptURL: typeof lib.TrustedScriptURL;
    type TrustedScriptURL = lib.TrustedScriptURL;

    const TrustedTypePolicy: typeof lib.TrustedTypePolicy;
    type TrustedTypePolicy = lib.TrustedTypePolicy;

    const TrustedTypePolicyFactory: typeof lib.TrustedTypePolicyFactory;
    type TrustedTypePolicyFactory = lib.TrustedTypePolicyFactory;

    type TrustedTypePolicyOptions = lib.TrustedTypePolicyOptions;

    // Attach the relevant Trusted Types properties to the Window object.
    // tslint:disable-next-line no-empty-interface
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
