import {
  identify,
  init,
  track,
  trackForm,
  trackLink,
  page,
  group,
  alias,
  ready,
  debug,
  on,
  timeout,
  reset
} from 'segment-api';

init('abc');
identify('johndoe', { x: 1 }, { y: 2 }, err => console.log('error:', err));
track('x', { x: 1 }, { y: 2 }, err => console.log('error:', err));
trackLink(document.createElement('div'), 'event', { x: 1 });
trackLink(document.createElement('div'), () => 'event', () => ({ x: 1 }));
trackForm(document.createElement('form'), 'event', { x: 1 });
trackForm(document.createElement('form'), () => 'event', () => ({ x: 1 }));
page();
page('x', 'y', { z: 1 }, { a: 2 }, err => console.log(err));
group('a', { x: 1 }, { y: 1 }, err => console.log(err));
ready(() => console.log('ready'));
debug();
debug(false);
debug(true);
alias('x', 'y', { x: 1 }, err => console.log(err));
on('track', () => console.log('track fired'));
timeout(100);
reset();
