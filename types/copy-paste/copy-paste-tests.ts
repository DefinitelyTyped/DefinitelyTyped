import * as CopyPaste from 'copy-paste';

class TestClass {}

let strRet: string  = CopyPaste.copy("content");
strRet = CopyPaste.copy("content", (err: Error) => { return; });


let objRet: TestClass  = CopyPaste.copy(new TestClass());
objRet = CopyPaste.copy(new TestClass(), (err: Error) => { return; });

strRet = CopyPaste.paste();
CopyPaste.paste((err: Error, content: string) => { return; });