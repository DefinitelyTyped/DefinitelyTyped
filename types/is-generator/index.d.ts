declare function isGenerator(obj: unknown): obj is Generator;

declare namespace isGenerator {
    function fn(fn: unknown): fn is GeneratorFunction;
}

export = isGenerator;
