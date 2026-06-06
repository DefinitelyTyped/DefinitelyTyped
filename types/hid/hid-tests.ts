import {
    enumerate,
    get_feature_report,
    get_feature_report_async,
    open,
    open_path,
    read,
    read_async,
    read_timeout,
    read_timeout_async,
    send_feature_report,
    set_nonblocking,
    write,
} from "hid";

enumerate(); // $ExpectType DeviceDescriptor[]

const device = open(100, 200); // $ExpectType OpaqueDevice

get_feature_report(device, Buffer.from([])); // $ExpectType number

get_feature_report_async(device, Buffer.from([]), () => {}); // $ExpectType void

open_path("foo"); // $ExpectType OpaqueDevice

read(device, Buffer.from([])); // $ExpectType number

read_async(device, Buffer.from([]), () => {}); // $ExpectType void

read_timeout(device, Buffer.from([]), 1000); // $ExpectType number

read_timeout_async(device, Buffer.from([]), 1000, () => {}); // $ExpectType void

send_feature_report(device, Buffer.from([])); // $ExpectType number

set_nonblocking(device, 1); // $ExpectType 0

write(device, Buffer.from([])); // $ExpectType number
