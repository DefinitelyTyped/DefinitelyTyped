import logat = require('logat');

logat.on('LogConfigError', (err: any) => {
});

logat.error('This is error');
logat.error(new Error('This is error instance'));
logat.error('object1', 'object2');
logat.warn('This is warn');
logat.info('This is info');
logat.debug('This is debug');

logat.setOptions({
  logLevel: 4,
  logMethod: 1
});
logat.getOptions();
