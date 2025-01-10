import * as gulp from "gulp";
import minifyHtml = require("gulp-minify-html");
import size = require("gulp-size");
import lazypipe = require("lazypipe");

let pipeline = lazypipe()
    .pipe(size)
    .pipe(minifyHtml, {})
    .pipe(size);

gulp.src("*.html")
    .pipe(pipeline())
    .pipe(gulp.dest("build"));

// Can type-check correctly
{
    pipeline = pipeline
        .pipe(minifyHtml, { empty: true });

    pipeline = pipeline
        // @ts-expect-error
        .pipe(minifyHtml, { empty: 1 });

    pipeline = pipeline
        // @ts-expect-error
        .pipe(minifyHtml, "foo");
}
