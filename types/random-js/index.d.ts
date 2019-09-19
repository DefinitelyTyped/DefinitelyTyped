// Type definitions for random-js 1.0
// Project: https://github.com/ckknight/random-js
// Definitions by: Gustavo Di Pietro <https://github.com/pistacchio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Random {
    interface Engine {
        (): number; // tslint:disable-line callable-types
    }

    interface MT19937 extends Engine {
        seed(value: number): MT19937;
        seedWithArray(array: number[]): MT19937;
        autoSeed(): MT19937;
        discard(count: number): MT19937;
        getUseCount(): number;
    }
}

interface Random {
    integer(min: number, max: number): number;
    real(min: number, max: number, inclusive?: boolean): number;
    bool(percentage?: number): boolean; // tslint:disable-line unified-signatures
    bool(numerator: number, denominator: number): boolean; // tslint:disable-line unified-signatures
    pick<T>(array: T[], begin?: number, end?: number): T;
    shuffle<T>(array: T[]): T[];
    sample<T>(population: T[], sampleSize: number): T[];
    die(sideCount: number): number;
    dice(sideCount: number, dieCount: number): number[];
    uuid4(engine?: Random.Engine): string;
    string(engine: Random.Engine, length: number): string;
    string(length?: number, pool?: string): string;
    hex(length?: number, upperCase?: boolean): string;
    date(start: Date, end: Date): Date;
}

interface RandomConstructor {
    (engine?: Random.Engine): Random;
    new (engine?: Random.Engine): Random;

    engines: {
        nativeMath: Random.Engine,
        browserCrypto: Random.Engine,
        mt19937(): Random.MT19937
    };

    Engine(): number;
    MT19937(): number;

    integer(min: number, max: number): (engine: Random.Engine) => number;
    real(min: number, max: number, inclusive?: boolean): (engine: Random.Engine) => number;
    bool(percentage?: number): (engine: Random.Engine) => boolean; // tslint:disable-line unified-signatures
    bool(numerator: number, denominator: number): (engine: Random.Engine) => boolean; // tslint:disable-line unified-signatures
    pick<T>(engine: Random.Engine, array: T[], begin?: number, end?: number): T;
    picker<T>(array: T[], begin?: number, end?: number): (engine: Random.Engine) => T;
    shuffle<T>(engine: Random.Engine, array: T[]): T[];
    sample<T>(engine: Random.Engine, population: T[], sampleSize: number): T[];
    die(sideCount: number): (engine: Random.Engine) => number;
    dice(sideCount: number, dieCount: number): (engine: Random.Engine) => number[];
    uuid4(engine: Random.Engine): string;
    string(engine: Random.Engine, length: number): string;
    string(pool?: string): (engine: Random.Engine, length?: number) => string;
    hex(upperCase?: boolean): (engine: Random.Engine, length?: number) => string;
    date(start: Date, end: Date): (engine: Random.Engine) => Date;
}

declare const Random: RandomConstructor;

export = Random;
export as namespace Random;
