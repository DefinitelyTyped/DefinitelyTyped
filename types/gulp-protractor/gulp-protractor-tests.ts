


import gulp = require('gulp');
import protractor = require('gulp-protractor');

gulp.src(["./src/tests/*.js"])
    .pipe(protractor.protractor({
        configFile: "test/protractor.config.js",
        args: ['--baseUrl', 'http://127.0.0.1:8000']
    }))


gulp.task('webdriver_standalone', protractor.webdriver_standalone);


gulp.task('webdriver-update', protractor.webdriver_update);


console.log(protractor.getProtractorDir());
