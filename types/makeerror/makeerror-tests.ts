import makeError = require("makeerror");

makeError("MyError"); // $ExpectType CustomErrorConstructor<DefaultData>
const myError = makeError("MyError"); // $ExpectType CustomErrorConstructor<DefaultData>
myError(); // $ExpectType CustomError<DefaultData>
myError().data; // $ExpectType DataObject<DefaultData>
myError().fileName; // $ExpectType string | undefined
myError().lineNumber; // $ExpectType number | undefined
myError().message; // $ExpectType string
myError().name; // $ExpectType string
myError().stack; // $ExpectType string | undefined
myError().toString(); // $ExpectType string
new myError(); // $ExpectType CustomError<DefaultData>
new myError().data; // $ExpectType DataObject<DefaultData>
new myError().fileName; // $ExpectType string | undefined
new myError().lineNumber; // $ExpectType number | undefined
new myError().message; // $ExpectType string
new myError().name; // $ExpectType string
new myError().stack; // $ExpectType string | undefined
new myError().toString(); // $ExpectType string

myError("message"); // $ExpectType CustomError<DefaultData>
myError("message").data; // $ExpectType DataObject<DefaultData>
new myError("message"); // $ExpectType CustomError<DefaultData>
new myError("message").data; // $ExpectType DataObject<DefaultData>

myError({ answer: 42 }); // $ExpectType CustomError<{ answer: number; }>
myError({ answer: 42 }).data; // $ExpectType DataObject<{ answer: number; }>
myError({ answer: 42 }).data.answer; // $ExpectType number
new myError({ answer: 42 }); // $ExpectType CustomError<{ answer: number; }>
new myError({ answer: 42 }).data; // $ExpectType DataObject<{ answer: number; }>
new myError({ answer: 42 }).data.answer; // $ExpectType number

myError("message", { answer: 42 }); // $ExpectType CustomError<{ answer: number; }>
myError("message", { answer: 42 }).data; // $ExpectType DataObject<{ answer: number; }>
myError("message", { answer: 42 }).data.answer; // $ExpectType number
new myError("message", { answer: 42 }); // $ExpectType CustomError<{ answer: number; }>
new myError("message", { answer: 42 }).data; // $ExpectType DataObject<{ answer: number; }>
new myError("message", { answer: 42 }).data.answer; // $ExpectType number

myError({ aaa: "aaa" }, { bbb: "bbb" }); // $ExpectType CustomError<{ bbb: string; }>
myError({ aaa: "aaa" }, { bbb: "bbb" }).data; // $ExpectType DataObject<{ bbb: string; }>
myError({ aaa: "aaa" }, { bbb: "bbb" }).data.bbb; // $ExpectType string
// @ts-expect-error
myError({ aaa: "aaa" }, { bbb: "bbb" }).data.aaa;
new myError({ aaa: "aaa" }, { bbb: "bbb" }); // $ExpectType CustomError<{ bbb: string; }>
new myError({ aaa: "aaa" }, { bbb: "bbb" }).data; // $ExpectType DataObject<{ bbb: string; }>
new myError({ aaa: "aaa" }, { bbb: "bbb" }).data.bbb; // $ExpectType string
// @ts-expect-error
new myError({ aaa: "aaa" }, { bbb: "bbb" }).data.aaa;

// @ts-expect-error
myError("message", "message");
// @ts-expect-error
new myError("message", "message");

makeError("MyError", "abc"); // $ExpectType CustomErrorConstructor<DefaultData>
const myErrorDefaultMessage = makeError("MyError", "abc"); // $ExpectType CustomErrorConstructor<DefaultData>
myErrorDefaultMessage(); // $ExpectType CustomError<DefaultData>
myErrorDefaultMessage().data; // $ExpectType DataObject<DefaultData>
new myErrorDefaultMessage(); // $ExpectType CustomError<DefaultData>
new myErrorDefaultMessage().data; // $ExpectType DataObject<DefaultData>

makeError("MyError", "abc", { answer: 42 }); // $ExpectType CustomErrorConstructor<{ answer: number; }>
const myErrorDefaultMessageDefaultData = makeError("MyError", "abc", { answer: 42 }); // $ExpectType CustomErrorConstructor<{ answer: number; }>
myErrorDefaultMessageDefaultData(); // $ExpectType CustomError<{ answer: number; }>
myErrorDefaultMessageDefaultData().data; // $ExpectType DataObject<{ answer: number; }>
myErrorDefaultMessageDefaultData().data.answer; // $ExpectType number
new myErrorDefaultMessageDefaultData(); // $ExpectType CustomError<{ answer: number; }>
new myErrorDefaultMessageDefaultData().data; // $ExpectType DataObject<{ answer: number; }>
new myErrorDefaultMessageDefaultData().data.answer; // $ExpectType number

myErrorDefaultMessageDefaultData("message"); // $ExpectType CustomError<{ answer: number; }>
myErrorDefaultMessageDefaultData("message").data; // $ExpectType DataObject<{ answer: number; }>
myErrorDefaultMessageDefaultData().data.answer; // $ExpectType number
new myErrorDefaultMessageDefaultData("message"); // $ExpectType CustomError<{ answer: number; }>
new myErrorDefaultMessageDefaultData("message").data; // $ExpectType DataObject<{ answer: number; }>
new myErrorDefaultMessageDefaultData().data.answer; // $ExpectType number

myErrorDefaultMessageDefaultData({ aaa: "aaa" }); // $ExpectType CustomError<{ aaa: string; }>
myErrorDefaultMessageDefaultData({ aaa: "aaa" }).data; // $ExpectType DataObject<{ aaa: string; }>
myErrorDefaultMessageDefaultData({ aaa: "aaa" }).data.aaa; // $ExpectType string
new myErrorDefaultMessageDefaultData({ aaa: "aaa" }); // $ExpectType CustomError<{ aaa: string; }>
new myErrorDefaultMessageDefaultData({ aaa: "aaa" }).data; // $ExpectType DataObject<{ aaa: string; }>
new myErrorDefaultMessageDefaultData({ aaa: "aaa" }).data.aaa; // $ExpectType string

myErrorDefaultMessageDefaultData("message", { aaa: "aaa" }); // $ExpectType CustomError<{ aaa: string; }>
myErrorDefaultMessageDefaultData("message", { aaa: "aaa" }).data; // $ExpectType DataObject<{ aaa: string; }>
myErrorDefaultMessageDefaultData("message", { aaa: "aaa" }).data.aaa; // $ExpectType string
new myErrorDefaultMessageDefaultData("message", { aaa: "aaa" }); // $ExpectType CustomError<{ aaa: string; }>
new myErrorDefaultMessageDefaultData("message", { aaa: "aaa" }).data; // $ExpectType DataObject<{ aaa: string; }>
new myErrorDefaultMessageDefaultData("message", { aaa: "aaa" }).data.aaa; // $ExpectType string

myErrorDefaultMessageDefaultData({ aaa: "aaa" }, { bbb: "bbb" }); // $ExpectType CustomError<{ bbb: string; }>
myErrorDefaultMessageDefaultData({ aaa: "aaa" }, { bbb: "bbb" }).data; // $ExpectType DataObject<{ bbb: string; }>
myErrorDefaultMessageDefaultData({ aaa: "aaa" }, { bbb: "bbb" }).data.bbb; // $ExpectType string
// @ts-expect-error
myErrorDefaultMessageDefaultData({ aaa: "aaa" }, { bbb: "bbb" }).data.aaa;
new myErrorDefaultMessageDefaultData({ aaa: "aaa" }, { bbb: "bbb" }); // $ExpectType CustomError<{ bbb: string; }>
new myErrorDefaultMessageDefaultData({ aaa: "aaa" }, { bbb: "bbb" }).data; // $ExpectType DataObject<{ bbb: string; }>
new myErrorDefaultMessageDefaultData({ aaa: "aaa" }, { bbb: "bbb" }).data.bbb; // $ExpectType string
// @ts-expect-error
new myErrorDefaultMessageDefaultData({ aaa: "aaa" }, { bbb: "bbb" }).data.aaa;

makeError("MyError", "abc", { answer: 42, proto: myErrorDefaultMessageDefaultData() }); // $ExpectType CustomErrorConstructor<{ answer: number; proto: CustomError<Record<string, unknown>>; }>
const myErrorProto = makeError("MyError", "abc", { answer: 42, proto: myErrorDefaultMessageDefaultData() }); // $ExpectType CustomErrorConstructor<{ answer: number; proto: CustomError<Record<string, unknown>>; }>
myErrorProto(); // $ExpectType CustomError<{ answer: number; proto: CustomError<Record<string, unknown>>; }>
myErrorProto().data; // $ExpectType DataObject<{ answer: number; proto: CustomError<Record<string, unknown>>; }>
myErrorProto().data.answer; // $ExpectType number
new myErrorProto(); // $ExpectType CustomError<{ answer: number; proto: CustomError<Record<string, unknown>>; }>
new myErrorProto().data; // $ExpectType DataObject<{ answer: number; proto: CustomError<Record<string, unknown>>; }>
new myErrorProto().data.answer; // $ExpectType number
// @ts-expect-error
myErrorProto().data.proto;
// @ts-expect-error
new myErrorProto().data.proto;

// @ts-expect-error
makeError("MyError", "abc", { answer: 42, proto: myError });
// @ts-expect-error
makeError("MyError", "abc", { answer: 42, proto: {} });

const myErrorVal: makeError.CustomErrorConstructor<{}> = makeError("MyError"); // $ExpectType CustomErrorConstructor<{}>
myErrorVal(); // $ExpectType CustomError<{}>
myErrorVal("abc", { answer: 42 }); // $ExpectType CustomError<{ answer: number; }>
new myErrorVal(); // $ExpectType CustomError<{}>
new myErrorVal("abc", { answer: 42 }); // $ExpectType CustomError<{ answer: number; }>

// $ExpectType CustomErrorConstructor<{ answer: number; }>
const myErrorValDefaultMessageDefaultData: makeError.CustomErrorConstructor<{ answer: number }> = makeError(
    "MyError",
    "abc",
    { answer: 42 },
);
myErrorValDefaultMessageDefaultData(); // $ExpectType CustomError<{ answer: number; }>
myErrorValDefaultMessageDefaultData().data; // $ExpectType DataObject<{ answer: number; }>
new myErrorValDefaultMessageDefaultData(); // $ExpectType CustomError<{ answer: number; }>
new myErrorValDefaultMessageDefaultData().data; // $ExpectType DataObject<{ answer: number; }>

const CutomError: makeError.CustomError<{}> = myErrorVal(); // $ExpectType CustomError<{}>
CutomError.data; // $ExpectType DataObject<{}>
const CutomErrorNew: makeError.CustomError<{}> = new myErrorVal(); // $ExpectType CustomError<{}>
CutomErrorNew.data; // $ExpectType DataObject<{}>

const data = { answer: 42 };
const CustomErrorData: makeError.CustomError<typeof data> = myErrorVal("abc", data); // $ExpectType CustomError<{ answer: number; }>
CustomErrorData.data; // $ExpectType DataObject<{ answer: number; }>
CustomErrorData.data.answer; // $ExpectType number
const CustomErrorDataNew: makeError.CustomError<typeof data> = new myErrorVal("abc", data); // $ExpectType CustomError<{ answer: number; }>
CustomErrorDataNew.data; // $ExpectType DataObject<{ answer: number; }>
CustomErrorDataNew.data.answer; // $ExpectType number

const defaultData: makeError.DefaultData = { answer: 42, proto: myError() };
makeError("MyError", "abc", defaultData); // $ExpectType CustomErrorConstructor<DefaultData>
