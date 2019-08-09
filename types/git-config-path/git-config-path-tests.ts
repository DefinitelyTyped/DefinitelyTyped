import gitConfigPath = require('git-config-path');

gitConfigPath(); // $ExpectType string
gitConfigPath('global'); // $ExpectType string
