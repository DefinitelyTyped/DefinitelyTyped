import Configstore = require('configstore');
const cs = new Configstore('foo');

let value: any;
let key: string;
let num: number;
let object: any;

cs.set(key, value);
value = cs.get(key);
cs.delete(key);

object = cs.all;
cs.all = object;
num = cs.size;
key = cs.path;
