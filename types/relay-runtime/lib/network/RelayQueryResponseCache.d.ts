import { Variables } from '../../index';
import { GraphQLResponse } from '../network/RelayNetworkTypes';

export class RelayQueryResponseCache {
    constructor(config: { size: number; ttl: number });
    clear(): void;
    get(queryID: string, variables: Variables): GraphQLResponse | null;
    set(queryID: string, variables: Variables, payload: GraphQLResponse): void;
}
