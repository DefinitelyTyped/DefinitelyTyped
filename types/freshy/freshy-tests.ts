import { unload, reload, freshy } from 'freshy';
import minimist = require('minimist');

declare function require(x: string): any;

unload('minimist'); // $ExpectType boolean

const reloaded = reload('minimist'); // $ExpectType any
minimist === reloaded; // false

const freshlyLoaded = freshy('minimist'); // $ExpectType any
minimist === freshlyLoaded; // false

let alsofresh: any;
// $ExpectType any
const fresh = freshy('minimist', (fresh) => {
    alsofresh = require('minimist');
    fresh === alsofresh; // true
});
minimist === fresh; // false
fresh === alsofresh; // true
