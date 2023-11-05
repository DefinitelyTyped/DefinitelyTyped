import { GraphQLTaggedNode, IEnvironment, OperationType, PreloadableConcreteRequest, VariablesOf } from "relay-runtime";
import { EnvironmentProviderOptions, LoadQueryOptions, PreloadedQuery } from "./EntryPointTypes";

export function loadQuery<
    TQuery extends OperationType,
    TEnvironmentProviderOptions extends EnvironmentProviderOptions = {},
>(
    environment: IEnvironment,
    preloadableRequest: GraphQLTaggedNode | PreloadableConcreteRequest<TQuery>,
    variables: VariablesOf<TQuery>,
    options?: LoadQueryOptions,
    environmentProviderOptions?: TEnvironmentProviderOptions,
): PreloadedQuery<TQuery, TEnvironmentProviderOptions>;
