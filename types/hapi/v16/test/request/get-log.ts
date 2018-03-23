
// From https://hapijs.com/api/16.1.1#requestgetlogtags-internal

import * as Hapi from '../../';

var request: Hapi.Request = <any> {};

request.getLog();
request.getLog('error');
request.getLog(['error', 'auth']);
request.getLog(['error'], true);
request.getLog(false);
