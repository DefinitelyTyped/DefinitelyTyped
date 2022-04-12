


import gulp = require("gulp");
import mainBowerFiles = require("main-bower-files");

gulp.task("main-bower-files:simple", () => {
    gulp.src(mainBowerFiles())
        .pipe(gulp.dest("dist/bower"));
});

mainBowerFiles(undefined, (_: Error | null) => {});

gulp.task("main-bower-files:options", () => {
    var files = mainBowerFiles({
        debugging: false,
        env: process.env.NODE_ENV,
        paths: {
            bowerDirectory: "path/for/bower_components",
            bowerrc: "path/for/.bowerrc",
            bowerJson: "path/for/bower.json"
        },
        checkExistence: false,
        includeDev: false,
        includeSelf: false,
        filter: (filepath) => {
            return filepath.indexOf("search") >= 0;
        }
    });

    gulp.src(files, { base: "path/to/bower_components" })
        .pipe(gulp.dest("dist/bower"));
});
