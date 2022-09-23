import { error, info, init, log, warn } from 'r7insight_js';
import R7Insight = require('r7insight_js');

// @ts-expect-error
init({});

// @ts-expect-error
init({ token: 'token' });

// @ts-expect-error
init({ region: 'eu' });

R7Insight.init({ token: 'token', region: 'eu' }); // $ExpectType void
init({ token: 'token', region: 'eu' }); // $ExpectType void

init({
    token: 'token',
    region: 'eu',
    ssl: true,
    catchall: true,
    trace: true,
    no_format: true,
    page_info: 'never',
    print: true,
});

const string = 'value';
const obj = { key: 'value' };

log();
log('Message'); // $ExpectType void
log('Message with', string, ' and some objects: ', obj, 1);
log(obj);
log(obj, obj);

error();
error('Message'); // $ExpectType void
error('Message with', string, ' and some objects: ', obj, 1);
error(obj);
error(obj, obj);

warn();
warn('Message'); // $ExpectType void
warn('Message with', string, ' and some objects: ', obj, 1);
warn(obj);
warn(obj, obj);

info();
info('Message'); // $ExpectType void
info('Message with', string, ' and some objects: ', obj, 1);
info(obj);
info(obj, obj);
