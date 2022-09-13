import { GraphQLSingularResponse, OperationDescriptor } from 'relay-runtime';

export interface MockResolverContext {
    readonly parentType: string | null | undefined;
    readonly name: string | null | undefined;
    readonly alias: string | null | undefined;
    readonly path: ReadonlyArray<string> | null | undefined;
    readonly args: Record<string, unknown> | null | undefined;
}

export type MockResolver = (context: MockResolverContext, generateId: () => number) => unknown;

export interface MockResolvers {
    [typeName: string]: MockResolver;
}

export function generate(
    operation: OperationDescriptor,
    mockResolvers?: MockResolvers | null,
    options?: { mockClientData?: boolean } | null,
): GraphQLSingularResponse;
