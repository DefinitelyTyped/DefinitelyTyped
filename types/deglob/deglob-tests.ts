/// <reference types="node" />

import deglob = require('deglob');

deglob(['**/*.js'], (err, files) => {
  files.forEach(file => {
    console.log('found file ' + file);
  });
});

const opts = {
  cwd: 'foo',
  useGitIgnore: false,
  usePackageJson: false
};

deglob(['**/*.js'], opts, (err, files) => {
  files.forEach(file => {
    console.log('found file ' + file);
  });
});
