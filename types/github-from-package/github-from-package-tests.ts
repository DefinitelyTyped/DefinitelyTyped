import github = require("github-from-package");

const package_json = {
    "name": "beep-boop",
    "version": "1.2.3",
    "repository": {
        "type": "git",
        "url": "git@github.com:substack/beep-boop.git",
    },
};

// $ExpectType string | undefined
var url = github(package_json);
