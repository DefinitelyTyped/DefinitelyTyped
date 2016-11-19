/// <reference path="../gulp/gulp.d.ts" />
/// <reference path="gulp-copy.d.ts" />

import * as gulp from "gulp";
import * as gulpCopy from "gulp-copy";

gulp.task("copy-files", () => {
    gulp.src("*.nonexistent")
        .pipe(gulpCopy("remove/target/some/non/existent/path", { prefix: 2 }));
});
