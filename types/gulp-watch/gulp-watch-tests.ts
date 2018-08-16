import * as gulp from 'gulp';
import watch = require('gulp-watch');

gulp.task('stream', () =>
    gulp.src('css/**/*.css')
        .pipe(watch('css/**/*.css'))
        .pipe(gulp.dest('build'))
);

gulp.task('callback', (cb: () => void) =>
    watch('css/**/*.css', () =>
        gulp.src('css/**/*.css')
            .pipe(watch('css/**/*.css'))
            .on('end', cb)
    )
);

gulp.task('build', () => {
    var files = [
        'app/**/*.ts',
        'lib/**/*.ts',
        'components/**/*.ts',
    ];

    gulp.src(files, { base: '..' })
        .pipe(watch(files, { base: '..' }));
});

gulp.task('use_file', () => {
    watch("foo", file => {
        const s: string = file.relative;
        const e: "add" | "change" | "unlink" = file.event;
    });
});

