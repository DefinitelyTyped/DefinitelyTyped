import { FetchFunction, Network, SubscribeFunction } from "./RelayNetworkTypes";

export const RelayNetwork: {
    create(fetchFn: FetchFunction, subscribeFn?: SubscribeFunction): Network;
};
