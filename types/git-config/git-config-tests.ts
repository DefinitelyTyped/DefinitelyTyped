
import gitConfig = require('git-config');

var config: Object = gitConfig.sync();
console.log(JSON.stringify(config));

config = gitConfig.sync('gitconfig');
console.log(JSON.stringify(config));
