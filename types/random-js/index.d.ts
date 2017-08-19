// Type definitions for random-js 1.0.8
// Project: https://github.com/ckknight/random-js
// Definitions by: Gustavo Di Pietro <https://github.com/pistacchio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module TemporaryName {
	
	export interface Engine {

	}

	export interface MT19937 extends Engine{
		seed (value: number): Engine;
		seedWithArray(array: Array<number>): Engine
		autoSeed(): Engine;
		discard(count: number): Engine;
		getUseCount(): Engine;
	}

}

declare class TemporaryName {
	constructor (engine?: TemporaryName.Engine);

	static engines: {
		nativeMath: TemporaryName.Engine,
		browserCrypto: TemporaryName.Engine,
		mt19937: () => TemporaryName.MT19937
	}

    static Engine(): number;
    static MT19937 (): number;

	static integer(min: number, max: number): (engine: TemporaryName.Engine) => number;
	static real(min: number, max: number, inclusive: boolean): (engine: TemporaryName.Engine) => number;
	static bool(percentage?: number): (engine: TemporaryName.Engine) => boolean;
	static bool(numerator: number, denominator: number): (engine: TemporaryName.Engine) => boolean;
	static pick<T>(engine: TemporaryName.Engine, array: Array<T>, begin?: number, end?: number): T;
	static picker<T>(array: Array<T>, begin?: number, end?: number): (engine: TemporaryName.Engine) => T;
	static shuffle<T>(engine: TemporaryName.Engine, array: Array<T>): Array<T>;
	static sample<T>(engine: TemporaryName.Engine, population: Array<T>, sampleSize: number): Array<T>;
	static die(sideCount: number): (engine: TemporaryName.Engine) => number;
	static dice(sideCount: number, dieCount: number): (engine: TemporaryName.Engine) => number;
	static uuid4(engine: TemporaryName.Engine): string;
	static string(engine: TemporaryName.Engine, length: number): string;
	static string(pool: string, length: number): (engine: TemporaryName.Engine, length: number) => string;
	static hex(upperCase?: boolean): (engine: TemporaryName.Engine, length: number) => string;
	static date(start: Date, end: Date): (engine: TemporaryName.Engine) => Date;

	integer(min: number, max: number): number;
	real(min: number, max: number, inclusive: boolean): number;
	bool(percentage?: number): (engine: TemporaryName.Engine) => boolean;
	bool(numerator: number, denominator: number): boolean;
	pick<T>(engine: TemporaryName.Engine, array: Array<T>, begin?: number, end?: number): T;
	picker<T>(array: Array<T>, begin?: number, end?: number): (engine: TemporaryName.Engine) => T;
	shuffle<T>(engine: TemporaryName.Engine, array: Array<T>): Array<T>;
	sample<T>(engine: TemporaryName.Engine, population: Array<T>, sampleSize: number): Array<T>;
	die(sideCount: number): (engine: TemporaryName.Engine) => number;
	dice(sideCount: number, dieCount: number): number;
	uuid4(engine: TemporaryName.Engine): string;
	string(engine: TemporaryName.Engine, length: number): string;
	string(pool: string, length: number): string;
	hex(upperCase?: boolean): string;
	date(start: Date, end: Date): Date;
}

export = TemporaryName;
export as namespace Random;