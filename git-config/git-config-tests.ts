/// <reference path="git-config.d.ts" />

import gitConfig = require('git-config');

var config: Object = gitConfig.sync(); // => Object if .gitconfig exists.
console.log(JSON.stringify(config));

config = gitConfig.sync('gitconfig'); // => Object as gitconfig definitely exists.
console.log(JSON.stringify(config));
