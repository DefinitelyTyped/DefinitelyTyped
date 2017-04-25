import * as gulp from 'gulp';
import * as undertaker from 'undertaker';
import * as del from "del";

var minify: () => any;
var jade: () => any;
var someplugin: () => any;
var promisedDel: (list: string[]) => any;

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

gulp.task(() => {
    // Do stuff
});

// someTask will be the registered task function
var someTask = gulp.task('someTask');

var someNextTask = () => {
    return gulp.src(['some/glob/**/*.ext']).pipe(someplugin());
}
someTask.description = 'Does something';

gulp.task(someTask);

let foo: gulp.TaskFunction = () => { };
foo.name === 'foo'; // true

var bar: gulp.TaskFunction = () => { };
bar.name === ''; // true

bar.name = 'bar';
bar.name === ''; // true

let test: gulp.TaskFunction = (done) => {
    done();
};

test.description = 'I do nothing';

gulp.task(test);

gulp.task('clean', (done) => {
    del(['.build/'], done);
});

gulp.task('somename', () => {
    return gulp.src('client/**/*.js')
        .pipe(minify())
        .pipe(gulp.dest('build'));
});

gulp.task('clean', () => {
    return new Promise((resolve, reject) => {
        del(['.build/'], (err: any) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
});

gulp.task('clean', () => {
    return promisedDel(['.build/']);
});

gulp.task('one', (done) => {
    // do stuff
    done();
});

gulp.task('two', (done) => {
    // do stuff
    done();
});

gulp.task('default', gulp.parallel('one', 'two', (done) => {
    // do more stuff
    done();
}));

gulp.task('one', (done) => {
    // do stuff
    done();
});

gulp.task('two', (done) => {
    // do stuff
    done();
});

gulp.task('default', gulp.series('one', 'two', (done) => {
    // do more stuff
    done();
}));

gulp.watch('js/**/*.js', gulp.parallel('concat', 'uglify'));

var watcher = gulp.watch('js/**/*.js', gulp.parallel('concat', 'uglify'));
// watcher.close
watcher.on('change', (path, stats) => {
    console.log('File ' + path + ' was changed');
});

watcher.on('unlink', (path: string) => {
    console.log('File ' + path + ' was removed');
});

gulp.task('one', (done) => {
    // do stuff
    done();
});

gulp.task('two', (done) => {
    // do stuff
    done();
});

gulp.task('three', (done) => {
    // do stuff
    done();
});

gulp.task('four', gulp.series('one', 'two'));

gulp.task('five',
    gulp.series('four',
        gulp.parallel('three', (done) => {
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

gulp.task('one', gulp.parallel('someCompanyTask', (done) => {
    console.log('in task one');
    done();
}));

gulp.symlink("path/to/dir");

gulp.symlink(() => {
    return "resolved/path/to/dir";
});
