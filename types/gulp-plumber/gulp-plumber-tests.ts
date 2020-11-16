import gulp = require('gulp');
import plumber = require('gulp-plumber');

//default behavior
gulp.src('./src/*.ext')
    .pipe(plumber())
    .pipe(gulp.dest('./dist'));

//error handler function
gulp.src('./src/*.ext')
    .pipe(plumber((error) => {
        console.log(error);
    }))
    .pipe(gulp.dest('./dist'));
    
gulp.src('./src/*.ext')
    .pipe(plumber({}))
    .pipe(gulp.dest('./dist'));
    
gulp.src('./src/*.ext')
    .pipe(plumber({ inherit: false }))
    .pipe(gulp.dest('./dist'));
    
gulp.src('./src/*.ext')
    .pipe(plumber({ errorHandler: (error) => console.log(error) }))
    .pipe(gulp.dest('./dist'));

//plumber.stop()
gulp.src('./src/*.scss')
    .pipe(plumber())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./dist'));
