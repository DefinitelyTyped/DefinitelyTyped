import * as gulp from "gulp";
import replace = require("gulp-replace");

gulp.task('templates', function(){
    gulp.src(['file.txt'])
        .pipe(replace("test", "foo"))
        .pipe(replace(/foo(.{3})/g, '$1foo'))
        .pipe(gulp.dest('build/file.txt'));
});
