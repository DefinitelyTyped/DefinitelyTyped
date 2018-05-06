import { unload, reload, freshy } from 'freshy';
import minimist = require('minimist');

declare function require(x: string): any;

unload('minimist'); // $ExpectType boolean

const reloaded = reload('minimist'); // $ExpectType any
// $ExpectType boolean
minimist === reloaded; // false

const freshlyLoaded = freshy('minimist'); // $ExpectType any
// $ExpectType boolean
minimist === freshlyLoaded; // false

let alsofresh: any;
// $ExpectType any
const fresh = freshy('minimist', (fresh) => {
    alsofresh = require('minimist');

    // $ExpectType boolean
    fresh === alsofresh; // true
});
// $ExpectType boolean
minimist === fresh; // false
// $ExpectType boolean
fresh === alsofresh; // true
