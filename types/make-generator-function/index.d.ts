type GeneratorFunction<T = unknown, TReturn = any, TNext = unknown> = (
    ...args: unknown[]
) => Generator<T, TReturn, TNext>;

declare function makeGeneratorFunction(): readonly GeneratorFunction[];

export = makeGeneratorFunction;
