import stackMapper = require("stack-mapper");

var map: any = {};
var sm: stackMapper.StackMapper = stackMapper(map);
var input: stackMapper.Callsite[] = [{ filename: "boo", line: 1, column: 10 }];
var cs: stackMapper.Callsite[] = sm.map(input);
