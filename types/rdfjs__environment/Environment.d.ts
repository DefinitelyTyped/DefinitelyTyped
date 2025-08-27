export interface FactoryConstructor<F = {}> {
    new(...args: any[]): F;
}

type Narrow<T> =
    | (T extends infer U ? U : never)
    | Extract<T, number | string | boolean | bigint | symbol | null | undefined | []>
    | ([T] extends [[]] ? [] : { [K in keyof T]: Narrow<T[K]> });

type ReturnFactory<C> = C extends FactoryConstructor<infer X> ? X : C;
type Distribute<U> = U extends any ? ReturnFactory<U> : never;

type UnionToIntersection<U> = (U extends {} ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

export type Environment<T> = {
    clone(): Environment<T>;
} & Omit<UnionToIntersection<T>, "init" | "clone">;

interface EnvironmentCtor {
    new<F extends ReadonlyArray<FactoryConstructor<any>>>(
        factories: Narrow<F>,
        options?: { bind: boolean },
    ): Environment<Distribute<F[number]>>;
}

declare const environment: EnvironmentCtor;

export default environment;
