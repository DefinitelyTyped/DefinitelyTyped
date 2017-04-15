import * as msgpack from 'msgpack-lite';

// https://github.com/kawanet/msgpack-lite#encoding-and-decoding-messagepack
function encodingAndDecoding() {
  // encode from JS Object to MessagePack (Buffer)
  const buffer = msgpack.encode({foo: "bar"});

  // decode from MessagePack (Buffer) to JS Object
  const data = msgpack.decode(buffer); // => {"foo": "bar"}
}

// https://github.com/kawanet/msgpack-lite#writing-to-messagepack-stream
function writingToStream() {
  const fs = require("fs");

  const writeStream = fs.createWriteStream("test.msp");
  const encodeStream = msgpack.createEncodeStream();
  encodeStream.pipe(writeStream);

  // send multiple objects to stream
  encodeStream.write({foo: "bar"});
  encodeStream.write({baz: "qux"});

  // call this once you're done writing to the stream.
  encodeStream.end();
}

// https://github.com/kawanet/msgpack-lite#reading-from-messagepack-stream
function readingFromStream() {
  const fs = require("fs");

  const readStream = fs.createReadStream("test.msp");
  const decodeStream = msgpack.createDecodeStream();

  // show multiple objects decoded from stream
  readStream.pipe(decodeStream).on("data", console.warn);
}

// https://github.com/kawanet/msgpack-lite#decoding-messagepack-bytes-array
function decodingBytesArray() {
  // decode() accepts Buffer instance per default
  msgpack.decode(new Buffer([0x81, 0xA3, 0x66, 0x6F, 0x6F, 0xA3, 0x62, 0x61, 0x72]));

  // decode() also accepts Array instance
  msgpack.decode([0x81, 0xA3, 0x66, 0x6F, 0x6F, 0xA3, 0x62, 0x61, 0x72]);

  // decode() accepts raw Uint8Array instance as well
  msgpack.decode(new Uint8Array([0x81, 0xA3, 0x66, 0x6F, 0x6F, 0xA3, 0x62, 0x61, 0x72]));
}

// https://github.com/kawanet/msgpack-lite#custom-extension-types-codecs
function customExtensionTypes() {
  class MyVector {
    constructor(public x: number, public y: number) {}
  }

  const codec = msgpack.createCodec();
  codec.addExtPacker(0x3F, MyVector, myVectorPacker);
  codec.addExtUnpacker(0x3F, myVectorUnpacker);

  const data = new MyVector(1, 2);
  const encoded = msgpack.encode(data, {codec});
  const decoded = msgpack.decode(encoded, {codec});

  function myVectorPacker(vector: MyVector) {
    const array = [vector.x, vector.y];
    return msgpack.encode(array); // return Buffer serialized
  }

  function myVectorUnpacker(buffer: Buffer | Uint8Array): MyVector {
    const array = msgpack.decode(buffer);
    return new MyVector(array[0], array[1]); // return Object deserialized
  }
}
