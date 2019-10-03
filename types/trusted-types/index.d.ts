// Type definitions for trusted-types 1.0
// Project: https://github.com/WICG/trusted-types
// Definitions by: Jakub Vrana <https://github.com/vrana>,
//                 Damien Engels <https://github.com/engelsdamien>
//                 Emanuel Tesar <https://github.com/siegrift>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare global {
    interface TrustedTypePolicyOptions {
        createHTML?: (input: string) => string;
        createScript?: (input: string) => string;
        createScriptURL?: (input: string) => string;
        createURL?: (input: string) => string;
    }

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

    class TrustedURL {
        private constructor(); // To prevent instantiting with 'new'.
        private brand: true; // To prevent structural typing.
    }

    interface TrustedTypePolicy {
        readonly name: string;
        createHTML(input: string): TrustedHTML;
        createScript(input: string): TrustedScript;
        createScriptURL(input: string): TrustedScriptURL;
        createURL(input: string): TrustedURL;
    }

    interface TrustedTypePolicyFactory {
        createPolicy<Keys extends keyof TrustedTypePolicyOptions>(
            name: string,
            policyOptions: Pick<TrustedTypePolicyOptions, Keys>,
            expose?: boolean,
        ): Pick<TrustedTypePolicy, 'name' | Keys>;
        getPolicyNames(): string[];
        isHTML(value: any): value is TrustedHTML;
        isScript(value: any): value is TrustedScript;
        isScriptURL(value: any): value is TrustedScriptURL;
        isURL(value: any): value is TrustedURL;
        getAttributeType(tagName: string, attrName: string, elemNs?: string, attrNs?: string): string | undefined;
        getPropertyType(tagName: string, propName: string, elemNs?: string): string | undefined;
        defaultPolicy?: TrustedTypePolicy;
        emptyHTML: TrustedHTML;
    }

    interface Window {
        // NOTE: This is needed while the implementation in Chrome still relies
        // on the old uppercase name, either of the values below could be
        // undefined.
        // See https://github.com/w3c/webappsec-trusted-types/issues/177
        trustedTypes?: TrustedTypePolicyFactory;
        /** @deprecated Prefer the lowercase version. */
        TrustedTypes?: TrustedTypePolicyFactory;
        TrustedHTML: TrustedHTML;
        TrustedScript: TrustedScript;
        TrustedScriptURL: TrustedScriptURL;
        TrustedURL: TrustedURL;
        TrustedTypePolicyFactory: TrustedTypePolicyFactory;
        TrustedTypePolicy: TrustedTypePolicy;
    }
}

// This is not available in global scope. It's only used for the export. This is
// necessary to be able to use these types from nodejs (for SSR).
declare const trustedTypes: TrustedTypePolicyFactory;

export default trustedTypes;
