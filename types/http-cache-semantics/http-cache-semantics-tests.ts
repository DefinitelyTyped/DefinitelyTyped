const req = { url: 'https://foo.bar', method: 'GET', headers: { foo: 'bar' } };
const res = { status: 200, headers: { foo: 'bar' } };

import CachePolicy = require('http-cache-semantics');

const policy = new CachePolicy(req, res);
new CachePolicy(req, res, { shared: true });
new CachePolicy(req, res, { cacheHeuristic: 0.1 });
new CachePolicy(req, res, { immutableMinTimeToLive: 24 * 3600 * 1000 });
new CachePolicy(req, res, { ignoreCargoCult: false });
new CachePolicy(req, res, { trustServerDate: true });

policy.storable(); // $ExpectType boolean
policy.satisfiesWithoutRevalidation(req); // $ExpectType boolean
policy.responseHeaders(); // $ExpectType Headers
policy.timeToLive(); // $ExpectType number
CachePolicy.fromObject(policy.toObject()); // $ExpectType CachePolicy
policy.revalidationHeaders(req); // $ExpectType Headers
policy.revalidatedPolicy(req, res); // $ExpectType RevalidationPolicy
