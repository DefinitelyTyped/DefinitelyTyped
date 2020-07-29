// Type definitions for trusted-types 1.0
// Project: https://github.com/WICG/trusted-types
// Definitions by: Jakub Vrana <https://github.com/vrana>
//                 Damien Engels <https://github.com/engelsdamien>
//                 Emanuel Tesar <https://github.com/siegrift>
//                 Bjarki <https://github.com/bjarkler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

type FnNames = keyof TrustedTypePolicyOptions;
type Args<Options extends TrustedTypePolicyOptions, K extends FnNames> =
    Parameters<NonNullable<Options[K]>>;

interface FullTypedPolicy<Options extends TrustedTypePolicyOptions> {
    name: string;
    createHTML(...args: Args<Options, 'createHTML'>): TrustedHTML;
    createScript(...args: Args<Options, 'createScript'>): TrustedScript;
    createScriptURL(...args: Args<Options, 'createScriptURL'>): TrustedScriptURL;
}

type TypedPolicy<Options extends TrustedTypePolicyOptions> =
    Pick<FullTypedPolicy<Options>, 'name' | Extract<keyof Options, FnNames>>;

declare global {
    class TrustedHTML {
        private constructor(); // To prevent instantiting with 'new'.
        private brand: true; // To prevent structural typing.
    }

    class TrustedScript {
        private constructor(); // To prevent instantiting with 'new'.
        private brand: true; // To prevent structural typing.
    }

    class TrustedScriptURL {
        private constructor(); // To prevent instantiting with 'new'.
        private brand: true; // To prevent structural typing.
    }

    interface TrustedTypePolicyFactory {
        createPolicy<Options extends TrustedTypePolicyOptions>(
            policyName: string,
            policyOptions?: Options,
        ): TypedPolicy<Options>;
        isHTML(value: unknown): value is TrustedHTML;
        isScript(value: unknown): value is TrustedScript;
        isScriptURL(value: unknown): value is TrustedScriptURL;
        readonly emptyHTML: TrustedHTML;
        readonly emptyScript: TrustedScript;
        getAttributeType(tagName: string, attribute: string, elementNs?: string, attrNs?: string): string | null;
        getPropertyType(tagName: string, property: string, elementNs?: string): string | null;
        readonly defaultPolicy: TrustedTypePolicy | null;
    }

    interface TrustedTypePolicy {
        readonly name: string;
        createHTML(input: string, ...arguments: any[]): TrustedHTML;
        createScript(input: string, ...arguments: any[]): TrustedScript;
        createScriptURL(input: string, ...arguments: any[]): TrustedScriptURL;
    }

    interface TrustedTypePolicyOptions {
        createHTML?: (input: string, ...arguments: any[]) => string;
        createScript?: (input: string, ...arguments: any[]) => string;
        createScriptURL?: (input: string, ...arguments: any[]) => string;
    }

    interface Window {
        // NOTE: This is needed while the implementation in Chrome still relies
        // on the old uppercase name, either of the values below could be
        // undefined.
        // See https://github.com/w3c/webappsec-trusted-types/issues/177
        trustedTypes?: TrustedTypePolicyFactory;
        TrustedHTML: TrustedHTML;
        TrustedScript: TrustedScript;
        TrustedScriptURL: TrustedScriptURL;
        TrustedTypePolicyFactory: TrustedTypePolicyFactory;
        TrustedTypePolicy: TrustedTypePolicy;
    }
}

// This is not available in global scope. It's only used for the export. This is
// necessary to be able to use these types from nodejs (for SSR).
declare const trustedTypes: TrustedTypePolicyFactory;

export default trustedTypes;
