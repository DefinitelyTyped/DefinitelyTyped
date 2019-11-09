import $setProto = require('es-abstract/helpers/setProto');

const any: unknown = undefined;

if ($setProto) {
	$setProto(any, null);
	$setProto(any, Object.prototype);

	$setProto(any, 123); // $ExpectError
}
