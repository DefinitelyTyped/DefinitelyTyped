/**
 * Example from https://github.com/pitaj/multi-progress
 */

// require the library
var MultiProgress = require("multi-progress");

// spawn an instance with the optional stream to write to
// use of `new` is optional
var multi = new MultiProgress(process.stderr);

// create a progress bar
var bar = multi.newBar('  downloading [:bar] :percent :etas', {
  complete: '=',
  incomplete: ' ',
  width: 30,
  total: 20
});
