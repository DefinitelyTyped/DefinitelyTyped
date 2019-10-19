import $setProto = require('es-abstract/helpers/setProto');

const any: unknown = undefined;

$setProto(any, null);
$setProto(any, Object.prototype);

$setProto(any, 123); // $ExpectError
