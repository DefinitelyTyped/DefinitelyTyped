import * as wfl from "windows-foreground-love";

wfl.allowSetForegroundWindow(123); // $ExpectType boolean
wfl.allowSetForegroundWindow(); // $ExpectType boolean
