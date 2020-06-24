import $getProto = require('es-abstract/helpers/getProto');

declare const any: unknown;

if ($getProto) {
    $getProto(any); // $ExpectType any
}
