/// <reference path="gulp.d.ts" />
var gulp : IGulp;
gulp.src('string glob')
gulp.src(['array', 'glob'])
gulp.src('string glob', { buffer: true })
gulp.src(['array', 'glob'], { buffer: true })
gulp.src('string glob', { read: true })
gulp.src(['array', 'glob'], { read: true })
gulp.src('string glob', { read: true, buffer: true })
gulp.src(['array', 'glob'], { read: true, buffer: true })

gulp.dest('path')

gulp.task('name', () => 'abc')
gulp.task('name', ['dep1', 'dep2'])
gulp.task('name', ['dep1', 'dep2'], () => 'abc');

gulp.task('name', (done) => done())
gulp.task('name', ['dep1', 'dep2'], (done) => done())
gulp.task('name', (done) => done('error'))
gulp.task('name', ['dep1', 'dep2'], (done) => done('error'))

gulp.watch('glob', ['task1', 'task2'])
gulp.watch('glob', { interval: 0 }, ['task1', 'task2'])
gulp.watch('glob', { debounceDelay: 0, interval: 0 }, ['task1', 'task2'])

gulp.watch(['glob'], ['task1', 'task2'])
gulp.watch(['glob'], { interval: 0 }, ['task1', 'task2'])
gulp.watch(['glob'], { debounceDelay: 0, interval: 0 }, ['task1', 'task2'])

gulp.watch('glob', (e) => 'abc')
gulp.watch('glob', { interval: 0 }, (e) => 'abc')
gulp.watch('glob', { debounceDelay: 0, interval: 0 }, (e) => 'abc')

gulp.watch(['glob'], (e) => 'abc')
gulp.watch(['glob'], { interval: 0 }, (e) => 'abc')
gulp.watch(['glob'], { debounceDelay: 0, interval: 0 }, (e) => 'abc')



