import * as Base64 from "slate-base64-serializer";
import { Slate } from "slate";

const val = Slate.Value.create();
const serialized = Base64.serialize(val);
const deserialized = Base64.deserialize(serialized);
