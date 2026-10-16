// The main type definitions. Packages that do not want to pollute the global
// scope with Trusted Types (e.g. libraries whose users may not be using Trusted
// Types) can import the types directly from 'trusted-types/lib'.

export type FnNames = keyof TrustedTypePolicyOptions;
export type Args<Options extends TrustedTypePolicyOptions, K extends FnNames> = Parameters<NonNullable<Options[K]>>;

declare namespace internal {
    class TrustedHTML {
        private constructor(); // To prevent instantiting with 'new'.
        private brand: true; // To prevent structural typing.
        toJSON(): string;
        toString(): string;
    }

    class TrustedScript {
        private constructor(); // To prevent instantiting with 'new'.
        private brand: true; // To prevent structural typing.
        toJSON(): string;
        toString(): string;
    }

    class TrustedScriptURL {
        private constructor(); // To prevent instantiting with 'new'.
        private brand: true; // To prevent structural typing.
        toJSON(): string;
        toString(): string;
    }
}

type IfGlobal<K extends string, T> = typeof globalThis extends Record<K, { prototype: infer U }> ? U : T;

export type TrustedHTML = IfGlobal<"TrustedHTML", internal.TrustedHTML>;
export const TrustedHTML: typeof internal.TrustedHTML;

export type TrustedScript = IfGlobal<"TrustedScript", internal.TrustedScript>;
export const TrustedScript: typeof internal.TrustedScript;

export type TrustedScriptURL = IfGlobal<"TrustedScriptURL", internal.TrustedScriptURL>;
export const TrustedScriptURL: typeof internal.TrustedScriptURL;

export abstract class TrustedTypePolicyFactory {
    createPolicy<Options extends TrustedTypePolicyOptions>(
        policyName: string,
        policyOptions?: Options,
    ): Pick<TrustedTypePolicy<Options>, "name" | Extract<keyof Options, FnNames>>;
    isHTML(value: unknown): value is TrustedHTML;
    isScript(value: unknown): value is TrustedScript;
    isScriptURL(value: unknown): value is TrustedScriptURL;
    readonly emptyHTML: TrustedHTML;
    readonly emptyScript: TrustedScript;
    getAttributeType(
        tagName: string,
        attribute: string,
        elementNs?: string | null,
        attrNs?: string | null,
    ): string | null;
    getPropertyType(tagName: string, property: string, elementNs?: string | null): string | null;
    readonly defaultPolicy: TrustedTypePolicy | null;
}

export abstract class TrustedTypePolicy<Options extends TrustedTypePolicyOptions = TrustedTypePolicyOptions> {
    readonly name: string;
    createHTML(...args: Args<Options, "createHTML">): TrustedHTML;
    createScript(...args: Args<Options, "createScript">): TrustedScript;
    createScriptURL(...args: Args<Options, "createScriptURL">): TrustedScriptURL;
}

export interface TrustedTypePolicyOptions {
    createHTML?: ((input: string, ...arguments: any[]) => string | null) | undefined;
    createScript?: ((input: string, ...arguments: any[]) => string | null) | undefined;
    createScriptURL?: ((input: string, ...arguments: any[]) => string | null) | undefined;
}

// The Window object is augmented with the following properties in browsers that
// support Trusted Types. Users of the 'trusted-types/lib' entrypoint can cast
// window as TrustedTypesWindow to access these properties.
export interface TrustedTypesWindow {
    // `trustedTypes` is left intentionally optional to make sure that
    // people handle the case when their code is running in a browser not
    // supporting trustedTypes.
    trustedTypes?: TrustedTypePolicyFactory | undefined;
    TrustedHTML: typeof TrustedHTML;
    TrustedScript: typeof TrustedScript;
    TrustedScriptURL: typeof TrustedScriptURL;
    TrustedTypePolicyFactory: typeof TrustedTypePolicyFactory;
    TrustedTypePolicy: typeof TrustedTypePolicy;
}
