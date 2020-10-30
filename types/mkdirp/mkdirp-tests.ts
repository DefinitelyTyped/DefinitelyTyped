import mkdirp = require('mkdirp');

mkdirp('str').then(made => {
  const str: string = made;
});
mkdirp('str', '0777').then(made => {});
mkdirp('str', {}).then(made => {});
mkdirp('str', { mode: '0777' }).then(made => {});

// $ExpectType string
mkdirp.sync('str');
mkdirp.sync('str', '0777');
mkdirp.sync('str', {});
mkdirp.sync('str', { mode: '0777' });

mkdirp.native('str').then(m => {});
mkdirp.manual('str').then(m => {});
mkdirp.manualSync('str').indexOf('a');
mkdirp.nativeSync('str').indexOf('a');
