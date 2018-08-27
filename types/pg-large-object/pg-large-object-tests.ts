import { LargeObjectManager } from 'pg-large-object';

const bufferSize = 16384;
const oid = 1;
const lom = new LargeObjectManager({});
lom.createAndWritableStreamAsync(bufferSize); // $ExpectType Promise<[number, WriteStream]>
lom.openAndReadableStreamAsync(oid, bufferSize); // $ExpectType Promise<[number, ReadableStream]>
lom.unlinkAsync(oid); // $ExpectType Promise<any>
