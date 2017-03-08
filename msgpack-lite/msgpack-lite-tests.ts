import * as msgpack from 'msgpack-lite';

// https://github.com/kawanet/msgpack-lite#encoding-and-decoding-messagepack
function encodingAndDecoding() {
  // encode from JS Object to MessagePack (Buffer)
  var buffer = msgpack.encode({foo: "bar"});

  // decode from MessagePack (Buffer) to JS Object
  var data = msgpack.decode(buffer); // => {"foo": "bar"}
}

// https://github.com/kawanet/msgpack-lite#writing-to-messagepack-stream
function writingToStream() {
  var fs = require("fs");

  var writeStream = fs.createWriteStream("test.msp");
  var encodeStream = msgpack.createEncodeStream();
  encodeStream.pipe(writeStream);

  // send multiple objects to stream
  encodeStream.write({foo: "bar"});
  encodeStream.write({baz: "qux"});

  // call this once you're done writing to the stream.
  encodeStream.end();
}

// https://github.com/kawanet/msgpack-lite#reading-from-messagepack-stream
function readingFromStream() {
  var fs = require("fs");

  var readStream = fs.createReadStream("test.msp");
  var decodeStream = msgpack.createDecodeStream();

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
  var codec = msgpack.createCodec();
  codec.addExtPacker(0x3F, MyVector, myVectorPacker);
  codec.addExtUnpacker(0x3F, myVectorUnpacker);

  var data = new MyVector(1, 2);
  var encoded = msgpack.encode(data, {codec});
  var decoded = msgpack.decode(encoded, {codec});

  class MyVector {
    constructor(public x: number, public y: number) {}
  }

  function myVectorPacker(vector: MyVector) {
    var array = [vector.x, vector.y];
    return msgpack.encode(array); // return Buffer serialized
  }

  function myVectorUnpacker(buffer: Buffer | Uint8Array): MyVector {
    var array = msgpack.decode(buffer);
    return new MyVector(array[0], array[1]); // return Object deserialized
  }
}
