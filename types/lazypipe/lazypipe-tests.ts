import * as gulp from "gulp";
import minifyHtml = require("gulp-minify-html");
import size = require("gulp-size");
import lazypipe = require("lazypipe");

const pipeline = lazypipe()
    .pipe(size)
    .pipe(minifyHtml, {
        cdata: true
    })
    .pipe(size, {
        showTotal: true
    });

gulp.src("*.html")
    .pipe(pipeline())
    .pipe(gulp.dest("build"));
