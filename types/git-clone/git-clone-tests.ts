import clone = require('git-clone');
import clonePromise = require('git-clone/promise');

// $ExpectType void
clone('DefinitelyTyped/DefinitelyTyped', 'repo', {
    shallow: true
}, (error) => {
    error; // $ExpectType Error | undefined
    if (error) {
        console.error(error);
    } else {
        console.log("Success!");
    }
});

// $ExpectType Promise<void>
clonePromise('DefinitelyTyped/DefinitelyTyped', 'repo', {
    shallow: true
}).then(() => {
    console.log("Success!");
}).catch(error => {
    console.error(error);
});
