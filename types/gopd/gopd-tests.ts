import getOwnPropertyDescriptor = require("gopd");

if (getOwnPropertyDescriptor) {
    getOwnPropertyDescriptor(Object, "prototype"); // $ExpectType TypedPropertyDescriptor<Object> | undefined
}
