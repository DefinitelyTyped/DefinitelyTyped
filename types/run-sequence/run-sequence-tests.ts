import gulp from "gulp";
import tmp, { Task } from "run-sequence";

const runSequence = tmp.use(gulp);

{
    gulp.task("run-sequence", (callback) => {
        runSequence("task1", ["task2", "task3"], "task4");
        runSequence("task1", ["task2", "task3"], "task4", callback);
    });

    gulp.task("task1", () => {});
    gulp.task("task2", () => {});
    gulp.task("task3", () => {});
    gulp.task("task4", () => {});
}

{
    runSequence.options.ignoreUndefinedTasks = true;
    gulp.task("task", function() {
        runSequence("foo", null, "bar"); // no longer errors on `null`
    });
}
