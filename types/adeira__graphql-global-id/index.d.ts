// Type definitions for @adeira/graphql-global-id 1.1
// Project: https://github.com/adeira/universe/tree/master/src/graphql-global-id
// Definitions by: Martin Zlámal <https://github.com/mrtnzlml>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

import { GraphQLFieldConfig, GraphQLResolveInfo } from 'graphql';

export function fromGlobalId(opaqueID: string): string;

export function toGlobalId(type: string, id: string | number): string;

export function isTypeOf(type: string, opaqueID: unknown): boolean;

type FetchFnType = (object: any, context: any, info: GraphQLResolveInfo) => string | number;

export default function globalIdField(
    idFetcher: FetchFnType,
    unmaskedIdFetcher?: FetchFnType,
): GraphQLFieldConfig<any, any>;

export {};
