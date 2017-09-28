import * as pify from 'pify';

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
    },
    exists: (path: string, callback: (exists: boolean) => void): void => {
        callback(true);
    }
};

const fsP = pify(fs);
fsP.readFile('foo.txt').then((result: string) => assert(result, 'foo'));

pify(fs.readFile)('foo.txt').then((result: string) => assert(result, 'foo'));
pify(fs.readFile, { promiseModule: Promise})('bar.txt').then((result: string) => assert(result, 'bar'));


pify(fs.exists, { errorFirst: false })('foo.txt').then((result: boolean) => assert(result.toString(), true.toString()));
