import gulp = require("gulp");
import rename = require("gulp-rename");

// Test that new import syntax works
import * as newRename from "gulp-rename";

// rename via string
gulp.src("./src/main/text/hello.txt")
    .pipe(rename("main/text/ciao/goodbye.md"))
    .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/goodbye.md

// rename via function
gulp.src("./src/**/hello.txt")
    .pipe(rename((path) => {
        path.dirname += "/ciao";
        path.basename += "-goodbye";
        path.extname = ".md";
    }))
    .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/hello-goodbye.md

// rename via a map function
gulp.src("./src/**/hello.txt")
    .pipe(rename((path) => {
        // Returns a completely new object, make sure you return all keys needed!
        return {
            dirname: path.dirname + "/ciao",
            basename: path.basename + "-goodbye",
            extname: ".md",
        };
    }))
    .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/hello-goodbye.md

// rename via hash
gulp.src("./src/main/text/hello.txt", { base: process.cwd() })
    .pipe(rename({
        dirname: "main/text/ciao",
        basename: "aloha",
        prefix: "bonjour-",
        suffix: "-hola",
        extname: ".md",
    }))
    .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/bonjour-aloha-hola.md

// rename with multi-ext
gulp.src("./src/main/text/hello.min.js", { base: process.cwd() })
    .pipe(rename({
        suffix: "-v2",
    }, {
        multiExt: true,
    }))
    .pipe(gulp.dest("./dist")); // ./dist/main/text/hello-v2.min.js
