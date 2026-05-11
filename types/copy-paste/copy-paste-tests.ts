import * as CopyPaste from "copy-paste";
import * as CopyPastePromises from "copy-paste/promises";

class TestClass {}

let strRet: string = CopyPaste.copy("content");
strRet = CopyPaste.copy("content", (err: Error) => {
    return;
});

let objRet: TestClass = CopyPaste.copy(new TestClass());
objRet = CopyPaste.copy(new TestClass(), (err: Error) => {
    return;
});

strRet = CopyPaste.paste();
CopyPaste.paste((err: Error, content: string) => {
    return;
});

let promiseStrRet: Promise<string> = CopyPastePromises.copy("content");

let promiseObjRet: Promise<TestClass> = CopyPastePromises.copy.json(new TestClass());

promiseStrRet = CopyPastePromises.paste();
