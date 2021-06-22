import uniqid = require("uniqid");

// $ExpectType string
const uniqueID = uniqid();
const processString = uniqid.process();
const timeString = uniqid.time();

const uniqueIDPrefix = uniqid("123");
const processStringPrefix = uniqid.process("123");
const timeStringPrefix = uniqid.time("123");

const uniqueIDSuffix = uniqid(undefined, "123");
const processStringSuffix = uniqid.process(undefined, "123");
const timeStringSuffix = uniqid.time(undefined, "123");

const uniqueIDPrefixSuffix = uniqid("123", "456");
const processStringPrefixSuffix = uniqid.process("123", "456");
const timeStringPrefixSuffix = uniqid.time("123", "456");
