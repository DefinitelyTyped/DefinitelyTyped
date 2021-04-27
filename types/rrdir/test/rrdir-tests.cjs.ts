import rrdir = require("rrdir");

rrdir("dir"); // $ExpectType Promise<entry[]>
rrdir.async("dir"); // $ExpectType Promise<entry[]>
rrdir.sync("dir"); // $ExpectType entry[]
