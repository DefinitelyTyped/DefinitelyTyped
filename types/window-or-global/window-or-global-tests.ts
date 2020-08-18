import * as root from "window-or-global";

if (Reflect.has(root, "location")) {
    // $ExpectType Location
    root.location;
} else if (Reflect.has(root, "process")) {
    // $ExpectType Process
    root.process;
}
