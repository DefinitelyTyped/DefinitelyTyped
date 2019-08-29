import * as bristol from 'bristol';

const log = new bristol.Bristol();

log.addTarget('console');
log.info('Things be working.', {});

log.addTarget('console').withFormatter('human');
log.debug('Hello, world', { code: 404 });

const uhoh: bristol.LogData = {
  code: 500,
  error: {
    message: 'Something broke',
    reason: 'idk why though',
  },
};

log.error('Something went wrong', uhoh);
