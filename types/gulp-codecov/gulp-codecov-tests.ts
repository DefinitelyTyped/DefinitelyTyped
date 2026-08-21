import gulp = require("gulp");
import codecov = require("gulp-codecov");

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov())
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({}))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            branch: "",
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            build: "",
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            clear: true,
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            commit: "",
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            disable: "",
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            dump: true,
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            env: "",
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            file: "",
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            flags: "",
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            "gcov-args": "",
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            "gcov-exec": "",
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            "gcov-glob": "",
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            "gcov-root": "",
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            pipe: true,
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            root: "",
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            slug: "",
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            token: "",
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            url: "",
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp.src("src/**/*.js")
        .pipe(codecov({
            yml: "",
        }))
        .pipe(gulp.dest("dist"));
});
