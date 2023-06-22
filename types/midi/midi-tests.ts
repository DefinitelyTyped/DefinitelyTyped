import * as midi from 'midi';
import * as fs from 'fs';

new midi.Input(); // $ExpectType Input
new midi.Output(); // $ExpectType Output

// Legacy constructors
new midi.input(); // $ExpectType Input
new midi.output(); // $ExpectType Output

const input = new midi.Input();
input.closePort(); // $ExpectType void
input.getPortCount(); // $ExpectType number
input.getPortName(123); // $ExpectType string
input.ignoreTypes(true, false, true); // $ExpectType void
input.openPort(321); // $ExpectType void
input.openVirtualPort('hello'); // $ExpectType void

// Input extends node's EventEmitter
input.emit('test');

input.on('message', (deltaTime, message) => {
    const [a, b, c] = message;
    a; // $ExpectType number
    b; // $ExpectType number
    c; // $ExpectType number
    deltaTime; // $ExpectType number
});

// create a readable stream
midi.createReadStream(); // $ExpectType internal
// createReadStream also accepts an optional `input` param
const readStream = midi.createReadStream(input); // $ExpectType internal
readStream.pipe(fs.createWriteStream('something.bin'));

const output = new midi.Output();
output.closePort(); // $ExpectType void
output.getPortCount(); // $ExpectType number
output.getPortName(123); // $ExpectType string
output.openPort(321); // $ExpectType void
output.openVirtualPort('hello'); // $ExpectType void
// @ts-expect-error
output.send([1]);
output.send([1, 2, 3]); // $ExpectType void
// @ts-expect-error
output.sendMessage([]);
output.sendMessage([3, 2, 1]); // $ExpectType void
