import ref = require("ref-napi");
import StructType = require("ref-struct-di");

const normalStruct = StructType({
  t: ref.types.uint8,
  v: ref.types.long,
});

const packedStruct = StructType({
  t: ref.types.uint8,
  v: ref.types.long,
}, {packed: true});
