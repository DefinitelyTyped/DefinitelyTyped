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
    parentType?: string;
    name?: string;
    alias?: string;
    path?: ReadonlyArray<string>;
    args?: { [key: string]: any };
}
type MockResolver = (context: MockResolverContext, generateId: () => number) => unknown;
export interface MockResolvers {
    [typeName: string]: MockResolver;
}

export function generate(operation: OperationDescriptor, mockResolvers?: MockResolvers): GraphQLResponse;

export {};
