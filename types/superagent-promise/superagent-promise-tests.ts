// via: http://visionmedia.github.io/superagent/
import * as superagentPromise from 'superagent-promise';
import * as superagent from 'superagent';

superagentPromise.superagent_promise(superagent, global.Promise); // $ExpectedType any
