import * as gulp from "gulp";
import header = require("gulp-header");

gulp.task('templates', function(){
    gulp.src(['file.txt'])
        .pipe(header('Header'))
        .pipe(gulp.dest('build/file.txt'));
});