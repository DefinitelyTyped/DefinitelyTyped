import Timeout from "await-timeout";

/**
 * This test is just a TS-friendly version of the await-timeout README:
 * https://github.com/vitalets/await-timeout/blob/v0.3.0/README.md
 *
 * How to generate this file:
 * 1. Paste the source code of README.md
 * 2. Replace every code fence with async () => {}
 * 3. Comment out all other lines
 * 4. Add and remove import statements and repeated statements
 * 5. Declare required globals
 */

// -- Globals --
declare const fetch: (url: string) => Promise<any>;
declare const console: any;
declare const MyTimeoutError: any;

// --- README ---

// ## Usage
// 1. Just wait some time:
async () => {
    // wait 1000 ms and resolve
    await Timeout.set(1000);

    // wait 1000 ms and reject with 'Error'
    await Timeout.set(1000, 'Error');
};

// 2. Use `Timeout` instance inside `try...finally` block to make proper cleanup:
async () => {
    const timer = new Timeout();
    try {
        await Promise.race([
            fetch('https://example.com'),
            timer.set(1000)
            .then(() => Promise.reject('Timeout'))
        ]);
    } finally {
        timer.clear();
    }
};

// ## API
// ### new Timeout()
// Constructs new timeout instance. It does not start timer but creates variable for timer manipulation.
async () => {
    const timer = new Timeout();
};
// > Note : having separate variable is useful for clearing timeout in `finally` block

// ### .set(ms, [message]) ⇒ `Promise`
// Starts new timer like `setTimeout()` and returns promise. The promise will be resolved after `ms` milliseconds:
async () => {
    const timer = new Timeout();
    timer.set(1000)
    .then(() => console.log('1000 ms passed.'));
};

// If you need to reject after timeout:
async () => {
    const timer = new Timeout();
    timer.set(1000)
    .then(() => {throw new Error('Timeout'); });
};

// Or reject with custom error:
async () => {
    const timer = new Timeout();
    timer.set(1000)
    .then(() => {throw new MyTimeoutError(); });
};
// The second parameter `message` is just convenient way to reject with `new Error(message)`:
async () => {
    const timer = new Timeout();
    timer.set(1000, 'Timeout');
    // is equivalent to
    timer.set(1000).then(() => {throw new Error('Timeout'); });
};

// If you need to just wait some time - use static version of `.set()` :
async () => {
    Timeout.set(1000).then(/*...*/);
};

// ### .wrap(promise, ms, [message]) ⇒ `Promise`
// Wraps existing promise with timeout:
//  * promise automatically rejected after timeout
//  * timeout automatically cleared if promise fulfills first
async () => {
    const promise = fetch('https://example.com');

    const timeoutedPromise = Timeout.wrap(promise, 1000, 'Timeout');
};
// Actually it is a shortcut for        :
async () => {
    const promise = fetch('https://example.com');

    const timer = new Timeout();
    try {
        const timeoutedPromise = await Promise.race([
            promise,
            timer.set(1000, 'Timeout')
        ]);
    } finally {
        timer.clear();
    }
};

// ### .clear()
// Clears existing timeout like `clearTimeout()`.
async () => {
    const timer = new Timeout();
    timer.set(1000)
    .then(() => console.log('This will never be called, because timeout is cleared on the next line'));
    timer.clear();
};

// With [ES7 async / await ] `.clear()` can be used in `finally` block:
async () => {
    async function foo() {
        const timer = new Timeout();
        try {
            // some async stuff
        } finally {
            timer.clear();
        }
    }
};
