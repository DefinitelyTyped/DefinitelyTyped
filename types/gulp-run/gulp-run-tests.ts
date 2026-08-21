import run = require("gulp-run");
import gulp = require("gulp");

// Only required args
run("echo Hello World");
new run("echo Hello World");
// Empty options
run("echo Hello World", {});
new run("echo Hello World", {});
// All options
run("echo Hello World", {
    env: { foo: "bar" },
    cwd: "/",
    silent: false,
    verbosity: 3,
    usePowerShell: true,
});
new run("echo Hello World", {
    env: { foo: "bar" },
    cwd: "/",
    silent: false,
    verbosity: 3,
    usePowerShell: true,
});

// GulpRunner#exec
new run("echo Hello World").exec();
new run("echo Hello World").exec("foo");
new run("echo Hello World").exec("foo", error => {
    error; // $ExpectType Error | null | undefined
});

// GulpRunner.Command
new run.Command("echo Hello, World!");
new run.Command("echo Hello, World!", {});
new run.Command("echo Hello, World!", {
    env: { foo: "bar" },
    cwd: "/",
    silent: false,
    verbosity: 3,
    usePowerShell: true,
});

new run.Command("echo Hello World").exec(); // $ExpectType File
new run.Command("echo Hello World").exec("foo"); // $ExpectType File
// $ExpectType File
new run.Command("echo Hello World").exec("foo", error => {
    error; // $ExpectType (Error & { status: number; }) | null
});

gulp.task("hello-world", () => run("echo Hello World").exec().pipe(gulp.dest("output")));

gulp.task(
    "even-lines",
    () => gulp.src("path/to/input/*").pipe(run("awk \"NR % 2 == 0\"")).pipe(gulp.dest("path/to/output")),
);
