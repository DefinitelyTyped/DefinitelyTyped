/// <reference types="node" />

import { Index } from './build';

export = decode;

/**
 * Deserializes an index from a [protocol buffer](https://developers.google.com/protocol-buffers/) (a.k.a. *protobuf*).
 * May be used to deserialize a previously precomputed and serialized index back to JS objects.
 *
 * @example
 * import decode = require('synchronous-autocomplete/decode');
 * import createAutocomplete = require('synchronous-autocomplete');
 * import * as fs from 'fs';
 *
 * // read & decode the index
 * const encoded = fs.readFileSync('index.pbf');
 * const { tokens, scores, weights, nrOfTokens, originalIds } = decode(encoded);
 * // create autocomplete
 * const autocomplete = createAutocomplete(tokens, scores, weights, nrOfTokens, originalIds, str => str.split(/\s+/g));
 */
declare function decode(buffer: Buffer): Index<string>;
