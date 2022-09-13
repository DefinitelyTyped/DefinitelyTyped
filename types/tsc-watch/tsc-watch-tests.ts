import TscWatchClient = require('tsc-watch/client');
const watch = new TscWatchClient();

watch.on('first_success', () => {
    console.log('First success!');
});

watch.on('success', () => {
    // Your code goes here...
});

watch.on('compile_errors', () => {
    // Your code goes here...
});

watch.start('--project', '.');

try {
    // do something...
} catch (e) {
    watch.kill(); // Fatal error, kill the compiler instance.
}
