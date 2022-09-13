import * as gulp from 'gulp';
import * as registry from 'undertaker-registry';

const minify: () => any = () => { };
const jade: () => any = () => { };
const someplugin: () => any = () => { };
const promisedDel: (list: string[]) => any = (list) => { };
const del: (pattern: string | string[]) => any = (pattern) => { };

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
// $ExpectType TaskFunctionWrapped | undefined
const someTask = gulp.task('someTask');

const someNextTask = () => {
    return gulp.src(['some/glob/**/*.ext']).pipe(someplugin());
};

gulp.task(someTask!);

const someTaskWithCb = (cb: gulp.TaskFunctionCallback) => {
    cb();
};

gulp.task(someTaskWithCb);

const foo: gulp.TaskFunction = () => { };
foo.displayName === 'foo'; // true

const bar: gulp.TaskFunction = () => { };
bar.displayName === ''; // true

bar.displayName = 'bar';
bar.displayName === ''; // true

const test: gulp.TaskFunction = (done) => {
    done();
};

gulp.task(test);

gulp.task('clean', () => del(['.build/']));

gulp.task('somename', () => {
    return gulp.src('client/**/*.js')
        .pipe(minify())
        .pipe(gulp.dest('build'));
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

const watcher = gulp.watch('js/**/*.js', gulp.parallel('concat', 'uglify'));
// watcher.close
watcher.on('change', (path, stats) => {
    console.log(`File ${path} was changed`);
});

watcher.on('unlink', (path: string) => {
    console.log(`File ${path} was removed`);
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

// gulpfile.js

const companyTasks = {} as registry;

gulp.registry(companyTasks);

gulp.task('one', gulp.parallel('someCompanyTask', (done) => {
    console.log('in task one');
    done();
}));

gulp.symlink("path/to/dir");

gulp.symlink(() => {
    return "resolved/path/to/dir";
});
