// Type definitions for ethereum-events 0.1
// Project: https://github.com/AleG94/ethereum-events
// Definitions by: Keith Kikta <https://github.com/newbish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EthereumEventsConfig } from './config';
import { EventListener } from './lib/core/event-listener';
import { Web3Like } from './lib/models';

export default class EthereumEvents extends EventListener {
    constructor(web3: Web3Like, contracts: any, options?: EthereumEventsConfig);
}

