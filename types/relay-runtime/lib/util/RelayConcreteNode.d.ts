import { NormalizationOperation, NormalizationSplitOperation } from './NormalizationNode';
import { ReaderFragment, ReaderInlineDataFragment } from './ReaderNode';

export interface ConcreteRequest {
    readonly kind: string; // 'Request';
    readonly fragment: ReaderFragment;
    readonly operation: NormalizationOperation;
    readonly params: RequestParameters;
}

export type GeneratedNode = ConcreteRequest | ReaderFragment | ReaderInlineDataFragment | NormalizationSplitOperation;

export interface RequestParameters {
    readonly name: string;
    readonly operationKind: string; // 'mutation' | 'query' | 'subscription';
    readonly id: string | null | undefined;
    readonly text: string | null | undefined;
    readonly metadata: { [key: string]: unknown };
}

export const RelayConcreteNode: {
    CONDITION: 'Condition';
    CLIENT_EXTENSION: 'ClientExtension';
    DEFER: 'Defer';
    CONNECTION_FIELD: 'ConnectionField';
    FRAGMENT: 'Fragment';
    FRAGMENT_SPREAD: 'FragmentSpread';
    INLINE_DATA_FRAGMENT_SPREAD: 'InlineDataFragmentSpread';
    INLINE_DATA_FRAGMENT: 'InlineDataFragment';
    INLINE_FRAGMENT: 'InlineFragment';
    LINKED_FIELD: 'LinkedField';
    LINKED_HANDLE: 'LinkedHandle';
    LITERAL: 'Literal';
    LOCAL_ARGUMENT: 'LocalArgument';
    MODULE_IMPORT: 'ModuleImport';
    OPERATION: 'Operation';
    REQUEST: 'Request';
    ROOT_ARGUMENT: 'RootArgument';
    SCALAR_FIELD: 'ScalarField';
    SCALAR_HANDLE: 'ScalarHandle';
    SPLIT_OPERATION: 'SplitOperation';
    STREAM: 'Stream';
    VARIABLE: 'Variable';
};
