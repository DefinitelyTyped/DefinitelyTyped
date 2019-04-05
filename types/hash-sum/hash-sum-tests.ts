import sum = require("hash-sum");

sum(undefined);
sum(null);
sum({});
sum({ hello: "world" });
sum(100);
sum("");
sum(true);
