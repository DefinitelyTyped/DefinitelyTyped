import schema from "protocol-buffers-schema";

const proto = `syntax = "proto2";

message Point {
  required int32 x = 1;
  required int32 y=2;
  optional string label = 3;
}

message Line {
  required Point start = 1;
  required Point end = 2;
  optional string label = 3;
}

message OptionFields {
  optional string type = 2 [mylist = "some,values,[here]"];
}

message MoreOptionFields {
  optional string values = 3 [mylist2 = '[more, values], [here]'];
}`;

// pass a buffer or string to schema.parse
const sch = schema.parse(proto);

// will print out the schema as a javascript object
console.log(sch);
