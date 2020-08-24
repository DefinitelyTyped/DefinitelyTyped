import logger from '@parcel/logger';

logger.log({
  message: 'hello'
});
logger.onLog(ev => {
  if (ev.level === 'success') {
    console.log('SUCCESS!', ev.message);
  }
});

logger.info([{
  message: 'hello'
}, {
  message: 'and goodbye',
  filePath: __filename,
  codeFrame: {
    codeHighlights: {
      start: {
        line: 1,
        column: 1
      },
      end: {
        line: 1,
        column: 2
      }
    }
  }
}]);
