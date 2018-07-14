import * as pkgConf from 'pkg-conf';

const options = { cwd: './fixture' };

pkgConf('pony', options); // $ExpectType Promise<JsonMap>
const config = pkgConf.sync('pony', options); // $ExpectType JsonMap
pkgConf.filepath(config); // $ExpectType string | null
config.foo; // $ExpectType AnyJson
config.baz; // $ExpectType AnyJson
