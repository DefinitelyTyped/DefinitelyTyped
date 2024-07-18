import { Value } from "slate";
import Plain from "slate-plain-serializer";

const val = Value.create();
const serialized = Plain.serialize(val);
const deserialized = Plain.deserialize(serialized);
