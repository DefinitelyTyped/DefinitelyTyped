import * as gulp from "gulp";
import header = require("gulp-header");

gulp.task('templates', function(){
    gulp.src(['file.txt'])
        .pipe(header('Hello ${name}\n', { name : 'World'} ))
        .pipe(gulp.dest('build/file.txt'));
});