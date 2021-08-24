import {
    deviceList,
    brandList,
    getDevicesByBrand,
    getDevicesByDeviceId,
    getDevicesByModel,
    getDevicesByName,
} from "android-device-list";

deviceList(); // $ExpectType Device[]
brandList(); // $ExpectType string[]
getDevicesByBrand("LG"); // $ExpectType Device[]
getDevicesByBrand("LG", {}); // $ExpectType Device[]
// $ExpectType Device[]
getDevicesByBrand("LG", {
    caseInsensitive: true,
    contains: true,
});
getDevicesByDeviceId("deviceId"); // $ExpectType Device[]
getDevicesByModel("model", {}); // $ExpectType Device[]
// $ExpectType Device[]
getDevicesByName("model", {
    caseInsensitive: true,
});
