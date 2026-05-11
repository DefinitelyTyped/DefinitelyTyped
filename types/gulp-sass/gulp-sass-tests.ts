import gulp = require("gulp");
import gulpSass = require("gulp-sass");
import gulpSassLegacy = require("gulp-sass/legacy");
import * as sass from "sass";
import * as sassEmbedded from "sass-embedded";

const gulpSassWithSass = gulpSass(sass);
const gulpSassWithSassEmbedded = gulpSass(sassEmbedded);
const gulpSassLegacyWithSass = gulpSassLegacy(sass);

gulp.task("sass", function() {
    gulp.src("./scss/*.scss")
        .pipe(gulpSassWithSass({ style: "compressed" }))
        .pipe(gulp.dest("./css"));
});

gulp.task("sass", function() {
    gulp.src("./scss/*.scss")
        .pipe(gulpSassWithSass({ style: "compressed", importers: [new sass.NodePackageImporter(".")] }))
        .pipe(gulp.dest("./css"));
});

gulp.task("sass", function() {
    gulp.src("./scss/*.scss")
        .pipe(gulpSassWithSassEmbedded({ style: "compressed", importers: [new sassEmbedded.NodePackageImporter(".")] }))
        .pipe(gulp.dest("./css"));
});

gulp.task("sass", function() {
    gulp.src("./scss/*.scss")
        // @ts-expect-error -- The NodePackageImporter must come from the same implementation of Sass
        .pipe(gulpSassWithSassEmbedded({ style: "compressed", importers: [new sass.NodePackageImporter(".")] }))
        .pipe(gulp.dest("./css"));
});

gulp.task("sass", function() {
    gulp.src("./scss/*.scss")
        .pipe(gulpSassWithSass.sync())
        .pipe(gulp.dest("./css"));
});

gulp.task("sass-legacy", function() {
    gulp.src("./scss/*.scss")
        .pipe(gulpSassLegacyWithSass({ outputStyle: "compressed" }))
        .pipe(gulp.dest("./css"));
});
