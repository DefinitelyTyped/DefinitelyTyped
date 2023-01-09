import styleInject = require('style-inject');

// @ts-expect-error
styleInject();

styleInject('');
styleInject('', {});
styleInject('', { insertAt: 'top' });

// @ts-expect-error
styleInject('', { insertAt: 'bottom' });
