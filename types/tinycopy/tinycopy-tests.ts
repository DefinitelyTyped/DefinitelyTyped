import TinyCopy from 'tinycopy';

TinyCopy.exec('test', (err, data) => {});

var trigger_1 = document.getElementById('trigger_1');
var target_1 = document.getElementById('target');
new TinyCopy(trigger_1, target_1)
  .on('success', function(data) {})
  .on('error', function(err) {});

var trigger_2 = document.getElementById('trigger_2');
var target_2 = 'test';
new TinyCopy(trigger_2, target_2)
  .on('success', function(data) {})
  .on('error', function(err) {});
