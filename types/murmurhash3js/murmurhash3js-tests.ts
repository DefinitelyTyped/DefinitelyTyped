
import * as murmurhash3js from 'murmurhash3js';

murmurhash3js.x86.hash32('string');
murmurhash3js.x86.hash32('string with seed', 1337);

murmurhash3js.x86.hash128('string');
murmurhash3js.x86.hash128('string with seed', 1337);

murmurhash3js.x64.hash128('string');
murmurhash3js.x64.hash128('string with seed', 1337);
