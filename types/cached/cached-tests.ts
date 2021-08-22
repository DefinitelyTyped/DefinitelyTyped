import * as cached from 'cached';

const userCache = cached<number>('usr', {backend: {type: 'memory'}});
const uuid = 'user_1';

// $ExpectType Promise<number>
userCache.getOrElse(uuid, () => 10, {expire: 1});
// $ExpectType Promise<number>
userCache.getOrElse(uuid, () => 10);
// $ExpectType Promise<void>
userCache.set(uuid, 9);

// $ExpectType Promise<number | null>
userCache.get(uuid);
// $ExpectType Promise<void>
userCache.unset(uuid);

userCache.setDefaults({expire: 10, freshFor: 10, timeout: 4});

const underlyingCache = cached.createCache({backend: {type: 'memory'}});
underlyingCache.set('a', 10);
