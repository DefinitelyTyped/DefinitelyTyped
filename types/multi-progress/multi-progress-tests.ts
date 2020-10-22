/**
 * Example from https://github.com/pitaj/multi-progress
 */

// require the library
import * as MultiProgress from 'multi-progress';

// spawn an instance with the optional stream to write to
// use of `new` is optional
const multi = new MultiProgress(process.stderr);

// create a progress bar
const bar = multi.newBar('  downloading [:bar] :percent :etas', {
  complete: '=',
  incomplete: ' ',
  width: 30,
  total: 20
});
