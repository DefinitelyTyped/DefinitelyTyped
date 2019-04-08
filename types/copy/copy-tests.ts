import copy = require('copy');
import File = require('vinyl');

copy.each(['a', 'b'], '.', { cwd: '..' }, () => {});
copy.each(['a', 'b'], '.', { cwd: '..' }, (error, files) => {
  error; // $ExpectType Error | null
  files; // $ExpectType File[] | undefined
});
copy.each(['a', 'b'], '.', () => {});
copy.each(['a', 'b'], '.', (error, files) => {
  error; // $ExpectType Error | null
  files; // $ExpectType File[] | undefined
});

copy.one('a', '.', { cwd: '..' }, () => {});
copy.one('a', '.', { cwd: '..' }, (error, files) => {
  error; // $ExpectType Error | null
  files; // $ExpectType File[] | undefined
});
copy.one('a', '.', () => {});
copy.one('a', '.', (error, files) => {
  error; // $ExpectType Error | null
  files; // $ExpectType File[] | undefined
});

copy(['a', 'b'], '.', { cwd: '..' }, () => {});
copy(['a', 'b'], '.', { cwd: '..' }, (error, files) => {
  error; // $ExpectType Error | null
  files; // $ExpectType File[] | undefined
});
copy(['a', 'b'], '.', () => {});
copy(['a', 'b'], '.', (error, files) => {
  error; // $ExpectType Error | null
  files; // $ExpectType File[] | undefined
});
