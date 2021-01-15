import callbackToAsyncIterator from "callback-to-async-iterator";

callbackToAsyncIterator(async () => {}); // $ExpectType AsyncIterator<unknown, any, undefined>

callbackToAsyncIterator<string>(async () => {}); // $ExpectType AsyncIterator<string, any, undefined>

callbackToAsyncIterator<string>(async () => {}, { onClose() {} }); // $ExpectType AsyncIterator<string, any, undefined>

callbackToAsyncIterator<string, number>(async () => 1, { onClose(arg: number) {} });  // $ExpectType AsyncIterator<string, any, undefined>
