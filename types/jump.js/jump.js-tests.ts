import jump = require('jump.js');

const node = document.querySelector('.target')!;
jump(node);
jump('.target');
jump('.target', {
  duration: 1000,
});
jump('.target', {
  duration: 200,
  offset: 10
});
jump(100);
jump(-100, {
  callback: () => { console.log('Done!'); }
});
