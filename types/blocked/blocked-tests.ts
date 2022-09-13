import * as blocked from 'blocked';

blocked((ms: number) => {
  // todo: show warning
}, {
  threshold: 10,
  interval: 10,
});
