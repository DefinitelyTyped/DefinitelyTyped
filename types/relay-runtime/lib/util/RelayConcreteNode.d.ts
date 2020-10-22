import { NormalizationOperation, NormalizationSplitOperation } from './NormalizationNode';
import { ReaderFragment, ReaderInlineDataFragment } from './ReaderNode';

/**
 * Represents a common GraphQL request that can be executed, an `operation`
 * containing information to normalize the results, and a `fragment` derived
 * from that operation to read the response data (masking data from child
 * fragments).
 */
export interface ConcreteRequest {
    readonly kind: string; // 'Request';
    readonly fragment: ReaderFragment;
    readonly operation: NormalizationOperation;
    readonly params: RequestParameters;
}

/**
 * Contains the parameters required for executing a GraphQL request.
 * The operation can either be provided as a persisted `id` or `text`. If given
 * in `text` format, a `cacheID` as a hash of the text should be set to be used
 * for local caching.
 */
export interface RequestParameters {
    readonly cacheID?: string | null;
    readonly name: string;
    readonly operationKind: string; // 'mutation' | 'query' | 'subscription';
    readonly id: string | null | undefined;
    readonly text: string | null | undefined;
    readonly metadata: { [key: string]: unknown };
}

export type GeneratedNode = ConcreteRequest | ReaderFragment | ReaderInlineDataFragment | NormalizationSplitOperation;

export const RelayConcreteNode: {
    CONDITION: 'Condition';
    CLIENT_EXTENSION: 'ClientExtension';
    DEFER: 'Defer';
    CONNECTION: 'Connection';
    FRAGMENT: 'Fragment';
    FRAGMENT_SPREAD: 'FragmentSpread';
    INLINE_DATA_FRAGMENT_SPREAD: 'InlineDataFragmentSpread';
    INLINE_DATA_FRAGMENT: 'InlineDataFragment';
    INLINE_FRAGMENT: 'InlineFragment';
    LINKED_FIELD: 'LinkedField';
    LINKED_HANDLE: 'LinkedHandle';
    LITERAL: 'Literal';
    LIST_VALUE: 'ListValue';
    LOCAL_ARGUMENT: 'LocalArgument';
    MODULE_IMPORT: 'ModuleImport';
    OBJECT_VALUE: 'ObjectValue';
    OPERATION: 'Operation';
    REQUEST: 'Request';
    ROOT_ARGUMENT: 'RootArgument';
    SCALAR_FIELD: 'ScalarField';
    SCALAR_HANDLE: 'ScalarHandle';
    SPLIT_OPERATION: 'SplitOperation';
    STREAM: 'Stream';
    TYPE_DISCRIMINATOR: 'TypeDiscriminator';
    VARIABLE: 'Variable';
};
