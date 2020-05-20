import gulp = require("gulp");
import fileinclude = require("gulp-file-include");

function testA() {
    fileinclude({
        prefix: "@@",
        basepath: "/home/"
    })
}

function testB() {
    gulp.task("fileinclude", function () {
        gulp.src(["index.html"])
            .pipe(fileinclude({
                prefix: "@@",
                basepath: "@file"
            }))
            .pipe(gulp.dest("./"));
    });
}

function testC() {
    gulp.task("fileinclude", function () {
        gulp.src(["index.html"])
            .pipe(fileinclude({
                filters: {
                    markdown: (x) => "nope"
                }
            }))
            .pipe(gulp.dest("./"));
    });
}

function testD() {
    fileinclude({
        context: {
            arr: ["test1", "test2"]
        }
    });
}

function testE() {
    fileinclude('@@');
}
