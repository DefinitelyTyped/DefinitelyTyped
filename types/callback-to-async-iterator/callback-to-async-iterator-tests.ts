import callbackToAsyncIterator from "callback-to-async-iterator";

callbackToAsyncIterator(async () => {}); // $ExpectType AsyncIterableIterator<unknown>

callbackToAsyncIterator<string>(async () => {}); // $ExpectType AsyncIterableIterator<string>

callbackToAsyncIterator<string>(async () => {}, { onClose() {} }); // $ExpectType AsyncIterableIterator<string>

callbackToAsyncIterator<string, number>(async () => 1, { onClose(arg: number) {} });  // $ExpectType AsyncIterableIterator<string>
