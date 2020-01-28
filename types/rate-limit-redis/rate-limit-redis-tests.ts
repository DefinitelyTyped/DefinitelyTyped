import { RedisClient } from 'redis';
import RedisStore from 'rate-limit-redis';
import { Store } from 'express-rate-limit';

let store: Store;

// $ExpectType Store
store = RedisStore();

// $ExpectType Store
store = RedisStore({
    expiry: 1000,
});

// $ExpectType Store
store = RedisStore({
    prefix: 'types',
});

// $ExpectType Store
store = RedisStore({
    resetExpiryOnChange: false,
});

// $ExpectType Store
store = RedisStore({
    client: new RedisClient({}),
});
