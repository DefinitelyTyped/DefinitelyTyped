import * as Plain from "slate-plain-serializer";
import { Slate } from "slate";

const val = Slate.Value.create();
const serialized = Plain.serialize(val);
const deserialized = Plain.deserialize(serialized);
