import * as gulp from "gulp";
import sassVariables = require("gulp-sass-variables");

const IS_DEVELOPMENT = true;

gulp.task("styles", () => {
    return gulp.src("./src/scss/master.scss")
        .pipe(sassVariables({
            $IS_DEVELOPMENT: IS_DEVELOPMENT,
        }))
        .pipe(gulp.dest("./dist/css"));
});
