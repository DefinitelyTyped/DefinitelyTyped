import * as gulp from "gulp";
import cached = require("gulp-cached");

// Usage
gulp.src("*.ts")
    .pipe(cached("ts-cache"));

gulp.src("*.ts")
    .pipe(cached("ts-cache", {}));

gulp.src("*.ts")
    .pipe(cached("ts-cache", { optimizeMemory: true }));

// Clearing the whole cache
cached.caches = {};

// Clearing a specific cache entry
delete cached.caches["ts-cache"];
