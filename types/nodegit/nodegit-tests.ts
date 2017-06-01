import * as Git from 'nodegit';

Git.Repository.discover("startPath", 1, "ceilingDirs").then((string) => {
  // Use string
});
