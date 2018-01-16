import * as gulp from "gulp";
import changed = require("gulp-changed");
import minifyHtml = require("gulp-minify-html");

// Without options
gulp.src("*.html")
    .pipe(changed("build"))
    .pipe(minifyHtml())
    .pipe(gulp.dest("build"));

// With some options
gulp.src("*.html")
    .pipe(changed("build", { hasChanged: changed.compareSha1Digest }))
    .pipe(minifyHtml())
    .pipe(gulp.dest("build"));
