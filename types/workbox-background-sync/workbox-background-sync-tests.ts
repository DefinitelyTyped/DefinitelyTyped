"use strict";

import * as WorkboxBackgroundSync from "workbox-background-sync";

declare const entry: WorkboxBackgroundSync.QueueEntry;
declare const name: string;

// $ExpectType Queue
const queue = new WorkboxBackgroundSync.Queue(name);
queue.name; // $ExpectType string
queue.getAll(); // $ExpectType Promise<QueueEntry<any>[]>
queue.popRequest(); // $ExpectType Promise<QueueEntry<any>>
queue.pushRequest(entry); // $ExpectType Promise<void>
queue.registerSync(); // $ExpectType Promise<void>
queue.shiftRequest(); // $ExpectType Promise<QueueEntry<any>>
queue.unshiftRequest(entry); // $ExpectType Promise<void>

// $ExpectType BackgroundSyncPlugin
const plugin = new WorkboxBackgroundSync.BackgroundSyncPlugin(name);
