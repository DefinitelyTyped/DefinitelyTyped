// https://github.com/OptimalBits/node_acl/blob/master/Readme.md
import Acl = require('acl');
import redis = require('redis');

declare var client: redis.RedisClient;

// Using the redis backend
const acl = new Acl(new Acl.redisBackend(client, 'acl_'));

// guest is allowed to view blogs
acl.allow('guest', 'blogs', 'view');

// allow function accepts arrays as any parameter
acl.allow('member', 'blogs', ['edit', 'view', 'delete']);
