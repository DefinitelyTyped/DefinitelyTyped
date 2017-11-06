import log = require('fancy-log');

log();
log(1);
log('foo');
log('foo', 'bar');

log.dir();
log.dir(1);
log.dir('foo');
log.dir('foo', 'bar');

log.error();
log.error(1);
log.error('foo');
log.error('foo', 'bar');

log.info();
log.info(1);
log.info('foo');
log.info('foo', 'bar');

log.warn();
log.warn(1);
log.warn('foo');
log.warn('foo', 'bar');
