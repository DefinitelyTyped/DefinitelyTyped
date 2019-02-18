// Type definitions for trusted-types 1.0
// Project: https://github.com/WICG/trusted-types
// Definitions by: Jakub Vrana <https://github.com/vrana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class TrustedHTML {
	private readonly _TrustedHTMLBrand: true; // To prevent structural typing.
}

declare class TrustedScript {
	private readonly _TrustedScriptBrand: true; // To prevent structural typing.
}

declare class TrustedScriptURL {
	private readonly _TrustedScriptURLBrand: true; // To prevent structural typing.
}

declare class TrustedURL {
	private readonly _TrustedURLBrand: true; // To prevent structural typing.
}

declare class TrustedTypePolicy {
	createHTML(s: string): TrustedHTML;
	createScript(s: string): TrustedScript;
	createScriptURL(s: string): TrustedScriptURL;
	createURL(s: string): TrustedURL;
}

interface TrustedTypeInnerPolicy {
	createHTML(s: string): string;
	createScript(s: string): string;
	createScriptURL(s: string): string;
	createURL(s: string): string;
}

declare class TrustedTypePolicyFactory {
	createPolicy(name: string, policy: TrustedTypeInnerPolicy, expose?: boolean): TrustedTypePolicy;
	getExposedPolicy(name: string): TrustedTypePolicy;
	getPolicyNames(): string[];
}

declare const TrustedTypes: TrustedTypePolicyFactory;
