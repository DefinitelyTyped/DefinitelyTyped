import openExplorer = require('open-file-explorer');

// $ExpectType void
openExplorer('.', (err) => {
    if (err) {
        console.log(err);
    } else {
        // Do something else
    }
});
