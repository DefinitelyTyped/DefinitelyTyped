

import jsend = require('jsend');

var valid: boolean = jsend.isValid({ status: 'success' });

var success = jsend.success('data');
var error = jsend.error('some error');
error = jsend.error({ message: 'nessage', code: 123 });

