import Keyv = require('keyv');
import KeyvRedis = require('@keyv/redis');

new Keyv('redis://user:pass@localhost:6379', { max_attempts: 1 });

new KeyvRedis({ uri: 'redis://user:pass@localhost:6379' });
new KeyvRedis('redis://user:pass@localhost:6379', { max_attempts: 1 });
new KeyvRedis('redis://user:pass@localhost:6379', {
    uri: 'redis://user:pass@localhost:6379',
    max_attempts: 1,
});
const redis = new KeyvRedis('redis://user:pass@localhost:6379');
new Keyv({ store: redis });
