import gulp = require("gulp");
import _rewriteCss = require("gulp-rewrite-css");

gulp.src("test.css")
    .pipe(_rewriteCss({ destination: "output/" }));

gulp.src("test.css")
    .pipe(_rewriteCss({ destination: "output/", debug: true }));

gulp.src("test.css")
    .pipe(_rewriteCss({
        destination: "output/",
        adaptPath(context) {
            return context.destinationDir + context.targetFile;
        },
    }));
