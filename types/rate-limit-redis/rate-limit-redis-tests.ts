import { RedisClient } from 'redis';
import RedisStore from 'rate-limit-redis';
import { Store } from 'express-rate-limit';

let store: Store;

// $ExpectType Store
store = new RedisStore();

// $ExpectType Store
store = new RedisStore({
    expiry: 1000,
});

// $ExpectType Store
store = new RedisStore({
    prefix: 'types',
});

// $ExpectType Store
store = new RedisStore({
    resetExpiryOnChange: false,
});

// $ExpectType Store
store = new RedisStore({
    client: new RedisClient({}),
});
