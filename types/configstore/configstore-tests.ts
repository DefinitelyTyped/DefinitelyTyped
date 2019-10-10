import Configstore = require('configstore');
const cs = new Configstore('foo');

let value: any;
let key: string;
let num: number;
let object: any;
let path: string;

cs.set(key, value);
value = cs.get(key);
cs.delete(key);

object = cs.all;
cs.all = object;
num = cs.size;
path = cs.path;

const csWithPathOption = new Configstore('foo', null, { configPath: path });

csWithPathOption.set(key, value);
value = csWithPathOption.get(key);
csWithPathOption.delete(key);

key = csWithPathOption.path;
