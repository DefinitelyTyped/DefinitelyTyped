import { SequenceMatcher } from "difflib";

const sequenceMatcher = new SequenceMatcher(
    null,
    ["first", "second"],
    ["third", "fourth"]
);

sequenceMatcher.getOpcodes();
