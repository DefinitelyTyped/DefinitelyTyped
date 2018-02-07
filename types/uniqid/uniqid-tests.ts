import * as uniqid from "uniqid";

const uniqueID = uniqid("123");
const processString = uniqid.process("123");
const timeString = uniqid.time("123");

if (uniqueID === "" && processString === "" && timeString === "") { /**/ }
