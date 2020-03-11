import { callbackToAsyncIterator } from "callback-to-async-iterator";

callbackToAsyncIterator(() => {}); // $ExpectType AsyncIterator<unknown, any, undefined>
