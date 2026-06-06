import gulp = require("gulp");
import * as es from "event-stream";

gulp.task("es:concat", () => {
    const streams: es.MapStream[] = [
        gulp.src(["*"]).pipe(gulp.dest("build")) as unknown as es.MapStream,
    ];

    return es.concat(streams);
});

gulp.task("es:readArray ", () => {
    var reader = es.readArray([1, 2, 3]);
});

es.pipeline(
    es.readArray([0, 1, 2, 3, undefined]),
    es.filterSync((value: number | undefined) => !!value),
    es.map((value: number, callback: Function) => callback(null, value + 1)),
);
