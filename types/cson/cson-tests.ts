import cson = require("cson");

let data: string = cson.stringify({ hello: "world" });

data = cson.createString({ hello: "world" });

data = cson.createJSONString({ hello: "world" });

data = cson.createCSONString({ hello: "world" });

let obj: any = cson.parse(data);

obj = cson.parseCSONString(data);

obj = cson.parseJSONString("{\"hello\": \"world\"}");

obj = cson.parseString("hello: 'world'");

obj = cson.load("cson-test.cson");

obj = cson.parseCSONFile("cson-test.cson");

obj = cson.parseJSONFile("cson-test.json");
