import { abortRetryIgnore, ok, okCancel } from "mitsobox";
// eslint-disable-next-line no-duplicate-imports
import * as mitsobox from "mitsobox";

// member import tests
ok("test - ok", "a test messageBox"); // $ExpectType Promise<void>
okCancel("test - okCancel", "a test messageBox"); // $ExpectType Promise<"OK" | "CANCEL">
abortRetryIgnore("test - abortRetryIgnore", "a test messageBox"); // $ExpectType Promise<"ABORT" | "RETRY" | "IGNORE">

// module import tests
mitsobox.ok("test - ok", "a test messageBox"); // $ExpectType Promise<void>
mitsobox.okCancel("test - okCancel", "a test messageBox"); // $ExpectType Promise<"OK" | "CANCEL">
mitsobox.abortRetryIgnore("test - abortRetryIgnore", "a test messageBox"); // $ExpectType Promise<"ABORT" | "RETRY" | "IGNORE">
