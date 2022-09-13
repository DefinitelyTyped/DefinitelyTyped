import gitConfig = require("git-config");

// $ExpectType object
gitConfig.sync();

// $ExpectType object
gitConfig.sync("gitconfig");

// $ExpectType void
gitConfig("gitconfig", (err, data) => {
    if (!err) {
        data; // $ExpectType object
    }
});

// $ExpectType void
gitConfig((err, data) => {
    if (!err) {
        data; // $ExpectType object
    }
});

gitConfig("gitconfig", (err, data) => {
    if (!err) {
        data; // $ExpectType object
    }
});
