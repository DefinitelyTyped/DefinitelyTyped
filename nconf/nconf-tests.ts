/// <reference path="nconf.d.ts" />

import nconf = require('nconf');

var value: any;
var num: number;
var bool: boolean;
var valueArr: any[];
var str: string;
var strArr: string[];
var p: nconf.Provider;
var opts: nconf.IOptions;
var fopts: nconf.IFileOptions;
var store: nconf.IStore;
var callback: (err: Error) => void;

value = nconf.clear(str, callback);
value = nconf.get (str, callback);
value = nconf.merge(str, value, callback);
value = nconf.set (str, value, callback);
value = nconf.reset(callback);

value = nconf.load(callback);
nconf.mergeSources(value);
value = nconf.loadSources();
value = nconf.save(value, callback);

p = nconf.add(str);
p = nconf.add(str, opts);;

p = nconf.argv();
p = nconf.argv(opts);

p = nconf.env();
p = nconf.env(opts);

p = nconf.file(str);
p = nconf.file(str, fopts);
p = nconf.file(fopts);

p = nconf.use(str);
p = nconf.use(str, opts);

p = nconf.defaults();
p = nconf.defaults(opts);

nconf.init();
nconf.init(opts);

p = nconf.overrides();
p = nconf.overrides(opts);
nconf.remove(str);
store = nconf.create(str, opts);

str = nconf.key(value, value);
valueArr = nconf.path(value);
nconf.loadFiles(value, callback);
nconf.loadFilesSync(value, callback);

// - - - - - - - - - - - - - - - - - - - - - - - - -

str = store.type;
value = store.get(str);
bool = store.set(str, value);
bool = store.clear(str);
bool = store.merge(str, value);
bool = store.reset(callback);

// - - - - - - - - - - - - - - - - - - - - - - - - -

p = new nconf.Provider(opts);
value = p.stores;
valueArr = p.sources;

value = p.clear(str, callback);
value = p.get(str, callback);
value = p.merge(str,value,callback);
value = p.set(str,value,callback);
value = p.reset(callback);

value = p.load(callback);
p.mergeSources(value);
value = p.loadSources();
value = p.save(value, callback);

p = p.add(str);
p = p.add(str, opts);
p = p.argv();
p = p.argv(opts);
p = p.env();
p = p.env(opts);
p = p.file(str);
p = p.file(str, fopts);
p = p.file(fopts);
p = p.use(str, opts);

p = p.defaults(opts);
p.init(opts);
p = p.overrides(opts);
p.remove(str);
store = p.create(str, opts);
