
import umd = require("umd");

var res1: string = umd("name1", "return 123");

var res2: string = umd("name2", "return 'abc'", { commonJS: true });

var res3: string = umd.prelude("pre1", false);

var res4: string = umd.postlude("post1", true);

var res5: string = umd.prelude("pre2");

var res6: string = umd.postlude("post2");
