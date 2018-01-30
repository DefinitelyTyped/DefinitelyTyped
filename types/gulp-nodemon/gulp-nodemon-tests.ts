


import gulp = require('gulp');
import path = require('path');
import nodemon = require('gulp-nodemon');

gulp.task('start', function () {
    nodemon({
        script: 'server.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
    })
});

nodemon({
    script: 'index.js'
    , tasks: ['browserify']
});

nodemon({
    script: './index.js'
    , ext: 'js css'
    , tasks: function (changedFiles: string[]): string[] {
        var tasks: string[] = [];
        changedFiles.forEach(function (file: string) {
            if (path.extname(file) === '.js' && !~tasks.indexOf('lint')) tasks.push('lint')
            if (path.extname(file) === '.css' && !~tasks.indexOf('cssmin')) tasks.push('cssmin')
        });
        return tasks
    }
    , nodeArgs: ['--trace-warnings']
    , args: ['-t']
});


gulp.task('develop', function () {
    nodemon({ script: 'server.js'
        , ext: 'html js'
        , ignore: ['ignored.js']
        , tasks: ['lint'] })
        .on('restart', function () {
            console.log('restarted!')
        })
});
