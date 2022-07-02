import { GraphQLResponse } from '../network/RelayNetworkTypes';
import { Variables } from '../util/RelayRuntimeTypes';

export default class RelayQueryResponseCache {
    constructor(config: { size: number; ttl: number });
    clear(): void;
    get(queryID: string, variables: Variables): GraphQLResponse | null;
    set(queryID: string, variables: Variables, payload: GraphQLResponse): void;
}
