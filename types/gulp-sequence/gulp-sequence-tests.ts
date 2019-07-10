import * as seq from 'gulp-sequence';
import * as gulp from 'gulp';

seq.use(gulp).use(gulp).use(gulp);

gulp.task('x', seq('foo'));
gulp.task('x', seq('foo', ['foo', 'bar'], 'qux'));
gulp.task('x', seq(
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25'
));

const noop = () => {};

// tslint:disable-next-line:no-void-expression
let r: undefined = <undefined> seq('foo', noop);
// tslint:disable-next-line:no-void-expression
r = <undefined> seq('foo', ['foo', 'bar'], 'qux', noop);
// tslint:disable-next-line:no-void-expression
r = <undefined> seq(
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    noop
);
