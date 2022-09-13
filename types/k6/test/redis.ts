import redis, { Client } from 'k6/experimental/redis';

//
// Client constructor
//
// @ts-expect-error
const redisClient = new redis.Client();

//
// Client.set
//

// @ts-expect-error
redisClient.set();
// @ts-expect-error
redisClient.set(5);
// @ts-expect-error
redisClient.set('key');
// @ts-expect-error
redisClient.set('key', 'value');
// @ts-expect-error
redisClient.set('key', 'value', 'invalid-type');

//
// Client.get
//

// @ts-expect-error
redisClient.get();
// @ts-expect-error
redisClient.get(5);

//
// Client.getSet
//

// @ts-expect-error
redisClient.getSet();
// @ts-expect-error
redisClient.getSet(5);
// @ts-expect-error
redisClient.getSet('key');

//
// Client.del
//

// @ts-expect-error
redisClient.del();
// @ts-expect-error
redisClient.del(5);

//
// Client.getDel
//

// @ts-expect-error
redisClient.getDel();
// @ts-expect-error
redisClient.getDel(5);

//
// Client.exists
//

// @ts-expect-error
redisClient.exists();
// @ts-expect-error
redisClient.exists(5);

//
// Client.incr
//

// @ts-expect-error
redisClient.incr();
// @ts-expect-error
redisClient.incr(5);

//
// Client.incrby
//

// @ts-expect-error
redisClient.incrBy();
// @ts-expect-error
redisClient.incrBy(5);
// @ts-expect-error
redisClient.incrBy('key');
// @ts-expect-error
redisClient.incrBy('key', 'value');

//
// Client.decr
//

// @ts-expect-error
redisClient.decr();
// @ts-expect-error
redisClient.decr(5);

//
// Client.decrby
//

// @ts-expect-error
redisClient.decrBy();
// @ts-expect-error
redisClient.decrBy(5);
// @ts-expect-error
redisClient.decrBy('key');
// @ts-expect-error
redisClient.decrBy('key', 'value');

//
// Client.randomKey
//

// @ts-expect-error
redisClient.randomKey(5);

//
// Client.mget
//

// @ts-expect-error
redisClient.mget();
// @ts-expect-error
redisClient.mget(5);

//
// Client.expire
//

// @ts-expect-error
redisClient.expire();
// @ts-expect-error
redisClient.expire(5);
// @ts-expect-error
redisClient.expire('key');
// @ts-expect-error
redisClient.expire('key', 'value');

//
// Client.ttl
//

// @ts-expect-error
redisClient.ttl();
// @ts-expect-error
redisClient.ttl(5);

//
// Client.persist
//

// @ts-expect-error
redisClient.persist();
// @ts-expect-error
redisClient.persist(5);

//
// Client.lpsuh
//

// @ts-expect-error
redisClient.lpsuh();
// @ts-expect-error
redisClient.lpsuh(5);
// @ts-expect-error
redisClient.lpsuh('key');
// @ts-expect-error
redisClient.lpsuh('key', 'value');

//
// Client.rpush
//

// @ts-expect-error
redisClient.rpush();
// @ts-expect-error
redisClient.rpush(5);
// @ts-expect-error
redisClient.rpush('key');
// @ts-expect-error
redisClient.rpush('key', 'value');

//
// Client.lpop
//

// @ts-expect-error
redisClient.lpop();
// @ts-expect-error
redisClient.lpop(5);

//
// Client.rpop
//

// @ts-expect-error
redisClient.rpop();
// @ts-expect-error
redisClient.rpop(5);

//
// Client.lrange
//

// @ts-expect-error
redisClient.lrange();
// @ts-expect-error
redisClient.lrange(5);
// @ts-expect-error
redisClient.lrange('key');
// @ts-expect-error
redisClient.lrange('key', 0);
// @ts-expect-error
redisClient.lrange('key', 0, 'stop');
// @ts-expect-error
redisClient.lrange('key', 'start', 'stop');

//
// Client.lindex
//

// @ts-expect-error
redisClient.lindex();
// @ts-expect-error
redisClient.lindex(5);
// @ts-expect-error
redisClient.lindex('key');
// @ts-expect-error
redisClient.lindex('key', 'index');

//
// Client.lset
//

// @ts-expect-error
redisClient.lset();
// @ts-expect-error
redisClient.lset(5);
// @ts-expect-error
redisClient.lset('key');
// @ts-expect-error
redisClient.lset('key', 'index');
// @ts-expect-error
redisClient.lset('key', 'index', 'element');
// @ts-expect-error
redisClient.lset('key', 'index', 0);

//
// Client.lrem
//

// @ts-expect-error
redisClient.lrem();
// @ts-expect-error
redisClient.lrem(5);
// @ts-expect-error
redisClient.lrem('key');
// @ts-expect-error
redisClient.lrem('key', 'count');
// @ts-expect-error
redisClient.lrem('key', 0, 0);
// @ts-expect-error
redisClient.lrem('key', 'count', 'value');

//
// Client.llen
//

// @ts-expect-error
redisClient.llen();
// @ts-expect-error
redisClient.llen(5);

//
// Client.hset
//

// @ts-expect-error
redisClient.hset();
// @ts-expect-error
redisClient.hset(5);
// @ts-expect-error
redisClient.hset('key');
// @ts-expect-error
redisClient.hset('key', 0);
// @ts-expect-error
redisClient.hset('key', 'value');
// @ts-expect-error
redisClient.hset('key', 'value', 0);

//
// Client.hsetnx
//

// @ts-expect-error
redisClient.hsetnx();
// @ts-expect-error
redisClient.hsetnx(5);
// @ts-expect-error
redisClient.hsetnx('key');
// @ts-expect-error
redisClient.hsetnx('key', 0);
// @ts-expect-error
redisClient.hsetnx('key', 'value');
// @ts-expect-error
redisClient.hsetnx('key', 'value', 0);

//
// Client.hget
//

// @ts-expect-error
redisClient.hget();
// @ts-expect-error
redisClient.hget(5);
// @ts-expect-error
redisClient.hget('key');
// @ts-expect-error
redisClient.hget('key', 0);

//
// Client.hdel
//

// @ts-expect-error
redisClient.hdel();
// @ts-expect-error
redisClient.hdel(5);
// @ts-expect-error
redisClient.hdel('key');
// @ts-expect-error
redisClient.hdel('key', 0);

//
// Client.hgetall
//

// @ts-expect-error
redisClient.hgetall();
// @ts-expect-error
redisClient.hgetall(5);

//
// Client.hkeys
//

// @ts-expect-error
redisClient.hkeys();
// @ts-expect-error
redisClient.hkeys(5);

//
// Client.hvals
//

// @ts-expect-error
redisClient.hvals();
// @ts-expect-error
redisClient.hvals(5);

//
// Client.hlen
//

// @ts-expect-error
redisClient.hlen();
// @ts-expect-error
redisClient.hlen(5);

//
// Client.hincrby
//

// @ts-expect-error
redisClient.hincrby();
// @ts-expect-error
redisClient.hincrby(5);
// @ts-expect-error
redisClient.hincrby('key');
// @ts-expect-error
redisClient.hincrby('key', 0);
// @ts-expect-error
redisClient.hincrby('key', 'value');
// @ts-expect-error
redisClient.hincrby('key', 'value', 'zero');

//
// Client.sadd
//

// @ts-expect-error
redisClient.sadd();
// @ts-expect-error
redisClient.sadd(5);
// @ts-expect-error
redisClient.sadd('key');
// @ts-expect-error
redisClient.sadd('key', 0);

//
// Client.srem
//

// @ts-expect-error
redisClient.srem();
// @ts-expect-error
redisClient.srem(5);
// @ts-expect-error
redisClient.srem('key');
// @ts-expect-error
redisClient.srem('key', 0);

//
// Client.sismember
//

// @ts-expect-error
redisClient.sismember();
// @ts-expect-error
redisClient.sismember(5);
// @ts-expect-error
redisClient.sismember('key');

//
// Client.smembers
//

// @ts-expect-error
redisClient.smembers();
// @ts-expect-error
redisClient.smembers(5);

//
// Client.srandmember
//

// @ts-expect-error
redisClient.srandmember();
// @ts-expect-error
redisClient.srandmember(5);

//
// Client.spop
//

// @ts-expect-error
redisClient.spop();
// @ts-expect-error
redisClient.spop(5);
