/// <reference types="node" />

import { Index } from './build';

export = encode;

/**
 * Serializes an index as a [protocol buffer](https://developers.google.com/protocol-buffers/) (a.k.a. *protobuf*),
 * a compact binary format for structured data serialization. May be used to precompute an index and store it as
 * a file.
 *
 * @example
 * import buildIndex = require('synchronous-autocomplete/build');
 * import encode = require('synchronous-autocomplete/encode');
 * import * as fs from 'fs';
 *
 * // create index
 * const { tokens, weights, nrOfTokens, scores, originalIds } = buildIndex(
 *   str => str.split(/\s+/g),
 *   [
 *     {
 *       id: 'apple',
 *       name: 'Juicy sour Apple.',
 *       weight: 3,
 *     },
 *     {
 *       id: 'banana',
 *       name: 'Sweet juicy Banana!',
 *       weight: 2,
 *     },
 *   ],
 * );
 * // encode & write the index
 * const encoded = encode({ tokens, weights, nrOfTokens, scores, originalIds });
 * fs.writeFileSync('index.pbf', encoded);
 */
declare function encode(index: Index<string>): Buffer;
