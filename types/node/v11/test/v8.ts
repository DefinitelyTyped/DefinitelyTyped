import * as v8 from 'v8';
import { Readable } from 'stream';

const heapStats = v8.getHeapStatistics();
const heapSpaceStats = v8.getHeapSpaceStatistics();

const zapsGarbage: number = heapStats.does_zap_garbage;

v8.setFlagsFromString('--collect_maps');

const stream: Readable = v8.getHeapSnapshot();
const fileName = v8.writeHeapSnapshot('file');
