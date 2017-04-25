import * as gulp from 'gulp';
import * as undertaker from 'undertaker';

var minify: Function;
var jade: Function;
var someplugin: Function;

gulp.src('client/templates/*.jade')
    .pipe(jade())
    .pipe(minify())
    .pipe(gulp.dest('build/minified_templates'));


// exclude every JS file that starts with a b except bad.js
gulp.src(['*.js', '!b*.js', 'bad.js']);


// Matches 'client/js/somedir/somefile.js' and resolves `base` to `client/js/`
gulp.src('client/js/**/*.js')
    .pipe(minify())
    .pipe(gulp.dest('build'));  // Writes 'build/somedir/somefile.js'

gulp.src('client/js/**/*.js', { base: 'client' })
    .pipe(minify())
    .pipe(gulp.dest('build'));  // Writes 'build/js/somedir/somefile.js'


// Emits an error if app/scripts.js doesn't exist
gulp.src('app/scripts.js');

// Won't emit an error
gulp.src('app/scripts.js', { allowEmpty: true });


gulp.src('./client/templates/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./build/templates'))
    .pipe(minify())
    .pipe(gulp.dest('./build/minified_templates'));


gulp.task(function someTask() {
    // Do stuff
});

// someTask will be the registered task function
var someTask = gulp.task('someTask');



function someNextTask() {
    return gulp.src(['some/glob/**/*.ext']).pipe(someplugin());
}
someTask.description = 'Does something';

gulp.task(someTask);


let foo: gulp.TaskFunction = () => { };
foo.name === 'foo' // true

var bar: gulp.TaskFunction = function () { };
bar.name === '' // true

bar.name = 'bar'
bar.name === '' // true


let test: gulp.TaskFunction = (done) => {
    done();
};

test.description = 'I do nothing';

gulp.task(test);

var del = require('del');

gulp.task('clean', function (done) {
    del(['.build/'], done);
});


gulp.task('somename', function () {
    return gulp.src('client/**/*.js')
        .pipe(minify())
        .pipe(gulp.dest('build'));
});

var del = require('del');

gulp.task('clean', function () {
    return new Promise(function (resolve, reject) {
        del(['.build/'], function (err: any) {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
});

var promisedDel = require('promised-del');

gulp.task('clean', function () {
    return promisedDel(['.build/']);
});

gulp.task('one', function (done) {
    // do stuff
    done();
});

gulp.task('two', function (done) {
    // do stuff
    done();
});

gulp.task('default', gulp.parallel('one', 'two', function (done) {
    // do more stuff
    done();
}));

gulp.task('one', function (done) {
    // do stuff
    done();
});

gulp.task('two', function (done) {
    // do stuff
    done();
});

gulp.task('default', gulp.series('one', 'two', function (done) {
    // do more stuff
    done();
}));

gulp.watch('js/**/*.js', gulp.parallel('concat', 'uglify'));


var watcher = gulp.watch('js/**/*.js', gulp.parallel('concat', 'uglify'));
// watcher.close
watcher.on('change', function (path, stats) {
    console.log('File ' + path + ' was changed');
});

watcher.on('unlink', function (path: string) {
    console.log('File ' + path + ' was removed');
});

gulp.task('one', function (done) {
    // do stuff
    done();
});

gulp.task('two', function (done) {
    // do stuff
    done();
});

gulp.task('three', function (done) {
    // do stuff
    done();
});

gulp.task('four', gulp.series('one', 'two'));

gulp.task('five',
    gulp.series('four',
        gulp.parallel('three', function (done) {
            // do more stuff
            done();
        })
    )
);


gulp.tree();

gulp.tree({ deep: true });


//gulpfile.js

var companyTasks: undertaker.Registry;

gulp.registry(companyTasks);

gulp.task('one', gulp.parallel('someCompanyTask', function (done) {
    console.log('in task one');
    done();
}));


gulp.symlink("path/to/dir");

gulp.symlink(() => {
    return "resolved/path/to/dir";
});
