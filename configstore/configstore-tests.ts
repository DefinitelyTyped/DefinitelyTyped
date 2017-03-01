
import Configstore = require('configstore');
var cs = new Configstore('foo');

var value: any;
var key: string;
var num: number;
var bool: any;
var object: any;

cs.set(key, value);
value = cs.get(key);
cs.delete(key);

object = cs.all;
cs.all = object;
num = cs.size;
key = cs.path;
