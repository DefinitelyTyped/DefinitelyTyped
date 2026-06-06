import { GraphQLResponse, GraphQLSingularResponse, OperationDescriptor } from "relay-runtime";

export interface MockResolverContext {
    readonly parentType: string | null | undefined;
    readonly name: string | null | undefined;
    readonly alias: string | null | undefined;
    readonly path: readonly string[] | null | undefined;
    readonly args: Record<string, unknown> | null | undefined;
}

export type DeepPartial<T> = T extends object ? {
        [P in keyof T]?: DeepPartial<T[P]>;
    }
    : T;

export type MockResolver<T = unknown> = (
    context: MockResolverContext,
    generateId: () => number,
) => DeepPartial<T> | undefined;

export type DefaultMockResolvers = Partial<{
    ID: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    [key: string]: unknown;
}>;

export type MockResolvers<
    TypeMap extends DefaultMockResolvers = DefaultMockResolvers,
> = {
    [K in keyof TypeMap]?: MockResolver<TypeMap[K]>;
};

export function generate(
    operation: OperationDescriptor,
    mockResolvers?: MockResolvers | null,
    options?: { mockClientData?: boolean } | null,
): GraphQLSingularResponse;

export function generateWithDefer(
    operation: OperationDescriptor,
    mockResolvers: MockResolvers | null,
    options: { mockClientData?: boolean; generateDeferredPayload: true } | null,
): readonly GraphQLSingularResponse[];

export function generateWithDefer(
    operation: OperationDescriptor,
    mockResolvers?: MockResolvers | null,
    options?: { mockClientData?: boolean; generateDeferredPayload?: false } | null,
): GraphQLSingularResponse;
