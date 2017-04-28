import gulp = require("gulp");
import typedoc = require("gulp-typedoc");

gulp.task("typedoc", function() {
    return gulp
        .src(["data/*.ts"])
        .pipe(typedoc({
            module: "commonjs",
            out: "./out",
            name: "my-project",
            target: "es5"
        }));
});