import protobufFielmask = require('protobuf-fieldmask');

const obj: Record<string, string> = {
    foo: 'bar',
};

protobufFielmask.applyFieldMask(obj, ['foo']); // $ExpectType WithFieldMask<Record<string, string>>

protobufFielmask.generateFieldMask(obj); // $ExpectType string[]
