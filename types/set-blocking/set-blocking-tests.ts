import setBlocking = require('set-blocking');

function test() {
    setBlocking(true); // => Blocks the the process to printing data to console
}
