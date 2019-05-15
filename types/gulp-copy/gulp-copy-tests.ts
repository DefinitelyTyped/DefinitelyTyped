import * as gulp from "gulp";
import gulpCopy = require("gulp-copy");

gulp.task("copy-files", () => {
    gulp.src("*.nonexistent")
        .pipe(gulpCopy("remove/target/some/non/existent/path", { prefix: 2 }));
});
