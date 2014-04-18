// Type definitions for chai-datetime
// Project: https://github.com/gaslight/chai-datetime.git
// Definitions by: Cliff Burger <https://github.com/cliffburger/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

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
		afterDate(leftDate: Date, rightDate: Date): boolean;
		beforeDate(leftDate: Date, rightDate: Date): boolean;
		equalDate(leftDate: Date, rightDate: Date): boolean;

		afterTime(leftDate: Date, rightDate: Date): boolean;
		beforeTime(leftDate: Date, rightDate: Date): boolean;
		equalTime(leftDate: Date, rightDate: Date): boolean;
	}
}

interface Date {
	should: chai.Expect;
}
