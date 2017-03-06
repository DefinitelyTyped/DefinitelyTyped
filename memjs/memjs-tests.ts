/**
 * Create Memcache Client
 */
import memjs from 'memjs';
const mc = memjs.Client.create('127.0.0.1:11211');

/**
 * Add to memcache
 */
mc.add('tests-string', 'string');
mc.add('tests-array', ['array']);

/**
 *
 */
mc.get('tests-string', (err, cached) => {
    console.log(cached);
})
mc.get('tests-array', (err, cached) => {
    console.log(cached);
})
