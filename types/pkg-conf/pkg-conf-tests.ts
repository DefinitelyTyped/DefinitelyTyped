import * as pkgConf from 'pkg-conf';

pkgConf('pony'); // $ExpectType Promise<pkgConf.JsonMap>
const config = pkgConf.sync('pony'); // $ExpectType pkgConf.JsonMap
pkgConf.filepath(config); // $ExpectType string
config.foo; // $ExpectType string
config.baz; // $ExpectType number[]
