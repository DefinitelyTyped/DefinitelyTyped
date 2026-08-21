import gulp = require("gulp");
import flatmap = require("gulp-flatmap");
import uglify = require("gulp-uglify");
import path = require("path");
import concat = require("gulp-concat");

gulp.task("default", function() {
    return gulp.src("*.json")
        .pipe(flatmap(function(stream, file) {
            var contents = JSON.parse(file.contents!.toString("utf8"));
            // contents.files is an array
            return gulp.src(contents.files)
                // uglify each file individually
                .pipe(uglify())
                // combine the files
                .pipe(concat(path.basename(file.path)));
        }))
        .pipe(gulp.dest("dist"));
});
