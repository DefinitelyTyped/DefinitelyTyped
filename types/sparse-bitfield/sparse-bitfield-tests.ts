import BitField = require('sparse-bitfield');
import Pager = require('memory-pager');

const bits = BitField();
BitField(new Buffer(1));
BitField({ pageOffset: 1 });
BitField({ pageSize: 1024 });
BitField({ pages: new Pager() });
BitField({ buffer: new Buffer(1) });
BitField({ trackUpdates: true });
new BitField();
new BitField(new Buffer(1));
new BitField({ pageOffset: 1 });
new BitField({ pageSize: 1024 });
new BitField({ pages: new Pager() });
new BitField({ buffer: new Buffer(1) });
new BitField({ trackUpdates: true });

bits.get(0); // $ExpectType boolean
bits.getByte(0); // $ExpectType number
bits.set(0, true); // $ExpectType boolean
bits.setByte(0, 1); // $ExpectType boolean
bits.toBuffer(); // $ExpectType Buffer
bits.pages; // $ExpectType PagerInstance
