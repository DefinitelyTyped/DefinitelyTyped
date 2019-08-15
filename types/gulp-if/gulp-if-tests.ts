import gulp = require('gulp');
import _if = require('gulp-if');

gulp.src('test.css')
    .pipe(_if(true, gulp.src('test.css')));

gulp.src('test.css')
    .pipe(_if(false, gulp.src('test.css'), gulp.src('test.css')));
    
gulp.src('test.css')
    .pipe(_if({isDirectory: true}, gulp.src('test.css')));

gulp.src('test.css')
    .pipe(_if({isFile: true}, gulp.src('test.css')));
    
gulp.src('test.css')
    .pipe(_if(file => true, gulp.src('test.css')));
    
gulp.src('test.css')
    .pipe(_if(/.*?\.css/, gulp.src('test.css')));