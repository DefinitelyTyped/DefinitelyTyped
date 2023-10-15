import * as gulp from "gulp";
import newer = require("gulp-newer");
import minifyHtml = require("gulp-minify-html");

// overload 1 - string
gulp.src("*.html").pipe(newer("build")).pipe(gulp.dest("build"));

// overload 2 - options object
gulp.src("*.html")
    .pipe(newer({ dest: "build" }))
    .pipe(minifyHtml())
    .pipe(gulp.dest("build"));

// Path destination
newer({
    dest: "build",
});

// File destination
newer({
    dest: "build.js",
});

// using relative path mapping without specifying a dest value
newer({
    map: relativePath => relativePath.replace(".css", ".min.css"),
});

// invalid options configuration - nothing is specified
// prettier-ignore
// @ts-expect-error
newer({});
