import * as gulp from "gulp";
import ghPages = require("gulp-gh-pages");

gulp.src("test.css")
    .pipe(ghPages());

gulp.src("test.css")
    .pipe(ghPages({remoteUrl: "https://github.com/Asana/DefinitelyTyped.git"}));

gulp.src("test.css")
    .pipe(ghPages({origin: "origin"}));

gulp.src("test.css")
    .pipe(ghPages({branch: "master"}));

gulp.src("test.css")
    .pipe(ghPages({cacheDir: "/tmp"}));

gulp.src("test.css")
    .pipe(ghPages({push: false}));

gulp.src("test.css")
    .pipe(ghPages({message: "master"}));
