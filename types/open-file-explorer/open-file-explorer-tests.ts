import openExplorer = require("open-file-explorer");

// $ExpectType void
openExplorer(".", (err) => {
    if (err) {
        err; // $ExpectType Error
    } else {
        // Do something else
    }
});
