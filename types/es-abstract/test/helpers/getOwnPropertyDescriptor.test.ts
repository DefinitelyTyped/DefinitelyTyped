import getOwnPropertyDescriptor = require('es-abstract/helpers/getOwnPropertyDescriptor');

if (getOwnPropertyDescriptor) {
    getOwnPropertyDescriptor(Object, 'prototype'); // $ExpectType TypedPropertyDescriptor<Object> | undefined
}
