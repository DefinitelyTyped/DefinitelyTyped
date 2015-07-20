/// <reference path="git-config-async.d.ts" />

import gitConfig = require('git-config');

gitConfig(function(err: any, config: Object) {
    console.log(JSON.stringify(config));
});

gitConfig('gitconfig', function(err: any, config: Object) {
    console.log(JSON.stringify(config));
});
