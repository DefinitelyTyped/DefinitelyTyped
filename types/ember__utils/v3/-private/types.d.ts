export type KeysOfType<Base, Condition> = keyof Pick<
    Base,
    {
        [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
    }[keyof Base]
>;

// Since `TypeLookup` resolves all *other* types, including `null` and
// `undefined`, we can assume that if the type does *not* resolve from
// `KeysOfType`, it is safe to treat it as 'object'.
export type TypeOf<Base, Condition> = KeysOfType<Base, Condition> extends never ? "object"
    : KeysOfType<Base, Condition>;

export interface TypeLookup {
    string: string;
    number: number;
    boolean: boolean;
    regexp: RegExp;
    function: (...args: any[]) => any;
    array: any[];
    error: Error;
    filelist: FileList;
    date: Date;
    null: null;
    undefined: undefined;
}

// TODO: TypeScript 3.0
// type FunctionArgs<F extends (...args: any[]) => any> = F extends (...args: infer ARGS) => any ? ARGS : never;
export type FunctionArgs<F> = F extends (a: infer A) => any ? [A]
    : F extends (a: infer A, b: infer B) => any ? [A, B]
    : F extends (a: infer A, b: infer B, c: infer C) => any ? [A, B, C]
    : F extends (a: infer A, b: infer B, c: infer C, d: infer D) => any ? [A, B, C, D]
    : F extends (a: infer A, b: infer B, c: infer C, d: infer D, e: infer E) => any ? [A, B, C, D, E]
    : never;
