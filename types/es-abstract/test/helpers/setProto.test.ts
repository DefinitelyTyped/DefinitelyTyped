import $setProto = require('es-abstract/helpers/setProto');

declare const any: unknown;

if ($setProto) {
    $setProto(any, null);
    $setProto(any, Object.prototype);

    $setProto(any, 123); // $ExpectError
}
