// Type definitions for chai-moment 0.1
// Project: https://github.com/picardy/chai-moment
// Definitions by: Chris Godsey <https://github.com/chrisgodsey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="chai" />

declare global {
	namespace Chai {
		interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
            afterMoment(expected: string, granularity?: string): void;
            beforeMoment(expected: string, granularity?: string): void;
            sameMoment(expected: string, granularity?: string): void;
		}

		interface Assert {
            afterMoment(val: any, exp: any, granularity?: any, msg?: any): void;
            beforeMoment(val: any, exp: any, granularity?: any, msg?: any): void;
            sameMoment(val: any, exp: any, granularity?: any, msg?: any): void;
		}
	}
}

declare function chaiMoment(chai: any, utils: any): void;
export = chaiMoment;
