import msgpack = require('msgpack5');

// msgpack()
let packer = msgpack();
packer = msgpack({ forceFloat64: true });
packer = msgpack({ compatibilityMode: true });

class InputType {
  number: number;
  string: string;

  constructor() {
    this.number = 1;
    this.string = '1';
  }
}

// msgpack().encode, msgpack().decode()
const IN: InputType = new InputType();
const encoded = packer.encode(IN);
const OUT: InputType = packer.decode(encoded);

// msgpack().registerEncoder(), msgpack().registerDecoder()
packer = packer.registerEncoder((o: InputType) => true, (o: InputType) => new Buffer(''));
packer = packer.registerDecoder(0x01, (data) => ({ content: { number: 1, string: '1' }}));

// msgpack().register()
packer = packer.register<InputType>(0x01, InputType, (obj: InputType) => new Buffer(''), (data: Buffer) => (new InputType()));

// msgpack().encoder(), msgpack().decoder()
const encoder = packer.encoder();
const decoder = packer.decoder();
encoder.pipe(decoder);
