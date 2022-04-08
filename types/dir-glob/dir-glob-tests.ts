import dirGlob = require('dir-glob');

dirGlob('index.js').then(files => {
    // ExpectType string[]
    files;
});
dirGlob(['index.js', 'test.js', 'fixtures']).then(files => {
    // ExpectType string[]
    files;
});

dirGlob(['index.js', 'inner_folder'], { cwd: 'fixtures' });
dirGlob(['lib/**', 'fixtures'], { files: ['test', 'unicorn'] });
dirGlob(['lib/**', 'fixtures'], { extensions: ['js'] });

// ExpectType string[]
dirGlob.sync('index.js');
// ExpectType string[]
dirGlob.sync(['index.js', 'test.js', 'fixtures']);

dirGlob.sync(['index.js', 'inner_folder'], { cwd: 'fixtures' });
dirGlob.sync(['lib/**', 'fixtures'], { files: ['test', 'unicorn'] });
dirGlob.sync(['lib/**', 'fixtures'], { extensions: ['js'] });
