import { AnyFn } from 'ember/-private/type-utils';

type _KeysOfType<Key extends keyof TypeLookup, Type> =
    // Checks non-`const` versions, and correctly resolves those types
    // constructed via e.g. the `Number` constructor.
    TypeLookup[Key] extends Type ? Key :
    // Checks `const` versions, e.g. handling strict function types when also
    // using a const-valued function like `const x = () => 4 as const`.
    Type extends TypeLookup[Key] ? Key : never;

type KeysOfType<Type> =
    { [Key in keyof TypeLookup]: _KeysOfType<Key, Type> }[keyof TypeLookup];

export type TypeOf<T> =
    // Start by handling the case where `T` is no specific type, i.e. it is
    // `unknown`. In that case, it will be *one of* the type names, but which
    // one we cannot know statically.
    unknown extends T ? AllTypeNames :
    // Otherwise, since `TypeLookup` resolves all *other* types, including
    // `null` and `undefined`, we can assume that if the type does *not* resolve
    // from `KeysOfType`, it is safe to treat it as 'object'.
    KeysOfType<T> extends never ? 'object' : KeysOfType<T>;

export interface TypeLookup {
    string: string;
    number: number;
    boolean: boolean;
    regexp: RegExp;
    function: AnyFn;
    array: any[];
    error: Error;
    filelist: FileList;
    date: Date;
    null: null;
    undefined: undefined;
}

type AllTypeNames = 'object' | keyof TypeLookup;

// Don't export anything but the required type util
export {};
