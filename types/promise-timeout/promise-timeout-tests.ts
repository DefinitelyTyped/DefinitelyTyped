import { timeout, TimeoutError } from "promise-timeout";

function acceptError(e: Error) { }

acceptError(new TimeoutError());

timeout();                       // $ExpectError
timeout(new Promise(() => { })); // $ExpectError

timeout(new Promise(() => { }), 1000); // $ExpectType Promise<{}>
