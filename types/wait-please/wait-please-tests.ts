import { frame, idle, tick, time } from "wait-please";

tick(); // $ExpectType Promise<void>
tick(3); // $ExpectType Promise<void>
frame(); // $ExpectType Promise<void>
frame(3); // $ExpectType Promise<void>
time(); // $ExpectType Promise<void>
time(3); // $ExpectType Promise<void>
idle(); // $ExpectType Promise<void>
idle(3); // $ExpectType Promise<void>
