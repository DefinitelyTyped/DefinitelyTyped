import $getProto = require('es-abstract/helpers/getProto');

const any: unknown = undefined;

$getProto(any); // $ExpectType any
