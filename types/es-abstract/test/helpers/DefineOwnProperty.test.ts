import { FromPropertyDescriptor, IsDataDescriptor, SameValue } from "es-abstract";
import DefineOwnProperty = require("es-abstract/helpers/DefineOwnProperty");

DefineOwnProperty(
    IsDataDescriptor,
    SameValue,
    FromPropertyDescriptor,
    {},
    "foo",
    {
        "[[Configurable]]": true,
        "[[Enumerable]]": true,
        "[[Writable]]": true,
        "[[Value]]": "bar",
    },
);
