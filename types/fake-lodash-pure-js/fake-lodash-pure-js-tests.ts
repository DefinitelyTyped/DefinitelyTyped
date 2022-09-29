import * as _ from 'fake-lodash-pure-js';

// $ExpectType number | undefined
_.head<number>([1, 2]);

// $ExpectType number | undefined
_.tail<number>([1, 2]);

// $ExpectType boolean
_.isArray([]);
