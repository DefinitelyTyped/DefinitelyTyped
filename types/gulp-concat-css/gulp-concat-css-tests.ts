import gulp = require("gulp");
import concat = require("gulp-concat-css");

gulp.task("concat-css:no-options", () => {
    gulp.src(["style*.css"])
        .pipe(concat("style.css"))
        .pipe(gulp.dest("build"));
});

gulp.task("concat-css:only-inline-imports", () => {
    gulp.src(["style*.css"])
        .pipe(concat("style.css", { inlineImports: true, rebaseUrls: false }))
        .pipe(gulp.dest("build"));
});
