// Type definitions for bull-board 0.6
// Project: https://github.com/vcapretz/bull-board
// Definitions by: Keven Leone <https://github.com/kevenleone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Express } from 'express';
import { Queue, QueueOptions } from 'bull';

declare const BullBoard: BullBoard.Options;

declare namespace BullBoard {
    interface CreateQueue {
        add(name: string, opts: QueueOptions): Queue;
    }

    interface Options {
        UI(): Express;
        setQueues(bullQueues: Queue | Queue[]): Queue;
        createQueues(redisURL: string): CreateQueue;
    }
}

export = BullBoard;
