import * as Base64 from "slate-base64-serializer";
import { Value } from "slate";

const val = Value.create();
const serialized = Base64.serialize(val);
const deserialized = Base64.deserialize(serialized);
