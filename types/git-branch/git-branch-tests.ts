import gitBranch = require('git-branch');

gitBranch()
  .then((name) => {
      name; // $ExpectType string
  });

gitBranch('cwd')
  .then((name) => {
      name; // $ExpectType string
  });

gitBranch.sync(); // $ExpectType string
gitBranch.sync('cwd');  // $ExpectType string

gitBranch((err, name) => {}); // $ExpectType void

gitBranch('cwd', (err, name) => {}); // $ExpectType void
