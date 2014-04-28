// Type definitions for redis
// Project: https://github.com/mranney/node_redis
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/redis.d.ts

declare module "redis" {
	export function createClient(port_arg: number, host_arg: string, options: ClientOpts): RedisClient;
	export function print(err: Error, reply: any): void;
	export var debug_mode: boolean;

	interface MessageHandler {
		(channel: string, message: any): void;
	}

	interface ResCallback {
		(err: Error, res: any): void;
	}

	interface NumCallback {
		(err: Error, reply: number): void;
	}

	interface StringCallback {
		(err: Error, reply: string): void;
	}

	interface ServerInfo {
		redis_version: string;
		versions: number[];
	}

	interface ClientOpts {
		parser: string;
		return_buffers?: boolean;
		detect_buffers?: boolean;
		socket_nodelay?: boolean;
		no_ready_check?: boolean;
		enable_offline_queue?: boolean;
		retry_max_delay?: number;
		connect_timeout?: number;
		max_attempts?: number;
		auth_pass?: boolean;
	}

	interface RedisClient {
		// event: connect
		// event: error
		// event: message
		// event: pmessage
		// event: subscribe
		// event: psubscribe
		// event: unsubscribe
		// event: punsubscribe

		connected: boolean;
		retry_delay: number;
		retry_backoff: number;
		command_queue: any[];
		offline_queue: any[];
		server_info: ServerInfo;

		end(): void;

		// Connection (http://redis.io/commands#connection)
		auth(password: string, callback?: ResCallback): void;
		ping(callback?: NumCallback): void;

		// Strings (http://redis.io/commands#strings)
		append(key: string, value: string, callback?: NumCallback): void;
		bitcount(key: string, callback?: NumCallback): void;
		bitcount(key: string, start: number, end: number, callback?: NumCallback): void;
		set(key: string, value: string, callback?: StringCallback): void;
		get(key: string, callback?: StringCallback): void;
		exists(key: string, value: string, callback?: NumCallback): void;

		publish(channel: string, value: any): void;
		subscribe(channel: string): void;
		on(channel: string, handler: MessageHandler): void;

		/*
		commands = set_union([
			"get", "set", "setnx", "setex", "append", "strlen", "del", "exists", "setbit", "getbit", "setrange", "getrange", "substr",
			"incr", "decr", "mget", "rpush", "lpush", "rpushx", "lpushx", "linsert", "rpop", "lpop", "brpop", "brpoplpush", "blpop", "llen", "lindex",
			"lset", "lrange", "ltrim", "lrem", "rpoplpush", "sadd", "srem", "smove", "sismember", "scard", "spop", "srandmember", "sinter", "sinterstore",
			"sunion", "sunionstore", "sdiff", "sdiffstore", "smembers", "zadd", "zincrby", "zrem", "zremrangebyscore", "zremrangebyrank", "zunionstore",
			"zinterstore", "zrange", "zrangebyscore", "zrevrangebyscore", "zcount", "zrevrange", "zcard", "zscore", "zrank", "zrevrank", "hset", "hsetnx",
			"hget", "hmset", "hmget", "hincrby", "hdel", "hlen", "hkeys", "hvals", "hgetall", "hexists", "incrby", "decrby", "getset", "mset", "msetnx",
			"randomkey", "select", "move", "rename", "renamenx", "expire", "expireat", "keys", "dbsize", "auth", "ping", "echo", "save", "bgsave",
			"bgrewriteaof", "shutdown", "lastsave", "type", "multi", "exec", "discard", "sync", "flushdb", "flushall", "sort", "info", "monitor", "ttl",
			"persist", "slaveof", "debug", "config", "subscribe", "unsubscribe", "psubscribe", "punsubscribe", "publish", "watch", "unwatch", "cluster",
			"restore", "migrate", "dump", "object", "client", "eval", "evalsha"], require("./lib/commands"));
		*/

		get(args: any[], callback?: ResCallback): void;
		set(args: any[], callback?: ResCallback): void;
		setnx(args: any[], callback?: ResCallback): void;
		setex(args: any[], callback?: ResCallback): void;
		append(args: any[], callback?: ResCallback): void;
		strlen(args: any[], callback?: ResCallback): void;
		del(args: any[], callback?: ResCallback): void;
		exists(args: any[], callback?: ResCallback): void;
		setbit(args: any[], callback?: ResCallback): void;
		getbit(args: any[], callback?: ResCallback): void;
		setrange(args: any[], callback?: ResCallback): void;
		getrange(args: any[], callback?: ResCallback): void;
		substr(args: any[], callback?: ResCallback): void;
		incr(args: any[], callback?: ResCallback): void;
		decr(args: any[], callback?: ResCallback): void;
		mget(args: any[], callback?: ResCallback): void;
		rpush(args: any[], callback?: ResCallback): void;
		lpush(args: any[], callback?: ResCallback): void;
		rpushx(args: any[], callback?: ResCallback): void;
		lpushx(args: any[], callback?: ResCallback): void;
		linsert(args: any[], callback?: ResCallback): void;
		rpop(args: any[], callback?: ResCallback): void;
		lpop(args: any[], callback?: ResCallback): void;
		brpop(args: any[], callback?: ResCallback): void;
		brpoplpush(args: any[], callback?: ResCallback): void;
		blpop(args: any[], callback?: ResCallback): void;
		llen(args: any[], callback?: ResCallback): void;
		lindex(args: any[], callback?: ResCallback): void;
		lset(args: any[], callback?: ResCallback): void;
		lrange(args: any[], callback?: ResCallback): void;
		ltrim(args: any[], callback?: ResCallback): void;
		lrem(args: any[], callback?: ResCallback): void;
		rpoplpush(args: any[], callback?: ResCallback): void;
		sadd(args: any[], callback?: ResCallback): void;
		srem(args: any[], callback?: ResCallback): void;
		smove(args: any[], callback?: ResCallback): void;
		sismember(args: any[], callback?: ResCallback): void;
		scard(args: any[], callback?: ResCallback): void;
		spop(args: any[], callback?: ResCallback): void;
		srandmember(args: any[], callback?: ResCallback): void;
		sinter(args: any[], callback?: ResCallback): void;
		sinterstore(args: any[], callback?: ResCallback): void;
		sunion(args: any[], callback?: ResCallback): void;
		sunionstore(args: any[], callback?: ResCallback): void;
		sdiff(args: any[], callback?: ResCallback): void;
		sdiffstore(args: any[], callback?: ResCallback): void;
		smembers(args: any[], callback?: ResCallback): void;
		zadd(args: any[], callback?: ResCallback): void;
		zincrby(args: any[], callback?: ResCallback): void;
		zrem(args: any[], callback?: ResCallback): void;
		zremrangebyscore(args: any[], callback?: ResCallback): void;
		zremrangebyrank(args: any[], callback?: ResCallback): void;
		zunionstore(args: any[], callback?: ResCallback): void;
		zinterstore(args: any[], callback?: ResCallback): void;
		zrange(args: any[], callback?: ResCallback): void;
		zrangebyscore(args: any[], callback?: ResCallback): void;
		zrevrangebyscore(args: any[], callback?: ResCallback): void;
		zcount(args: any[], callback?: ResCallback): void;
		zrevrange(args: any[], callback?: ResCallback): void;
		zcard(args: any[], callback?: ResCallback): void;
		zscore(args: any[], callback?: ResCallback): void;
		zrank(args: any[], callback?: ResCallback): void;
		zrevrank(args: any[], callback?: ResCallback): void;
		hset(args: any[], callback?: ResCallback): void;
		hsetnx(args: any[], callback?: ResCallback): void;
		hget(args: any[], callback?: ResCallback): void;
		hmset(args: any[], callback?: ResCallback): void;
		hmget(args: any[], callback?: ResCallback): void;
		hincrby(args: any[], callback?: ResCallback): void;
		hdel(args: any[], callback?: ResCallback): void;
		hlen(args: any[], callback?: ResCallback): void;
		hkeys(args: any[], callback?: ResCallback): void;
		hvals(args: any[], callback?: ResCallback): void;
		hgetall(args: any[], callback?: ResCallback): void;
		hexists(args: any[], callback?: ResCallback): void;
		incrby(args: any[], callback?: ResCallback): void;
		decrby(args: any[], callback?: ResCallback): void;
		getset(args: any[], callback?: ResCallback): void;
		mset(args: any[], callback?: ResCallback): void;
		msetnx(args: any[], callback?: ResCallback): void;
		randomkey(args: any[], callback?: ResCallback): void;
		select(args: any[], callback?: ResCallback): void;
		move(args: any[], callback?: ResCallback): void;
		rename(args: any[], callback?: ResCallback): void;
		renamenx(args: any[], callback?: ResCallback): void;
		expire(args: any[], callback?: ResCallback): void;
		expireat(args: any[], callback?: ResCallback): void;
		keys(args: any[], callback?: ResCallback): void;
		dbsize(args: any[], callback?: ResCallback): void;
		auth(args: any[], callback?: ResCallback): void;
		ping(args: any[], callback?: ResCallback): void;
		echo(args: any[], callback?: ResCallback): void;
		save(args: any[], callback?: ResCallback): void;
		bgsave(args: any[], callback?: ResCallback): void;
		bgrewriteaof(args: any[], callback?: ResCallback): void;
		shutdown(args: any[], callback?: ResCallback): void;
		lastsave(args: any[], callback?: ResCallback): void;
		type(args: any[], callback?: ResCallback): void;
		multi(args: any[], callback?: ResCallback): void;
		exec(args: any[], callback?: ResCallback): void;
		discard(args: any[], callback?: ResCallback): void;
		sync(args: any[], callback?: ResCallback): void;
		flushdb(args: any[], callback?: ResCallback): void;
		flushall(args: any[], callback?: ResCallback): void;
		sort(args: any[], callback?: ResCallback): void;
		info(args: any[], callback?: ResCallback): void;
		monitor(args: any[], callback?: ResCallback): void;
		ttl(args: any[], callback?: ResCallback): void;
		persist(args: any[], callback?: ResCallback): void;
		slaveof(args: any[], callback?: ResCallback): void;
		debug(args: any[], callback?: ResCallback): void;
		config(args: any[], callback?: ResCallback): void;
		subscribe(args: any[], callback?: ResCallback): void;
		unsubscribe(args: any[], callback?: ResCallback): void;
		psubscribe(args: any[], callback?: ResCallback): void;
		punsubscribe(args: any[], callback?: ResCallback): void;
		publish(args: any[], callback?: ResCallback): void;
		watch(args: any[], callback?: ResCallback): void;
		unwatch(args: any[], callback?: ResCallback): void;
		cluster(args: any[], callback?: ResCallback): void;
		restore(args: any[], callback?: ResCallback): void;
		migrate(args: any[], callback?: ResCallback): void;
		dump(args: any[], callback?: ResCallback): void;
		object(args: any[], callback?: ResCallback): void;
		client(args: any[], callback?: ResCallback): void;
		eval(args: any[], callback?: ResCallback): void;
		evalsha(args: any[], callback?: ResCallback): void;
	}
}
