import { FetchFunction, SubscribeFunction, Network } from './RelayNetworkTypes';

export const RelayNetwork: {
    create(fetchFn: FetchFunction, subscribeFn?: SubscribeFunction): Network;
};
