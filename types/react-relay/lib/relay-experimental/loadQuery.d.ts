import { GraphQLTaggedNode, IEnvironment, OperationType, VariablesOf } from 'relay-runtime';
import {
    EnvironmentProviderOptions,
    LoadQueryOptions,
    PreloadableConcreteRequest,
    PreloadedQueryInner,
} from './EntryPointTypes';

export function loadQuery<
    TQuery extends OperationType,
    TEnvironmentProviderOptions extends EnvironmentProviderOptions = {}
>(
    environment: IEnvironment,
    preloadableRequest: GraphQLTaggedNode | PreloadableConcreteRequest<TQuery>,
    variables: VariablesOf<TQuery>,
    options?: LoadQueryOptions,
    environmentProviderOptions?: TEnvironmentProviderOptions,
): PreloadedQueryInner<TQuery, TEnvironmentProviderOptions>;
