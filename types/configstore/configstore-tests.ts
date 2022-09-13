import Configstore from 'configstore';
const cs = new Configstore('foo');

let value = 'value';
let key = 'key';
let num: number;
let store: any;
let path: string;

cs.set(key, value);
value = cs.get(key);
cs.delete(key);

store = cs.all;
cs.all = store;
num = cs.size;
path = cs.path;

const csWithPathOption = new Configstore('foo', null, { configPath: path });

csWithPathOption.set(key, value);
value = csWithPathOption.get(key);
csWithPathOption.delete(key);

key = csWithPathOption.path;
