import { EthereumEventsConfig } from '../../config';
import { EthereumEvent, EventType } from '../models';
import { BlockNumber } from './block-number';
export class BlockPolling {
    constructor(web3: object, eventFetcher: any, options?: EthereumEventsConfig);

    start(startBlock: BlockNumber): void;

    stop(): void;

    isRunning(): boolean;

    on(
        event: EventType,
        callback: (blockNumber: BlockNumber, events: EthereumEvent[], done: (err?: any) => void) => void,
    ): void;

    on(event: 'error', callback: (err: Error) => void): void;
}
