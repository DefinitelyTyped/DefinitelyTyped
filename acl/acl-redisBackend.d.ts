// Type definitions for node_acl 0.4.7
// Project: https://github.com/optimalbits/node_acl
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="acl.d.ts" />
/// <reference path='../redis/redis.d.ts'/>

declare module "acl" {
  import redis = require('redis');

  interface AclStatic {
    redisBackend: RedisBackendStatic;
  }

  interface RedisBackend extends Backend<redis.RedisClient> { }
  interface RedisBackendStatic {
    new(redis: redis.RedisClient, prefix: string): RedisBackend;
    new(redis: redis.RedisClient): RedisBackend;
  }
}
