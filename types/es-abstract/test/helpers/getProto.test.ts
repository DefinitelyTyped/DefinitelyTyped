import $getProto = require('es-abstract/helpers/getProto');

const any: unknown = undefined;

if ($getProto) {
	$getProto(any); // $ExpectType any
}
