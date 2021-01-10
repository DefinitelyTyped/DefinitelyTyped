import * as cached from 'cached';

const userCache = cached('usr', {backend: {type: 'memory'}});
const uuid = 'user_1';

// $ExpectType Promise<number>
userCache.getOrElse(uuid, () => 10, {expire: 1});
// $ExpectType Promise<number>
userCache.getOrElse(uuid, () => 10);
// $ExpectType Promise<number>
userCache.set(uuid, 9);

userCache.get(uuid);
userCache.unset(uuid);

userCache.setDefaults({expire: 10, freshFor: 10, timeout: 4});

const underlyingCache = cached.createCache({backend: {type: 'memory'}});
underlyingCache.set('a', 10);
