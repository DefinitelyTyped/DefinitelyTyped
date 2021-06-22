import redis = require('redis');

const value: any = 'any value';
const commandArr: any[][] = [];
const num = 0;
const str = 'any string';
const err: Error = new Error();
const args: any[] = [];
const resCallback: (err: Error | null, res: any) => void = () => {};
const numCallback: (err: Error | null, res: number) => void = () => {};
const strCallback: (err: Error | null, res: string) => void = () => {};
const numArrayCallback: (err: Error | null, res: number[]) => void = () => {};
const nullableStrCallback: (err: Error | null, res: string | null) => void = () => {};
const okCallback: (err: Error | null, res: 'OK') => void = () => {};
const messageHandler: (channel: string, message: any) => void = () => {};

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

const debug_mode: boolean = redis.debug_mode;
redis.print(err, value);

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

const options: redis.ClientOpts = {
  host: 'localhost',
  port: 6379,
};
let client: redis.RedisClient = redis.createClient(num, str, options);

// Test the `retry_strategy` property
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
function retryStrategyNumber(options: redis.RetryStrategyOptions): number {
  // Ensure that the properties of RetryStrategyOptions are resilient to breaking change.
  // If the properties of the interface changes, the variables below will also need to be adapted.
  const error: Error = options.error;
  const total_retry_time: number = options.total_retry_time;
  const times_connected: number = options.times_connected;
  const attempt: number = options.attempt;
  return 5000;
}
function retryStrategyError(options: redis.RetryStrategyOptions): Error {
  return new Error('Foo');
}
function retryStrategyUndefined(options: redis.RetryStrategyOptions): undefined {
  return undefined;
}
client = redis.createClient({
  retry_strategy: retryStrategyNumber
});
client = redis.createClient({
  retry_strategy: retryStrategyError
});
client = redis.createClient({
  retry_strategy: retryStrategyUndefined
});
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

const connected: boolean = client.connected;
const retry_delay: number | Error = client.retry_delay;
const retry_backoff: number = client.retry_backoff;
const command_queue: any[] = client.command_queue;
const offline_queue: any[] = client.offline_queue;
const info: redis.ServerInfo = client.server_info;

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

client.end(true);

// Connection (http://redis.io/commands#connection)
client.auth(str, resCallback);
client.ping(strCallback);
client.unref();

// Strings (http://redis.io/commands#strings)
client.append(str, str, numCallback);
client.bitcount(str, numCallback);
client.bitcount(str, num, num, numCallback);
client.bitfield(str, [str, str, str, num], numArrayCallback);
client.set(str, str, okCallback);
client.get(str, nullableStrCallback);
client.exists(str, numCallback);

// Event handlers
client.on(str, messageHandler);
client.once(str, messageHandler);

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

// set
client.set('key', 'value', resCallback);
client.set('key', 'value', 'NX', resCallback);
client.set('key', 'value', 'EX', 1000, resCallback);
client.set('key', 'value', 'NX', 'EX', 1000, resCallback);
client.set('key', 'value', 'EX', 1000, 'NX', resCallback);

// some of the bulk methods
client.get('test');
client.get('test', resCallback);
client.set('test', 'test');
client.set('test', 'test', okCallback);
client.mset(args, resCallback);

client.incr(str, resCallback);

// Test del and unlink with single and multiple parameters
client.del('test');
client.del('test', 'test2', 'test3');
client.unlink('test', 'test2', 'test3');
client.unlink('test');

// Test del and unlink with single and multiple parameters and a callback
client.del('test', numCallback);
client.unlink('test', numCallback);
client.del('test', 'test2', 'test3', numCallback);
client.unlink('test', 'test2', 'test3', numCallback);

// Friendlier hash commands
client.hgetall(str, resCallback);
// Deprecated commands
client.hmset(str, value, okCallback);
client.hmset(str, str, str, str, str, okCallback);
client.hmset([str, str, str, str, str], okCallback);
client.hmset([str, str, str, str, str]);
client.hmset(str, [str, str, str, str]);
client.hmset(str, [str, value, str, value], okCallback);
// Redis 4 variadic HSET
client.hset(str, value, numCallback);
client.hset(str, str, str, str, str, numCallback);
client.hset([str, str, str, str, str], numCallback);
client.hset([str, str, str, str, str]);
client.hset(str, [str, str, str, str]);
client.hset(str, [str, value, str, value], numCallback);

// Publish / Subscribe
client.publish(str, value);
client.subscribe(str);

// Multi
client.multi()
  .scard(str)
  .smembers(str)
  .keys('*', resCallback)
  .dbsize()
  .exec(resCallback);

client.multi([['get', 'test']]).exec();

// Monitor mode
client.monitor(resCallback);

// Send command
client.send_command(str, args, resCallback);
// Duplicate
client.duplicate();

// Pipeline
client.cork();
client.set('abc', 'fff', strCallback);
client.get('abc', resCallback);
client.uncork();

// Add command
client.add_command('my command');
client.addCommand('my other command');

// redis.print as callback
client.set(str, str, redis.print);
client.get(str, redis.print);

// increase-by-float reply a string
client.incrbyfloat('a', 1.5, (error, value) => value.startsWith('1'));
client.INCRBYFLOAT('a', 1.5, (error, value) => value.startsWith('1'));
client.hincrbyfloat('a', 'b', 1.5, (error, value) => value.startsWith('1'));
client.HINCRBYFLOAT('a', 'b', 1.5, (error, value) => value.startsWith('1'));
client.zincrby('a', 1, 'b', strCallback);
client.ZINCRBY('a', 1, 'b', strCallback);

client.flushdb(okCallback);
