import * as gulp from "gulp";
import espower, { Espower, Options } from "gulp-espower";

gulp.src("src/*.coffee")
    .pipe(espower())
    .pipe(gulp.dest("out"));

gulp.src("src/*.coffee")
    .pipe(espower({ patterns: ["assert(value, [message])"] }))
    .pipe(gulp.dest("out"));
