import {
    Variables,
    NormalizationField,
    NormalizationOperation,
    NormalizationSelection,
    NormalizationLinkedField,
    NormalizationScalarField,
    OperationDescriptor,
    GraphQLResponse,
    NormalizationSplitOperation,
} from 'relay-runtime';

interface MockResolverContext {
    parentType?: string | undefined;
    name?: string | undefined;
    alias?: string | undefined;
    path?: ReadonlyArray<string> | undefined;
    args?: { [key: string]: any } | undefined;
}
type MockResolver = (context: MockResolverContext, generateId: () => number) => unknown;
export interface MockResolvers {
    [typeName: string]: MockResolver;
}

export function generate(operation: OperationDescriptor, mockResolvers?: MockResolvers): GraphQLResponse;

export {};
