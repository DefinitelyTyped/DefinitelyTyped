import parseEnvString = require('parse-env-string');

// $ExpectType { [key: string]: string; }
parseEnvString(null);
// $ExpectType { [key: string]: string; }
parseEnvString(undefined);
// $ExpectType { [key: string]: string; }
parseEnvString('foo=hello bar= baz=", world"');
