declare namespace OO {
    type Constructor = new (...args: any) => any;

    type ConstructorLike = (new (...args: any) => any) | ((...args: any) => any);

    type ValidKey = string | number;

    interface Cloneable {
        clone: (...args: any) => any;
    }

    interface NodeLike {
        cloneNode: (...args: any) => any;
    }

    type NonPlainObject =
        | string
        | number
        | boolean
        | symbol
        | bigint
        | null
        | undefined
        // tslint:disable-next-line:ban-types
        | Function
        | NodeLike
        | Cloneable;

    type GetProp<T, K extends ValidKey> = T extends Partial<Record<K, any>> ? T[K] : undefined;

    // Simulate infer constraints of TypeScript 4.7+
    type ConstrainedInference<T, R extends T> = R;

    type ValueOf<T> = T extends any[] ? T[number] : T[keyof T];

    type RecursivelyGet<T, K extends ValidKey[]> = {
        done: GetProp<T, K[0]>;
        recur: K extends [
            ConstrainedInference<ValidKey, infer FirstKey>,
            ...ConstrainedInference<ValidKey[], infer RestKeys>,
        ]
            ? RecursivelyGet<GetProp<T, FirstKey>, RestKeys>
            : never;
    }[K extends [ValidKey] ? 'done' : 'recur'];

    type NodesOf<T, D extends number> = {
        done: T;
        recur:
            | T
            | ValueOf<T>
            | NodesOf<
                  Exclude<ValueOf<T>, NonPlainObject>,
                  [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20][D]
              >;
    }[D extends -1 ? 'done' : T extends NonPlainObject ? 'done' : 'recur'];

    type LeavesOf<T, D extends number> = T extends NonPlainObject ? T : Extract<NodesOf<T, D>, NonPlainObject>;

    type CheckFunctionType<T, K extends keyof T> = K extends any
        ? T[K] extends (...args: any[]) => any
            ? K
            : never
        : never;

    type ExtractFunctionKeys<T extends object> = Exclude<CheckFunctionType<T, keyof T>, never>;
}
