import { parse, safeParse, scan } from "secure-json-parse";

const reviverFunc = (_key: string, value: any) => typeof value === "number" ? value * 2 : value;

let result: any;
let tryResult = false;

const simpleJson = "{\"a\": 3, \"b\": 4}";
result = safeParse(simpleJson); // result === { a: 3, b: 4 }
result = safeParse(simpleJson, reviverFunc); // result === { a: 6, b: 8 }
result = parse(simpleJson); // result === { a: 3, b: 4 }
result = parse(simpleJson, reviverFunc); // result === { a: 6, b: 8 }
try {
	scan(JSON.parse(simpleJson));
	tryResult = true;
} catch (error) {
	tryResult = false;
} // tryResult === true;

const jsonWithProto = "{\"a\": 3, \"__proto__\": 4}";
result = safeParse(jsonWithProto); // result === null
result = safeParse(jsonWithProto, reviverFunc); // result === null
result = parse(jsonWithProto, undefined, { protoAction: "remove" }); // result === { a: 3 }
result = parse(jsonWithProto, reviverFunc, { protoAction: "remove" }); // result === { a: 6 }
try {
	scan(JSON.parse(jsonWithProto));
	tryResult = true;
} catch (error) {
	tryResult = false;
} // tryResult === false;

const jsonWithNestedProto = "{\"a\": {\"__proto__\": 3}}";
result = safeParse(jsonWithNestedProto); // result === null
result = safeParse(jsonWithNestedProto, reviverFunc); // result === null
result = parse(jsonWithNestedProto, undefined, { protoAction: "remove" }); // result === { a: {} }
result = parse(jsonWithNestedProto, reviverFunc, { protoAction: "remove" }); // result === { a: {} }
try {
	scan(JSON.parse(jsonWithNestedProto), { protoAction: "remove" });
	tryResult = true;
} catch (error) {
	tryResult = false;
} // tryResult === true;
