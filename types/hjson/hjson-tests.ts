import hjson = require('hjson');

let deserializedObj: any;
let deserializeOptions: hjson.DeserializeOptions;
let serializedObj: string;
let serializeOptions: hjson.SerializeOptions;

deserializeOptions = {};
serializeOptions = {};

deserializedObj = hjson.parse('foo');
deserializedObj = hjson.parse('foo', deserializeOptions);

serializedObj = hjson.stringify({ foo: 'bar' });
serializedObj = hjson.stringify({ foo: 'bar' }, serializeOptions);
