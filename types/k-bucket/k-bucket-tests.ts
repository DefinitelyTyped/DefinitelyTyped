import KBucket = require('k-bucket');
import { Buffer } from 'buffer';

interface CustomContact { name: string; vectorClock: number; id: Uint8Array; }

const mockDistanceFn = (firstId: Uint8Array, secondId: Uint8Array) => 1;
const mockArbiter = (incumbent: CustomContact, candidate: CustomContact) => ({
    id: new Buffer(1),
    vectorClock: 1,
    name: 'a'
});

const k = new KBucket<CustomContact>({
    localNodeId: new Buffer(1),
    numberOfNodesPerKBucket: 1,
    numberOfNodesToPing: 1,
    distance: mockDistanceFn,
    arbiter: mockArbiter,
    metadata: { meta: 'mockMetaValue' },
});
const peerK = new KBucket();

const array: CustomContact[] = k.toArray();
const newK: KBucket<CustomContact> = k.add({ id: new Buffer(1), vectorClock: 1, name: 'a' });
const newK2: CustomContact[] = k.closest(new Buffer(1));
const count: number = k.count();
const get: CustomContact | null  = k.get(new Buffer(1));
const remove: KBucket<CustomContact>  = k.remove(new Buffer(1));
k.on('added', (peer: CustomContact) => {});
k.on('removed', (peer: CustomContact) => {});
k.on('ping', (peers: CustomContact[], peer: CustomContact) => {});
k.on('updated', (incumbent: CustomContact, selection: CustomContact) => {});
