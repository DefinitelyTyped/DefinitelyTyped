interface Factory {
    init?(that: Environment<any>): void;
    exports?: string[];
}

type UnionToIntersection<U> =
    (U extends Factory ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

export type Environment<TFactories extends Factory> = {
    clone(): Environment<TFactories>
} & {
    [K in keyof UnionToIntersection<TFactories>]: K extends 'init'
        ? never
        : UnionToIntersection<TFactories>[K]
};

interface EnvironmentCtor {
    new<F extends Factory>(factories: F[], options?: { bind: boolean }): Environment<F>;
}

declare const environment: EnvironmentCtor;

export default environment;
