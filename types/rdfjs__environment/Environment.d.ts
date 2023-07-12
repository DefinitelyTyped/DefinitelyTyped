interface FactoryConstructor<F = {}> {
    new (...args: any[]): F;
    exports?: string[];
}

type ReturnFactory<C> = C extends FactoryConstructor<infer X> ? X : never;
type Distribute<U> = U extends any ? ReturnFactory<U> : never;

type UnionToIntersection<U> =
    (U extends {} ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

export type Environment<T> = {
    clone(): Environment<T>
} & Omit<{
    [K in keyof UnionToIntersection<T>]: UnionToIntersection<T>[K]
}, 'init' | 'clone'>;

interface EnvironmentCtor {
    new<const F extends ReadonlyArray<FactoryConstructor<any>>>(factories: F, options?: { bind: boolean }): Environment<Distribute<F[number]>>;
}

declare const environment: EnvironmentCtor;

export default environment;
