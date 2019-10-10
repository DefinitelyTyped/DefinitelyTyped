import ls = require('local-storage');

ls('foo');
ls('foo', 'bar');
ls.get('foo');
ls.set('foo', 'bar');
ls.remove('foo');
ls.clear();

const callback = (newValue: any, oldValue: any, url: string) => null;

ls.on('foo', callback);
ls.off('foo', callback);
