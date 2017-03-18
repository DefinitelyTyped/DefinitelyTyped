import * as gulp from "gulp";
import * as batch from "gulp-batch";

gulp.task('default', () => {
    gulp.watch([ 'lib/**', 'test/**' ], batch((events: any, cb: any) => {
        events.on('data', console.log).on('end', cb);
     }));
});
