import * as gulp from 'gulp';
import * as insert from 'gulp-insert';

gulp.task('gulp-insert-tests', () => {
    return gulp.src('*.js')
        .pipe(insert.prepend('/* Inserted using gulp-insert prepend method */\n'))
        .pipe(insert.prepend('\n/* Inserted using gulp-insert append method */'))
        .pipe(insert.wrap(
            '/* Inserted using gulp-insert wrap method */\n',
            '\n/* Inserted using gulp-insert wrap method */'
        ))
        .pipe(insert.transform((contents, file) => {
            var comment = '/* Local file: ' + file.path + ' */\n';
            return comment + contents;
        }))
        .pipe(gulp.dest('gulp-insert'));
});

