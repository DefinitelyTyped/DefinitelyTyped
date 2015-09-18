/// <reference path="progress.d.ts"/>

var ProgressBar = require('progress');


/**
 * Usage example from https://github.com/tj/node-progress
 */
var bar = new ProgressBar(':bar', { total: 10 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);


/**
 * Custom token example from https://github.com/tj/node-progress
 */
var bar = new ProgressBar(':current: :token1 :token2', { total: 3 });

bar.tick({
  'token1': "Hello",
  'token2': "World!\n"
});

bar.tick(2, {
  'token1': "Goodbye",
  'token2': "World!"
});
