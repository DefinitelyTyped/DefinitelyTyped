import gulp = require('gulp');
import htmlhint = require('gulp-htmlhint');
import { Rule } from 'htmlhint/types';

gulp.src('./src/*.html').pipe(htmlhint());
gulp.src('./src/*.html').pipe(htmlhint('.htmlhintrc'));

const customRules: Rule[] = [];
customRules.push({
    id: 'my-custom-rule',
    description: 'Custom rule definition',
    init(parser, reporter) {
        parser; // $ExpectType HTMLParser
        reporter; // $ExpectType Reporter
    },
});

gulp.src('./src/*.html')
    .pipe(htmlhint('.htmlhintrc', customRules))
    .pipe(htmlhint.reporter())
    .pipe(htmlhint.failOnError())
    .pipe(htmlhint.failAfterError())
    .pipe(htmlhint.reporter('htmlhint-stylish'))
    .pipe(htmlhint.failOnError({ suppress: true }));
