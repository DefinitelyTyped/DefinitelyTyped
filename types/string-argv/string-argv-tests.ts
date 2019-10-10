import parseArgsStringToArgv = require("string-argv");

const commandOnly = parseArgsStringToArgv("-test");  // $ExpectType string[]
const commandAndEnv = parseArgsStringToArgv("-test", "node");  // $ExpectType string[]
const commandEnvAndFile = parseArgsStringToArgv("-test", "node", "testing.js");  // $ExpectType string[]
