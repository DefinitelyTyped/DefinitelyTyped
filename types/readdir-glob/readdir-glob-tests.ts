import readdirGlob = require('readdir-glob');

const globber = readdirGlob('.', { pattern: '**/*.js', mark: true, stat: true });
globber.on('match', match => {});

globber.on('error', err => {
    console.error('fatal error', err);
});

globber.on('end', m => {
    console.log('done', m);
});

globber.pause();
globber.abort();
globber.resume();
globber.options;
globber.paused;
globber.aborted;
