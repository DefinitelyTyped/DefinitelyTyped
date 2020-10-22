import bashGlob = require('bash-glob');

bashGlob('pattern', (err, files) => {});
bashGlob(['pattern'], (err, files) => {});
bashGlob(['pattern'], {}, (err, files) => {});
bashGlob(['pattern'], { cwd: 'cwd' }, (err, files) => { });

bashGlob.on('match', (match, cwd) => {});
bashGlob.on('files', (files, cwd) => {});
bashGlob.on('end', (files) => {});

bashGlob.each('pattern', (err, files) => {});
bashGlob.each(['pattern'], (err, files) => {});
bashGlob.each(['pattern'], {}, (err, files) => {});
bashGlob.each(['pattern'], { cwd: 'cwd' }, (err, files) => {});

// $ExpectType string[]
bashGlob.sync('pattern');
bashGlob.sync(['pattern']);
bashGlob.sync(['pattern'], {});
bashGlob.sync(['pattern'], { cwd: 'cwd' });
