import gitconfig = require('gitconfiglocal');

gitconfig('dir', (error, config) => {
  if (error) {
    // oh no
    return;
  }

  const url = config.remote;
  const filemode = config.core.filemode;
});

gitconfig('dir', {gitDir: './'}, (error, config) => {
  if (error) {
    // oh no
    return;
  }

  const url = config.remote.origin.url;
  const filemode = config.core.filemode;
});
