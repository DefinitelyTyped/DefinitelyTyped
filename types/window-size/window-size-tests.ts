import windowSize, { Size } from 'window-size';

let size: Size;

// default value (use get()). Generally speaking, this is sufficient.
size = windowSize as Size;
console.log(`terminal's size: ${size.width}*${size.height}`);

// use function get(). this value is default value.
size = windowSize.get();
console.log(`use get(): ${size.width}*${size.height}`);

// use function env().
size = windowSize.env();
console.log(`use env(): ${size.width}*${size.height}`);

// use function tty().
size = windowSize.tty({});
console.log(`use tty(): ${size.width}*${size.height}`);

// use function tput().
size = windowSize.tput();
console.log(`use tput(): ${size.width}*${size.height}`);

// use function win().
size = windowSize.win();
console.log(`use win(): ${size.width}*${size.height}`);
