import type { FragmentType } from "./RelayStoreTypes";

export type KeyType<TData = unknown> = Readonly<{
    " $data"?: TData | undefined;
    " $fragmentSpreads": FragmentType;
}>;

export type KeyTypeData<TKey extends KeyType<TData>, TData = unknown> = Required<TKey>[" $data"];

export type ArrayKeyType<TData = unknown> = ReadonlyArray<KeyType<readonly TData[]> | null | undefined>;
export type ArrayKeyTypeData<TKey extends ArrayKeyType<TData>, TData = unknown> = KeyTypeData<
    NonNullable<TKey[number]>
>;
