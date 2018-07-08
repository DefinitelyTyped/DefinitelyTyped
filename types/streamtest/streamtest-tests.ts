import { PassThrough, Readable, Writable, Stream } from "stream";
import * as StreamTest from "streamtest";

StreamTest.versions; // $ExpectType VersionName[]

const fromObjectsTestArray = ['hello', { a: 1, b: false }, 1];

function runTest() {
  StreamTest.versions.forEach((version) => {
    StreamTest[version].fromChunks(['hello']); // $ExpectType Readable<any>
    StreamTest[version].fromChunks(['hello'], 10); // $ExpectType Readable<any>

    StreamTest[version].fromObjects(fromObjectsTestArray); // $ExpectType Readable<any>
    StreamTest[version].fromObjects(fromObjectsTestArray, 10); // $ExpectType Readable<any>

    const errorChunkStream1 = StreamTest[version].fromErroredChunks(
      new Error('bad thing'),
      [Buffer.from('some data')],
    );
    errorChunkStream1; // $ExpectType Readable<any>
    errorChunkStream1.on('error', (err) => {
      return; // keep on working
    });

    const errorChunkStream2 = StreamTest[version].fromErroredChunks(
      new Error('bad thing'),
      [Buffer.from('some data')],
      10
    );
    errorChunkStream2; // $ExpectType Readable<any>
    errorChunkStream2.on('error', (err) => {
      return; // keep on working
    });

    const errorObjectStream1 = StreamTest[version].fromErroredObjects(
      new Error('bad thing'),
      fromObjectsTestArray,
    );
    errorObjectStream1; // $ExpectType Readable<any>
    errorObjectStream1.on('error', (err) => {
      return; // keep on working
    });

    const errorObjectStream2 = StreamTest[version].fromErroredObjects(
      new Error('bad thing'),
      fromObjectsTestArray,
      10,
    );
    errorObjectStream2; // $ExpectType Readable<any>
    errorObjectStream2.on('error', (err) => {
      return; // keep on working
    });

    const toChunks = StreamTest[version].toChunks((err, chunks) => {
      if (err) {
        throw err;
      }
      return;
    });
    toChunks; // $ExpectType Writable<any>

    const toObjects = StreamTest[version].toObjects((err, objects) => {
      if (err) {
        throw err;
      }
      return;
    });
    toObjects; // $ExpectType Writable<any>

    const toText = StreamTest[version].toText((err, text) => {
      if (err) {
        throw err;
      }
      return;
    });
    toText; // $ExpectType Writable<any>

    StreamTest[version].syncReadableChunks(); // $ExpectType PassThrough<any>

    StreamTest[version].syncReadableObjects(); // $ExpectType PassThrough<any>

    StreamTest[version].syncWrite(StreamTest[version].writable(), ['a chunk']);

    try {
      StreamTest[version].syncError(
        StreamTest[version].writable(),
        new Error('bad thing'),
        ['a chunk']
      );
    } catch (err) {
      // If error not anticipated, throw again
      if (err.message !== 'bad thing') {
        throw err;
      }
    }
  });
}

runTest();
