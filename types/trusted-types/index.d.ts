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
        private constructor(); // to prevent instantiting with 'new'.
        private _brand: true; // To prevent structural typing.
    }

    class TrustedScript {
        private constructor(); // to prevent instantiting with 'new'.
        private _brand: true; // To prevent structural typing.
    }

    class TrustedScriptURL {
        private constructor(); // to prevent instantiting with 'new'.
        private _brand: true; // To prevent structural typing.
    }

    class TrustedURL {
        private constructor(); // to prevent instantiting with 'new'.
        private _brand: true; // To prevent structural typing.
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
            ): Pick<TrustedTypePolicy, 'name'|Keys>;
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
        trustedTypes: TrustedTypePolicyFactory;
        TrustedHTML: TrustedHTML;
        TrustedScript: TrustedScript;
        TrustedScriptURL: TrustedScriptURL;
        TrustedURL: TrustedURL;
        TrustedTypePolicyFactory: TrustedTypePolicyFactory;
        TrustedTypePolicy: TrustedTypePolicy;
    }
}

// this is not available in global scope. It's only used for the export.
declare const trustedTypes: TrustedTypePolicyFactory;

export default trustedTypes;
