import * as gulp from "gulp";
import remember = require("gulp-remember");

// Usage
gulp.src("*.ts")
    .pipe(remember());

gulp.src("*.ts")
    .pipe(remember("ts-cache"));

// Drops a file from a remember cache
remember.forget("main.ts");
remember.forget("ts-cache", "main.ts");

// Drops all files from a remember cache
remember.forgetAll();
remember.forgetAll("ts-cache");

// Get a raw remember cache
remember.cacheFor();
remember.cacheFor("ts-cache");
remember.cacheFor("ts-cache")["main.ts"];
