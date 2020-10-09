/*
A TS file to help with the construction of the official Relay (flow) types.
 */

import type { FragmentReference } from 'relay-runtime';

export type KeyType = Readonly<{
    ' $data'?: unknown;
    ' $fragmentRefs': FragmentReference;
}>;
