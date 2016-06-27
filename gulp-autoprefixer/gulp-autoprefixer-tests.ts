import * as gulp from "gulp";
import * as autoprefixer from "gulp-autoprefixer";

gulp.src("test.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("build"));

gulp.src("test.css")
    .pipe(autoprefixer({ browsers: ["Chrome"]}))
    .pipe(gulp.dest("build"));

gulp.src("test.css")
    .pipe(autoprefixer({cascade: false}))
    .pipe(gulp.dest("build"));

gulp.src("test.css")
    .pipe(autoprefixer({remove: false}))
    .pipe(gulp.dest("build"));
