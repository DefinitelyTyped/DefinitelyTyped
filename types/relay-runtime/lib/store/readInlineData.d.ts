import { GraphQLTaggedNode } from '../query/RelayModernGraphQLTag';

interface _RefType<T> {
    ' $refType': T;
}
interface _FragmentRefs<T> {
    ' $fragmentRefs': T;
}

type FragmentRef<T> = T extends _RefType<infer U> ? _FragmentRefs<U> : never;

declare function readInlineData<T extends _RefType<any>>(fragment: GraphQLTaggedNode, ref: FragmentRef<T>): T;
declare function readInlineData<T extends _RefType<any>>(
    fragment: GraphQLTaggedNode,
    ref: FragmentRef<T> | null | undefined,
): T | null | undefined;
declare function readInlineData(fragment: GraphQLTaggedNode, ref: null | undefined): null | undefined;

export { FragmentRef, readInlineData };
