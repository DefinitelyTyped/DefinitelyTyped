import * as v8 from 'node:v8';
import { Readable } from 'node:stream';

const heapStats = v8.getHeapStatistics();
const numOfDetached = heapStats.number_of_detached_contexts;
const heapSpaceStats = v8.getHeapSpaceStatistics();

const zapsGarbage: number = heapStats.does_zap_garbage;

v8.setFlagsFromString('--collect_maps');

const stream: Readable = v8.getHeapSnapshot();
const fileName = v8.writeHeapSnapshot('file');

v8.takeCoverage();
v8.stopCoverage();
