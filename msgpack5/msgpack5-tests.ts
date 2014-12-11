/// <reference path="./msgpack5.d.ts" />
import msgpack5 = require('msgpack5');

/*
 * https://github.com/mcollina/msgpack5/blob/master/example.js
 */
var msgpack = msgpack5() // namespace our extensions
  , a = new MyType(2, 'a')
  , encode = msgpack.encode
  , decode = msgpack.decode

msgpack.register(0x42, MyType, mytipeEncode, mytipeDecode)

console.log(encode({ 'hello': 'world' }).toString('hex'))
// 81a568656c6c6fa5776f726c64
console.log(decode(encode({ 'hello': 'world' })))
// { hello: 'world' }
console.log(encode(a).toString('hex'))
// d5426161
console.log(decode(encode(a)) instanceof MyType)
// true
console.log(decode(encode(a)))
// { value: 'a', size: 2 }

class MyType {
  private value: any;
  private size: any;
  constructor(size: any, value: any) {
    this.value = value
    this.size = size
  }
}

function mytipeEncode(obj: any) {
  var buf = new Buffer(obj.size)
  buf.fill(obj.value)
  return buf
}

function mytipeDecode(data: any) {
  var result = new MyType(data.length, data.toString('utf8', 0, 1))
    , i: number

  for (i = 0; i < data.length; i++) {
    if (data.readUInt8(0) != data.readUInt8(i)) {
      throw new Error('should all be the same')
    }
  }

  return result
}