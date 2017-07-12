import * as gulp from 'gulp';
import * as revReplace from 'gulp-rev-replace';
import * as rev from 'gulp-rev';
import * as useref from 'gulp-useref';

gulp.task("index", () => {
    return gulp.src("src/index.html")
        .pipe(useref())             // Concatenate with gulp-useref
        .pipe(rev())                // Rename the concatenated files
        .pipe(revReplace())         // Substitute in new filenames
        .pipe(gulp.dest('public'));
});


var opt = {
    srcFolder: 'src',
    distFolder: 'dist'
}

gulp.task("revision", gulp.parallel("dist:css", "dist:js", () =>
    gulp.src(["dist/**/*.css", "dist/**/*.js"])
        .pipe(rev())
        .pipe(gulp.dest(opt.distFolder))
        .pipe(rev.manifest())
        .pipe(gulp.dest(opt.distFolder))
));

gulp.task("revreplace", gulp.parallel("revision", () => {
    var manifest = gulp.src("./" + opt.distFolder + "/rev-manifest.json");

    return gulp.src(opt.srcFolder + "/index.html")
        .pipe(revReplace({ manifest: manifest }))
        .pipe(gulp.dest(opt.distFolder));
}));


function replaceJsIfMap(filename: string): string {
    if (filename.indexOf('.map') > -1) {
        return filename.replace('js/', '');
    }
    return filename;
}

gulp.task("revreplace", gulp.parallel("revision", () => {
    var manifest = gulp.src("./" + opt.distFolder + "/rev-manifest.json");

    return gulp.src(opt.distFolder + '**/*.js')
        .pipe(revReplace({
            manifest: manifest,
            modifyUnreved: replaceJsIfMap,
            modifyReved: replaceJsIfMap
        }))
        .pipe(gulp.dest(opt.distFolder));
}));
