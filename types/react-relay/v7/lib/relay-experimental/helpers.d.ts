/*
A TS file to help with the construction of the official Relay (flow) types.
 */

import { FragmentReference } from 'relay-runtime';
import { EntryPoint } from './EntryPointTypes';

export type KeyType<TData = unknown> = Readonly<{
    ' $data'?: TData;
    ' $fragmentRefs': FragmentReference;
}>;

export type KeyTypeData<TKey extends KeyType<TData>, TData = unknown> = Required<TKey>[' $data'];

export type ArrayKeyType<TData = unknown> = ReadonlyArray<KeyType<ReadonlyArray<TData>> | null>;
export type ArrayKeyTypeData<TKey extends ArrayKeyType<TData>, TData = unknown> = KeyTypeData<
    NonNullable<TKey[number]>
>;

export type GetEntryPointParamsFromEntryPoint<TEntryPoint> = TEntryPoint extends EntryPoint<
    infer TEntryPointComponent,
    infer TEntryPointParams
>
    ? TEntryPointParams
    : never;

export type GetEntryPointComponentFromEntryPoint<TEntryPoint> = TEntryPoint extends EntryPoint<
    infer TEntryPointComponent,
    infer TEntryPointParams
>
    ? TEntryPointComponent
    : never;
