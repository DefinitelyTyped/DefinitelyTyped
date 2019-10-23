import ref = require("ref");
import StructType = require("ref-struct");

const normalStruct = StructType({
  t: ref.types.uint8,
  v: ref.types.long,
});

const packedStruct = StructType({
  t: ref.types.uint8,
  v: ref.types.long,
}, {packed: true});
