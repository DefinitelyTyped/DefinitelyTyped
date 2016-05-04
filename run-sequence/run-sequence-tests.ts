import gulp = require("gulp");
import tmp = require("run-sequence");
var runSequence = tmp.use(gulp);

gulp.task("run-sequence", (callback: any) => {
    runSequence("task1",
        ["task2", "task3"],
        "taks4",
        callback);
});

gulp.task("task1", () => {
    gulp.src("file1.txt")
        .pipe(gulp.dest("build"));
});

gulp.task("task2", () => {
    gulp.src("file2.txt")
        .pipe(gulp.dest("build"));
});

gulp.task("task3", () => {
    gulp.src("file3.txt")
        .pipe(gulp.dest("build"));
});

gulp.task("task4", () => {
    gulp.src("file4.txt")
        .pipe(gulp.dest("build"));
});
