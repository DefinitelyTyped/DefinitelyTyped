import gitBranch = require('git-branch');

gitBranch()
  .then((name) => {});

gitBranch('cwd')
  .then((name) => {});

gitBranch.sync();
gitBranch.sync('cwd');

gitBranch((err, name) => {});

gitBranch('cwd', (err, name) => {});
