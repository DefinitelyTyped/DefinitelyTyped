// Type definitions for ethereum-events 0.1
// Project: https://github.com/AleG94/ethereum-events
// Definitions by: Keith Kikta <https://github.com/newbish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="web3" />

import { EventListener } from './lib/core/event-listener';
import { EthereumEventsConfig } from './config';
import Web3 from 'web3';

declare class EthereumEvents extends EventListener {
    constructor(web3: Web3, contracts: any, options?: EthereumEventsConfig);
}

export = EthereumEvents;
