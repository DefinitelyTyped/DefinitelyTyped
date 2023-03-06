// Taken straight from the package README:
import DuplexPair = require('native-duplexpair');

const { socket1, socket2 } = new DuplexPair();

socket1.write('Hi');
console.log(socket2.read());  // => <Buffer 48 69>

const { socket1: encodedSocket1, socket2: encodedSocket2 } = new DuplexPair({ encoding: 'utf8' });

socket1.write('Hi');
console.log(socket2.read());  // => 'Hi'
