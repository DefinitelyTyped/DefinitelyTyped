// Type definitions for random-js 1.0.8
// Project: https://github.com/ckknight/random-js
// Definitions by: Gustavo Di Pietro <https://github.com/pistacchio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare class Random {
	constructor (engine?: Random.Engine);

	static engines: {
		nativeMath: Random.Engine,
		browserCrypto: Random.Engine,
		mt19937: () => Random.MT19937
	}

    static Engine(): number;
    static MT19937 (): number;

	static integer(min: number, max: number): (engine: Random.Engine) => number;
	static real(min: number, max: number, inclusive: boolean): (engine: Random.Engine) => number;
	static bool(percentage?: number): (engine: Random.Engine) => boolean;
	static bool(numerator: number, denominator: number): (engine: Random.Engine) => boolean;
	static pick<T>(engine: Random.Engine, array: Array<T>, begin?: number, end?: number): T;
	static picker<T>(array: Array<T>, begin?: number, end?: number): (engine: Random.Engine) => T;
	static shuffle<T>(engine: Random.Engine, array: Array<T>): Array<T>;
	static sample<T>(engine: Random.Engine, population: Array<T>, sampleSize: number): Array<T>;
	static die(sideCount: number): (engine: Random.Engine) => number;
	static dice(sideCount: number, dieCount: number): (engine: Random.Engine) => number;
	static uuid4(engine: Random.Engine): string;
	static string(engine: Random.Engine, length: number): string;
	static string(pool: string, length: number): (engine: Random.Engine, length: number) => string;
	static hex(upperCase?: boolean): (engine: Random.Engine, length: number) => string;
	static date(start: Date, end: Date): (engine: Random.Engine) => Date;

	integer(min: number, max: number): number;
	real(min: number, max: number, inclusive: boolean): number;
	bool(percentage?: number): (engine: Random.Engine) => boolean;
	bool(numerator: number, denominator: number): boolean;
	pick<T>(engine: Random.Engine, array: Array<T>, begin?: number, end?: number): T;
	picker<T>(array: Array<T>, begin?: number, end?: number): (engine: Random.Engine) => T;
	shuffle<T>(engine: Random.Engine, array: Array<T>): Array<T>;
	sample<T>(engine: Random.Engine, population: Array<T>, sampleSize: number): Array<T>;
	die(sideCount: number): (engine: Random.Engine) => number;
	dice(sideCount: number, dieCount: number): number;
	uuid4(engine: Random.Engine): string;
	string(engine: Random.Engine, length: number): string;
	string(pool: string, length: number): string;
	hex(upperCase?: boolean): string;
	date(start: Date, end: Date): Date;
}

declare namespace Random {
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

export = Random;
