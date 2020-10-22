import { GraphQLTaggedNode, IEnvironment, OperationType } from 'relay-runtime';
import { PreloadedQueryInner, LoadQueryOptions, PreloadableConcreteRequest, EnvironmentProviderOptions } from './EntryPointTypes';

export function loadQuery<TQuery extends OperationType, TEnvironmentProviderOptions extends EnvironmentProviderOptions = {}>(
    environment: IEnvironment,
    preloadableRequest: GraphQLTaggedNode | PreloadableConcreteRequest<TQuery>,
    variables: TQuery['variables'],
    options?: LoadQueryOptions,
    environmentProviderOptions?: TEnvironmentProviderOptions
): PreloadedQueryInner<TQuery, TEnvironmentProviderOptions>;
