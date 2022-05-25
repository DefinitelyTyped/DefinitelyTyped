import styleInject = require('style-inject');

// $ExpectError
styleInject();

styleInject('');
styleInject('', {});
styleInject('', { insertAt: 'top' });

// $ExpectError
styleInject('', { insertAt: 'bottom' });
