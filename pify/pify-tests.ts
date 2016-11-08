/// <reference path="pify.d.ts" />
/// <reference path="../bluebird/bluebird-2.0.d.ts" />

import * as pify from 'pify';
import * as Bluebird from 'bluebird';

function assert(actual: string, expected: string): void {
    if (actual !== expected) {
        throw new Error(`${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
    }
}

const fs = {
    readFile: (file: string, callback: Function) => {
        let result: any = undefined;

        if (file === 'foo.txt') {
            result = 'foo';
        } else if (file === 'bar.txt') {
            result = 'bar';
        }

        callback(undefined, result);
    }
};

const fsP = pify(fs);
fsP.readFile('foo.txt').then((result: string) => assert(result, 'foo'));

pify(fs.readFile)('foo.txt').then((result: string) => assert(result, 'foo'));
pify(fs.readFile, Bluebird)('bar.txt').then((result: string) => assert(result, 'bar'));
