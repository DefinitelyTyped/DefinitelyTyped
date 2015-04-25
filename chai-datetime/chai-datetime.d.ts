// Type definitions for chai-datetime
// Project: https://github.com/gaslight/chai-datetime.git
// Definitions by: Cliff Burger <https://github.com/cliffburger/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../chai/chai.d.ts" />

declare module chai {

	interface Expect {
		afterDate(date: Date): boolean;
		beforeDate(date: Date): boolean;
		equalDate(date: Date): boolean;

		afterTime(date: Date): boolean;
		beforeTime(date: Date): boolean;
		equalTime(date: Date): boolean;
	}

	interface Assert {
	        equalTime(val: Date, exp: Date, msg?: string): boolean;
	        notEqualTime(val: Date, exp: Date, msg?: string): boolean;
	        beforeTime(val: Date, exp: Date, msg?: string): boolean;
	        notBeforeTime(val: Date, exp: Date, msg?: string): boolean;
	        afterTime(val: Date, exp: Date, msg?: string): boolean;
	        notAfterTime(val: Date, exp: Date, msg?: string): boolean;
	        
	        equalDate(val: Date, exp: Date, msg?: string): boolean;
	        notEqualDate(val: Date, exp: Date, msg?: string): boolean;
	        beforeDate(val: Date, exp: Date, msg?: string): boolean;
	        notBeforeDate(val: Date, exp: Date, msg?: string): boolean;
	        afterDate(val: Date, exp: Date, msg?: string): boolean;
	        notAfterDate(val: Date, exp: Date, msg?: string): boolean;
	}
}

interface Date {
	should: chai.Expect;
}
