import {
  LargeObject,
  LargeObjectManager,
  LargeObjectManagerSettings,
  ReadStream,
  WriteStream
} from "pg-large-object";
import { Buffer } from "buffer";
import pg = require("pg");

const buffer = new Buffer("");
const bufferSize = 16384;
const length = 16384;
const oid = 1;
const seekSetConst = LargeObject.SEEK_SET; // $ExpectType number
const seekCurConst = LargeObject.SEEK_CUR; // $ExpectType number
const seekEndConst = LargeObject.SEEK_END; // $ExpectType number

const lo = new LargeObject({}, oid, {});
lo.close((error: Error) => {}); // $ExpectType void
lo.closeAsync(); // $ExpectType Promise<any>
lo.read(length, (error: Error, data: Buffer) => {}); // $ExpectType void
lo.readAsync(length); // $ExpectType Promise<Buffer>
lo.write(buffer, (error: Error) => {}); // $ExpectType void
lo.writeAsync(buffer); // $ExpectType Promise<any>
lo.seek(0, LargeObject.SEEK_CUR, (error: Error, position: number) => {}); // $ExpectType void
lo.seekAsync(0, LargeObject.SEEK_CUR); // $ExpectType Promise<number>
lo.tell((error: Error, position: number) => {}); // $ExpectType void
lo.tellAsync(); // $ExpectType Promise<number>
lo.size((error: Error, size: number) => {}); // $ExpectType void
lo.sizeAsync(); //// $ExpectType Promise<number>
lo.truncate(length, (error: Error) => {}); // $ExpectType void
lo.truncateAsync(length); // $ExpectType Promise<any>
lo.getReadableStream(bufferSize); // $ExpectType ReadStream
lo.getWritableStream(bufferSize); // $ExpectType WriteStream

const writeConst = LargeObjectManager.WRITE; // $ExpectType number
const readConst = LargeObjectManager.READ; // $ExpectType number
const readWriteConst = LargeObjectManager.READWRITE; // $ExpectType number
const config: LargeObjectManagerSettings = {
  pg: new pg.Client(),
  pgPromise: {}
};

const lom = new LargeObjectManager(config);
lom.open(oid, LargeObjectManager.READWRITE, (error: Error, result: LargeObject) => {}); // $ExpectType void
lom.openAsync(oid, LargeObjectManager.READWRITE); // $ExpectType Promise<LargeObject>
lom.create((error: Error, oid: number) => {}); // $ExpectType void
lom.createAsync(); // $ExpectType Promise<number>
lom.unlink(oid, (error: Error) => {}); // $ExpectType void
lom.unlinkAsync(oid); // $ExpectType Promise<any>
lom.openAndReadableStream(oid, bufferSize, (error: Error, size: number, stream: ReadStream) => {}); // $ExpectType void
lom.openAndReadableStreamAsync(oid, bufferSize); // $ExpectType Promise<[number, ReadStream]>
lom.createAndWritableStream(bufferSize, (error: Error, oid: number, stream: WriteStream) => {}); // $ExpectType void
lom.createAndWritableStreamAsync(bufferSize); // $ExpectType Promise<[number, WriteStream]>
lom.unlinkAsync(oid); // $ExpectType Promise<any>
