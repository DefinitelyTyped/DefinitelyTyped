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

/**
 * Interrupt example from https://github.com/visionmedia/node-progress
 */
var bar = new ProgressBar(':bar :current/:total', { total: 10 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  } else if (bar.curr === 5) {
    bar.interrupt('this message appears above the progress bar\ncurrent progress is ' + bar.curr + '/' + bar.total);
  }
}, 1000);