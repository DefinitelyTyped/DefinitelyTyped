import * as TOML from '@iarna/toml';
import { Readable } from 'stream';

TOML.parse('{}'); // $ExpectType Record<string, any>
TOML.parse.async('{}'); // $ExpectType Promise<Record<string, any>>
TOML.parse.async('{}', {}); // $ExpectType Promise<Record<string, any>>
TOML.parse.async('{}', {blocksize: 1}); // $ExpectType Promise<Record<string, any>>

TOML.parse.stream(); // $ExpectType Transform
TOML.parse.stream(new Readable()); // $ExpectType Promise<Record<string, any>>

TOML.stringify({}); // $ExpectType string
// @ts-expect-error
TOML.stringify(1);

TOML.stringify.value({}); // $ExpectType string
TOML.stringify.value(1); // $ExpectType string

import parse = require('@iarna/toml/parse-string');
parse('{}'); // $ExpectType Record<string, any>

import parseAsync = require('@iarna/toml/parse-async');
parseAsync('{}'); // $ExpectType Promise<Record<string, any>>
parseAsync('{}', {}); // $ExpectType Promise<Record<string, any>>
parseAsync('{}', {blocksize: 1}); // $ExpectType Promise<Record<string, any>>

import parseStream = require('@iarna/toml/parse-stream');
parseStream(); // $ExpectType Transform
parseStream(new Readable()); // $ExpectType Promise<Record<string, any>>

import stringify = require('@iarna/toml/stringify');
stringify({}); // $ExpectType string
// @ts-expect-error
stringify(1);

stringify.value({}); // $ExpectType string
stringify.value(1); // $ExpectType string
