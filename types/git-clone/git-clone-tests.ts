import clone = require('git-clone');
import clonePromise = require('git-clone/promise');

// $ExpectType void
clone('DefinitelyTyped/DefinitelyTyped', 'repo', {
    shallow: true
}, (error) => {
    if (error) {
        error; // $ExpectType Error
    } else {
        error; // $ExpectType undefined
    }
});

// $ExpectType Promise<void>
clonePromise('DefinitelyTyped/DefinitelyTyped', 'repo', {
    shallow: true
}).then(() => {
    // Success!
}).catch(error => {
    // Error
});
