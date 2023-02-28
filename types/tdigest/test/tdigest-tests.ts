import { Centroid, Digest, DigestConfiguration, FullCentroid, TDigest } from 'tdigest';
import 'tdigest/dist/tdigest';

// test type exports
type TD = TDigest;
type Ct = Centroid;
type FC = FullCentroid;
type DC = DigestConfiguration;
type D = Digest;

const tDigest = new TDigest(false); // $ExpectType TDigest
new TDigest(1); // $ExpectType TDigest
new TDigest(1, 1); // $ExpectType TDigest
new TDigest(1, 1, 1); // $ExpectType TDigest
tDigest.reset(); // $ExpectType void
tDigest.size(); // $ExpectType number
tDigest.toArray(); // $ExpectType Centroid[]
tDigest.toArray(false); // $ExpectType Centroid[]
tDigest.toArray(true); // $ExpectType FullCentroid[]
tDigest.summary(); // $ExpectType string
tDigest.push(1); // $ExpectType void
tDigest.push(1, 1); // $ExpectType void
tDigest.push([] as const); // $ExpectType void
tDigest.push([] as const, 1); // $ExpectType void
tDigest.push_centroid({ mean: 1, n: 1 }); // $ExpectType void
tDigest.push_centroid([{ mean: 1, n: 1 }] as const); // $ExpectType void
tDigest.find_nearest(1); // $ExpectType FullCentroid | null
tDigest.bound_mean(1); // $ExpectType [FullCentroid, FullCentroid]
tDigest.p_rank(1); // $ExpectType number
tDigest.p_rank([1] as const); // $ExpectType number[]
tDigest.bound_mean_cumn(1); // $ExpectType [FullCentroid, FullCentroid]
tDigest.percentile(1); // $ExpectType number
tDigest.percentile([1]); // $ExpectType number[]
tDigest.compress(); // $ExpectType void

const digest = new Digest(); // $ExpectType Digest
new Digest({ mode: 'auto' }); // $ExpectType Digest
new Digest({ mode: 'cont' }); // $ExpectType Digest
new Digest({ mode: 'disc' }); // $ExpectType Digest
// @ts-expect-error
new Digest({ mode: 'foo' }); // $ExpectType Digest
new Digest({ ratio: 1 }); // $ExpectType Digest
new Digest({ thresh: 100 }); // $ExpectType Digest

const td: TDigest = digest;

digest.push(60); // $ExpectType void
digest.check_continuous(); // $ExpectType boolean
