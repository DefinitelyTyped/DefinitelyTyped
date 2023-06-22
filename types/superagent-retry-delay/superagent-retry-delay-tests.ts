import * as superagent from 'superagent';
import wrapSuperagent = require('superagent-retry-delay');

// $ExpectType EnhancedSuperAgentStatic
const request = wrapSuperagent(superagent);

// @ts-expect-error
const badRequest = wrapSuperagent({ something: 'else' });

// typical usage
request
  .get('http://my.url')
  .retry(5, 1000)
  .ok(res => res.status === 200);

// standard .retry() usage should no longer work
request
  .get('http://my.url')
  // @ts-expect-error
  .retry(5, () => 'callback')
  .ok(res => res.status === 200);
