import { BlockPolling } from './block-polling';
import { EthereumEvent, EventType } from '../models';
import { BlockNumber } from './block-number';

export class EventListener {
    constructor(polling: BlockPolling);

    start(startBlock?: BlockNumber): void;

    stop(): void;

    isRunning(): boolean;

    on(
        event: EventType,
        callback: (blockNumber: BlockNumber, events: EthereumEvent[], done: (err?: any) => void) => void,
    ): void;

    on(event: 'error', callback: (err: Error) => void): void;
}
