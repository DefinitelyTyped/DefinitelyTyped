/* tslint:disable:comment-format no-namespace */

"use strict";

import {
    Plugin,
    Queue,
    QueueEntry,
    QueueOptions,
} from "workbox-background-sync";

//==============================================================================
// WorkboxBackgroundSync.Queue
//==============================================================================

export namespace QueueTest {
    declare const name: string;
    declare const options: QueueOptions;

    // $ExpectType Queue
    new Queue(name);
    // $ExpectType Queue
    new Queue(name, options);

    declare const queue: Queue;
    declare const queueEntry: QueueEntry;

    // $ExpectType string
    queue.name;

    // $ExpectType Promise<QueueEntry<any>[]>
    queue.getAll();

    // $ExpectType Promise<QueueEntry<any>>
    queue.popRequest();

    // $ExpectType Promise<void>
    queue.pushRequest(queueEntry);

    // $ExpectType Promise<void>
    queue.registerSync();

    // $ExpectType Promise<QueueEntry<any>>
    queue.shiftRequest();

    // $ExpectType Promise<void>
    queue.unshiftRequest(queueEntry);
}

//==============================================================================
// WorkboxBackgroundSync.Plugin
//==============================================================================

export namespace BackgroundSyncPluginTest {
    declare const name: string;
    declare const options: QueueOptions;

    // $ExpectType Plugin
    new Plugin(name);
    // $ExpectType Plugin
    new Plugin(name, options);
}
