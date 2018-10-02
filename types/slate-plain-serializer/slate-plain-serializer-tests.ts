import Plain from "slate-plain-serializer";
import { Value } from "slate";

const val = Value.create();
const serialized = Plain.serialize(val);
const deserialized = Plain.deserialize(serialized);
