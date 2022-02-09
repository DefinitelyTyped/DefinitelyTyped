import * as gulp from "gulp";
import inject = require("gulp-inject");

gulp.task("inject:simple", () => {
    gulp.src("src/index.html")
        .pipe(inject(gulp.src(["src/**/*.js", "src/**/*.css"], { read: false })))
        .pipe(gulp.dest("build"));
});

gulp.task("inject:relative", () => {
    gulp.src(["src/index.html"])
        .pipe(inject(gulp.src(["src/**/*.js", "src/**/*.css"], { read: false }), { relative: true }))
        .pipe(gulp.dest("build"));
});

gulp.task("inject:starttag", () => {
    gulp.src(["src/index.html"])
        .pipe(inject(gulp.src(["src/**/*.js", "src/**/*.css"], { read: false }), { starttag: "<!-- inject:head:{{ext}} -->" }))
        .pipe(gulp.dest("build"));
});

gulp.task("inject:name", () => {
    gulp.src(["src/index.html"])
        .pipe(inject(gulp.src(["src/**/*.js", "src/**/*.css"], { read: false }), { name: "head" }))
        .pipe(gulp.dest("build"));
});

gulp.task("inject:transform", () => {
    gulp.src(["files.json"])
        .pipe(inject(gulp.src(["src/**/*.js", "src/**/*.css", "src/**/*.html"], { read: false }), {
            starttag: "\"{{ext}}\": [",
            endtag: "]",
            transform: (filepath, file, i, length) => {
                return "  \"" + filepath + "\"" + (i + 1 < length ? "," : "");
            }
        }))
        .pipe(gulp.dest("build"));
});

gulp.task("inject:transform", () => {
    gulp.src(["files.json"])
        .pipe(inject(gulp.src(["src/**/*.js", "src/**/*.css", "src/**/*.html"], { read: false }), {
            starttag: "\"{{ext}}\": [",
            endtag: "]",
	    quiet: true,
            transform: (filepath, file, i, length) => {
                return "  \"" + filepath + "\"" + (i + 1 < length ? "," : "");
            }
        }))
        .pipe(gulp.dest("build"));
});

function createOptions(starttag: inject.ITagFunction): inject.IOptions {
    return {
        starttag: starttag
    };
}
