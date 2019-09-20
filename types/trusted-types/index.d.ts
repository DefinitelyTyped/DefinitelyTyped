// Type definitions for trusted-types 1.0
// Project: https://github.com/WICG/trusted-types
// Definitions by: Jakub Vrana <https://github.com/vrana>,
//                 Damien Engels <https://github.com/engelsdamien>
//                 Emanuel Tesar <https://github.com/siegrift>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare class TrustedHTML {
    private readonly _brand: true; // To prevent structural typing.
}

declare class TrustedScript {
    private readonly _brand: true; // To prevent structural typing.
}

declare class TrustedScriptURL {
    private readonly _brand: true; // To prevent structural typing.
}

declare class TrustedURL {
    private readonly _brand: true; // To prevent structural typing.
}

declare class TrustedTypePolicy {
    readonly name: string;
    createHTML(input: string): TrustedHTML;
    createScript(input: string): TrustedScript;
    createScriptURL(input: string): TrustedScriptURL;
    createURL(input: string): TrustedURL;
}

interface TrustedTypePolicyOptions {
    createHTML?: (input: string) => string;
    createScript?: (input: string) => string;
    createScriptURL?: (input: string) => string;
    createURL?: (input: string) => string;
}

declare class TrustedTypePolicyFactory {
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
    getAttributeType(tagName: string, attrName: string, elemNs?: string, attrNs?: string): string|null;
    getPropertyType(tagName: string, propName: string, elemNs?: string): string|null;
    defaultPolicy?: TrustedTypePolicy;
    emptyHTML: TrustedHTML;
}

declare const trustedTypes: TrustedTypePolicyFactory;

declare global {
    interface Window {
        trustedTypes: TrustedTypePolicyFactory;
        TrustedHTML: TrustedHTML;
        TrustedScript: TrustedScript;
        TrustedScriptURL: TrustedScriptURL;
        TrustedURL: TrustedURL;
        TrustedTypePolicyOptions: TrustedTypePolicyOptions;
        TrustedTypePolicyFactory: TrustedTypePolicyFactory;
    }
}

export default trustedTypes;
