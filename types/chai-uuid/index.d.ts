// Type definitions for chai-uuid 1.0.6
// Project: https://github.com/rfrench/chai-uuid
// Definitions by: Harm van der Werf <https://github.com/harm-less>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />
/// <reference types="chai" />

declare global {
	namespace Chai {
		type UuidVersion = 'v1' | 'v2' | 'v3' | 'v4' | 'v5' | '';

		interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
			uuid(uuid?: UuidVersion, msg?: string): void;
			guid(guid: any, msg?: string): void;
		}

		interface Assert {
			uuid(uuid?: UuidVersion, msg?: string): void;
			guid(guid: any, msg?: string): void;
		}
	}
}

declare function chaiUuid(chai: any, utils: any): void;
declare namespace chaiUuid {

}
export = chaiUuid;
