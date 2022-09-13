import isGitClean = require('is-git-clean');

isGitClean().then(clean => clean);
isGitClean('/some/path').then(clean => clean);
isGitClean('/some/path', { files: ['!ignore.txt'] }).then(clean => clean);

isGitClean.sync();
isGitClean.sync('/some/path');
isGitClean.sync('/some/path', { files: ['!ignore.txt'] });
