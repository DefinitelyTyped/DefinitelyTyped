import { _RefType, FragmentRef } from '../..';
import { GraphQLTaggedNode } from '../query/RelayModernGraphQLTag';

declare function readInlineData<T extends _RefType<any>>(fragment: GraphQLTaggedNode, ref: FragmentRef<T>): T;
declare function readInlineData<T extends _RefType<any>>(
    fragment: GraphQLTaggedNode,
    ref: FragmentRef<T> | null | undefined,
): T | null | undefined;

export { FragmentRef, readInlineData };
