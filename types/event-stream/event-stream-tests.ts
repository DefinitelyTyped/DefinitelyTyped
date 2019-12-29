import gulp = require("gulp");
import * as es from "event-stream";

gulp.task("es:concat", () => {
    var streams = gulp.src(["*"])
        .pipe(gulp.dest("build"));

	return es.concat.apply(null, streams);
});

gulp.task("es:readArray ", () => {
    var reader = es.readArray([1, 2, 3]);
});

