import pkgConf = require('pkg-conf');

pkgConf('name'); // $ExpectType Promise<JsonMap>
const config = pkgConf.sync('bugs'); // $ExpectType JsonMap
pkgConf.filepath(config); // $ExpectType string | null
config.url; // $ExpectType AnyJson
