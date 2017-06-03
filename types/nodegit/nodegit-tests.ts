import * as Git from 'nodegit';

Git.Repository.discover("startPath", 1, "ceilingDirs").then((string) => {
  // Use string
});

Git.Repository.init("path", true).then((repository) => {
  // Use repository
});
