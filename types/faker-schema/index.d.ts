// Type definitions for faker-schema 1.0
// Project: https://github.com/knicklabs/faker-schema
// Definitions by: Yury A Troynov <https://github.com/yutro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function withProbability<T extends object>(value: (() => T) | T, probability?: number): <S>(schema: S) => (T extends () => void ? S : T) | null;

export class Schema<T extends object> {
    private seed?: number;
    private blueprint: () => T;
    constructor(blueprint?: () => T);
    setSeed(seed?: number): void;
    makeOne(seed?: number): T;
    make(num?: number, seed?: number): T[];
}
