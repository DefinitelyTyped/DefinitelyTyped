import { GraphQLTaggedNode, OperationType, RenderPolicy, VariablesOf } from 'relay-runtime';

export function useClientQuery<TQuery extends OperationType>(
    gqlQuery: GraphQLTaggedNode,
    variables: VariablesOf<TQuery>,
    options?: {
        UNSTABLE_renderPolicy?: RenderPolicy | undefined;
    },
): TQuery['response'];
