import parse = require('parse-passwd');

const entries = parse('doowb:*:123:123:Brian Woodward:/Users/doowb:/bin/bash');
entries; // $ExpectType PasswdEntry[]

const entry = entries[0];

entry.username; // $ExpectType string
entry.password; // $ExpectType string
entry.uid; // $ExpectType string
entry.gid; // $ExpectType string
entry.gecos; // $ExpectType string
entry.homedir; // $ExpectType string
entry.shell; // $ExpectType string
