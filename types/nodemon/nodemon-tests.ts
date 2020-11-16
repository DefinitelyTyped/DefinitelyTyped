import nodemon = require('nodemon');

nodemon({
  script: 'app.js',
  ext: 'js json'
});

nodemon.on('start', () => {
  console.log('App has started');
}).on('quit', () => {
  console.log('App has quit');
  process.exit();
}).on('restart', (files) => {
    // $ExpectType string[] | undefined
    files;
    console.log('App restarted due to: ', files);
});
