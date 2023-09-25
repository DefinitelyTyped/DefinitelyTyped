import protobufFieldmask = require("protobuf-fieldmask");

const obj: Record<string, string> = {
    foo: "bar",
};

protobufFieldmask.applyFieldMask(obj, ["foo"]); // $ExpectType WithFieldMask<Record<string, string>>

protobufFieldmask.generateFieldMask(obj); // $ExpectType string[]
