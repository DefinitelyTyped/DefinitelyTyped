/// <reference types="node" />

import bigJson from 'big-json';
import type { Stream } from 'node:stream';

// $ExpectType Promise<string>
const promisifiedStringifiedJson = bigJson.stringify({ body: { a: 'abc' } });

// $ExpectType void
bigJson.stringify({ body: { a: 'abc' } },
  (str: string): void => {
    // $ExpectType string
    str;
  }
);

// $ExpectType Promise<object | readonly object[]>
const promisifedParseJson = bigJson.parse({ body: '{ "a": "abc" }' });

// $ExpectType void
bigJson.parse({ body: '{ "a": "abc" }' },
  (result: object): void => {
    // $ExpectType object
    result;
  }
);

// $ExpectType Stream
const stringifyStream = bigJson.createStringifyStream({ body: { a: 'abc' } });

// $ExpectType Stream
const parseStream = bigJson.createParseStream();
