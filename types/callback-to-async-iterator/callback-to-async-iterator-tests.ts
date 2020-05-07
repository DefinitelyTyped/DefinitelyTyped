import { callbackToAsyncIterator } from "callback-to-async-iterator";

callbackToAsyncIterator(() => {}); // $ExpectType AsyncIterator<unknown, any, undefined>

callbackToAsyncIterator<string>(() => {}); // $ExpectType AsyncIterator<string, any, undefined>
