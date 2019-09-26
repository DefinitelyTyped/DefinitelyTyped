// Type definitions for chai-uuid 1.0
// Project: https://github.com/rfrench/chai-uuid
// Definitions by: Harm van der Werf <https://github.com/harm-less>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />
/// <reference types="chai" />

declare global {
	namespace Chai {
		type UuidVersion = 'v1' | 'v2' | 'v3' | 'v4' | 'v5' | '';

		interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
			uuid(uuid?: UuidVersion): void;
			guid(guid?: any): void;
		}

		interface Assert {
			uuid(uuid: string, version?: UuidVersion): void;
			guid(guid: string, version?: any): void;
		}
	}
}

declare const chaiUuid: Chai.ChaiPlugin;
export = chaiUuid;
