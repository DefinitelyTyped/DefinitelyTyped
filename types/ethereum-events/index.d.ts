// Type definitions for ethereum-events 0.1
// Project: https://github.com/AleG94/ethereum-events
// Definitions by: Keith Kikta <https://github.com/newbish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventListener } from './lib/core/event-listener';
import { EthereumEventsConfig } from './config';

declare class EthereumEvents extends EventListener {
    constructor(web3: any, contracts: any, options?: EthereumEventsConfig);
}

export = EthereumEvents;
