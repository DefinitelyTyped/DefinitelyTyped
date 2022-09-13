import FIFO = require('fast-fifo');

const stringQueue = new FIFO<string>();
stringQueue.push('hello');
stringQueue.shift(); // $ExpectType string | undefined
stringQueue.isEmpty(); // $ExpectType boolean
stringQueue.hwm; // $ExpectType number
stringQueue.head; // $ExpectType FixedFIFO<string>
stringQueue.tail; // $ExpectType FixedFIFO<string>
stringQueue.head.buffer; // $ExpectType string[]
stringQueue.head.mask; // $ExpectType number
stringQueue.head.top; // $ExpectType number
stringQueue.head.btm; // $ExpectType number
stringQueue.head.next; // $ExpectType FixedFIFO<string> | null
stringQueue.head.push('hello');
stringQueue.head.shift(); // $ExpectType string | undefined
stringQueue.head.isEmpty(); // $ExpectType boolean

const bufferQueue = new FIFO<Uint8Array>();
bufferQueue.push(Uint8Array.from([0]));
bufferQueue.shift(); // $ExpectType Uint8Array | undefined
