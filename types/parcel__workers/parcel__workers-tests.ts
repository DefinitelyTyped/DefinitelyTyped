// TODO: fix typings. For now, ensure invalid types cannot be assigned
import WorkerFarm from '@parcel/workers';
import { EventEmitter } from 'events';
import { createWorkerFarm } from '@parcel/core';

// $ExpectError
const x: WorkerFarm = new EventEmitter();

const y: WorkerFarm = createWorkerFarm();
