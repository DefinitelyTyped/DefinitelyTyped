/// <reference types="node" />

import { promisify } from 'es6-promisify';

function callbackFunction(a: string, b: string, callback: (error: any, combined: string) => void): void {
	callback(undefined, a + b);
}

function multiArgFunction(a: string, b: string, c: string, callback: (error: any, ac: string, bc: string) => void): void {
	callback(undefined, a + c, b + c);
}

const callbackPromiseFactory: (...args: any[]) => Promise<string> = promisify(callbackFunction);
const multiArgPromiseFactory: (...args: any[]) => Promise<any> = promisify(multiArgFunction);

const callbackPromise: Promise<string> = callbackPromiseFactory('stringA', 'stringB');
const multiArgPromise: Promise<string[]> = multiArgPromiseFactory('stringA', 'stringB', 'stringC');

callbackPromise.then((concat: string): void => {
}).catch((error: any) => {
});

multiArgPromise.then((concat: string[]): void => {
}).catch((error: any) => {
});
