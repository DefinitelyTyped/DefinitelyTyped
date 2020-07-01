import { GraphQLResponse, IEnvironment, OperationType, Subscription } from 'relay-runtime';
import { PreloadableConcreteRequest, PreloadedQuery, PreloadFetchPolicy, PreloadOptions } from './EntryPointTypes';

export function preloadQuery<TQuery extends OperationType, TEnvironmentProviderOptions = any>(
    environment: IEnvironment,
    preloadableRequest: PreloadableConcreteRequest<TQuery>,
    variables: TQuery['variables'],
    options?: PreloadOptions | null,
    environmentProviderOptions?: TEnvironmentProviderOptions | null,
): PreloadedQuery<TQuery, TEnvironmentProviderOptions>;
