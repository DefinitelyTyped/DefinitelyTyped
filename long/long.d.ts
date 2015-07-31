// Type definitions for Long.js v2.2.5
// Project: https://github.com/dcodeIO/Long.js
// Definitions by: Peter Kooijmans <https://github.com/peterkooijmans/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "long" {

	module Long {
		export var MAX_UNSIGNED_VALUE: Long;
		export var MAX_VALUE: Long;
		export var MIN_VALUE: Long;
		export var NEG_ONE: Long;
		export var ONE: Long;
		export var UONE: Long;
		export var UZERO: Long;
		export var ZERO: Long;

		export function fromBits(lowBits: number, highBits: number, unsigned?: boolean): Long;
		export function fromInt(value: number, unsigned?: boolean): Long;
		export function fromNumber(value: number, unsigned?: boolean): Long;
		export function fromString(str: string, unsigned?: boolean | number, radix?: number): Long;
		export function fromValue(val: Long | number | string): Long;

		export function isLong(obj: any): boolean;
	}

	class Long {
		high: number;
		low: number;
		unsigned :boolean;

		constructor(low: number, high?: number, unsigned?:boolean);

		add(other: Long | number | string): Long;
		and(other: Long | number | string): Long;
		compare(other: Long | number | string): number;
		div(divisor: Long | number | string): Long;
		equals(other: Long | number | string): boolean;
		getHighBits(): number;
		getHighBitsUnsigned(): number;
		getLowBits(): number;
		getLowBitsUnsigned(): number;
		getNumBitsAbs(): number;
		greaterThan(other: Long | number | string): boolean;
		greaterThanOrEqual(other: Long | number | string): boolean;
		isEven(): boolean;
		isNegative(): boolean;
		isOdd(): boolean;
		isPositive(): boolean;
		isZero(): boolean;
		lessThan(other: Long | number | string): boolean;
		lessThanOrEqual(other: Long | number | string): boolean;
		modulo(divisor: Long | number | string): Long;
		multiply(multiplier: Long | number | string): Long;
		negate(): Long;
		not(): Long;
		notEquals(other: Long | number | string): boolean;
		or(other: Long | number | string): Long;
		shiftLeft(numBits: number | Long): Long;
		shiftRight(numBits: number | Long): Long;
		shiftRightUnsigned(numBits: number | Long): Long;
		subtract(other: Long | number | string): Long;
		toInt(): number;
		toNumber(): number;
		toSigned(): Long;
		toString(radix?: number): string;
		toUnsigned(): Long;
		xor(other: Long | number | string): Long;
	}

  export = Long;
}
