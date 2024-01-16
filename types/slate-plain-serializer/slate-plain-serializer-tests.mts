import { Value } from "slate";
import Plain from "slate-plain-serializer";
// eslint-disable-next-line no-duplicate-imports -- test differently named namespace import
import plain from "slate-plain-serializer";

const val = Value.create();
const serialized = Plain.serialize(val);
const deserialized = Plain.deserialize(serialized);

const options: plain.DeserializeOptions = {};
