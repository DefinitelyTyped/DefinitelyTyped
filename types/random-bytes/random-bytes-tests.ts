import randomBytes = require('random-bytes');

// Callback-based signature.
randomBytes(16, (err, buff) => {
    if (err) {
        console.error(err);
    } else {
        console.log(buff);
    }
});

// Promise-based signature.
randomBytes(32)
    .then((buff) => {
        console.log(buff);
    });

// Synchronous signature.
const buff = randomBytes.sync(64);
console.log(buff);
