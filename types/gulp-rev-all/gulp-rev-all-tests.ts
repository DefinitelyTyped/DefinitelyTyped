import gulp = require('gulp');
import path = require('path');
import RevAll = require('gulp-rev-all');

gulp.task('default', () => {
    return gulp
        .src(['assets/**'])
        .pipe(RevAll.revision())
        .pipe(
            RevAll.revision({
                dontRenameFile: [/^\/favicon.ico$/g, /^\/index.html/g],
                hashLength: 4,
                prefix: 'http://1234.cloudfront.net/',
                transformPath(rev, source, path) {
                    return rev.replace('/img', '/images');
                },
                transformFilename(file, hash) {
                    const ext = path.extname(file.path);
                    return `${hash.substring(0, 5)}.${path.basename(file.path, ext)}${ext}`;
                },
            }),
        )
        .pipe(RevAll.manifestFile())
        .pipe(RevAll.versionFile())
        .pipe(gulp.dest('build/assets'));
});
