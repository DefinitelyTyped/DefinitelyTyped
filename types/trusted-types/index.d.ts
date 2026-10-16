import * as lib from "./lib";

type InstanceOf<T extends { prototype: unknown }> = T["prototype"];
type BaseType<K extends string, T> = K extends keyof typeof globalThis ? Pick<T, keyof T> : T;
type BaseWindow<T> = "trustedTypes" extends keyof typeof globalThis ? Omit<T, "trustedTypes"> : T;

// Re-export the type definitions globally.
declare global {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface -- interface to allow module augmentation
    interface TrustedHTML extends BaseType<"TrustedHTML", InstanceOf<typeof lib.TrustedHTML>> {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface -- interface to allow module augmentation
    interface TrustedScript extends BaseType<"TrustedScript", InstanceOf<typeof lib.TrustedScript>> {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface -- interface to allow module augmentation
    interface TrustedScriptURL extends BaseType<"TrustedScriptURL", InstanceOf<typeof lib.TrustedScriptURL>> {}

    // eslint-disable-next-line @typescript-eslint/no-empty-interface -- interface to allow module augmentation
    interface TrustedTypePolicy extends lib.TrustedTypePolicy {}

    interface TrustedTypePolicyFactory extends lib.TrustedTypePolicyFactory {
        createPolicy<Options extends TrustedTypePolicyOptions>(
            policyName: string,
            policyOptions?: Options,
        ): Pick<lib.TrustedTypePolicy<Options>, "name" | Extract<keyof Options, lib.FnNames>>;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface -- interface to allow module augmentation
    interface TrustedTypePolicyOptions extends lib.TrustedTypePolicyOptions {}

    // Attach the relevant Trusted Types properties to the Window object.
    // eslint-disable-next-line @typescript-eslint/no-empty-interface -- interface to allow module augmentation
    interface Window extends BaseWindow<lib.TrustedTypesWindow> {}
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

export type { TrustedTypePolicy, TrustedTypePolicyFactory } from "./lib";
export { TrustedTypeConfig, trustedTypes, TrustedTypesEnforcer };
