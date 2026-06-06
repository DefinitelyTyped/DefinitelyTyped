import * as wifi from "Wifi";

// minimum
wifi.connect("Test", {});

wifi.connect("Test", {
    password: "Test1234",
    authMode: "wpa_wpa2",
    channel: 6,
    bssid: "aa:bb:cc:dd:ee:ff",
    dnsServers: ["8.8.8.8", "1.1.1.1"],
});

wifi.connect("Test", { password: "pw" }, err => {
    if (err === null) {
        console.log("connected");
    } else {
        const reason: string = err;
        console.log("failed:", reason);
    }
});

// test all types of auth
(["open", "wpa", "wpa2", "wpa_wpa2"] as const).forEach(authMode => {
    wifi.connect("Test", { authMode });
});

// @ts-expect-error -- "wep" is not a valid WifiAuth
wifi.connect("Test", { authMode: "wep" });

// @ts-expect-error -- ssid must be a string
wifi.connect(12345, {});

// @ts-expect-error -- options is required (not optional in current d.ts)
wifi.connect("Test");

// ALLOWED
wifi.connect("Test", { dnsServers: ["8.8.8.8", "1.1.1.1"] });

// @ts-expect-error -- dnsServers is a 2-tuple, not a 3-tuple
wifi.connect("Test", { dnsServers: ["8.8.8.8", "1.1.1.1", "9.9.9.9"] });

// @ts-expect-error -- unknown option
wifi.connect("Test", { encryption: "wpa2" });

// @ts-expect-error -- callback err parameter is string|null, not Error
wifi.connect("Test", {}, (err: Error | null) => {});

// AP STUFF
wifi.startAP("Test", {
    password: "Test1234",
    authMode: "wpa_wpa2",
    channel: 11,
    hidden: true,
}, err => {
    if (err) throw err;
    console.log("AP up");
});
wifi.stopAP(() => {});

// minimum
wifi.startAP("MyAP", {}, () => {});
wifi.stopAP(() => {});

// @ts-expect-error -- callback is required
wifi.startAP("MyAP", { password: "pw" });

// @ts-expect-error -- hidden must be boolean
wifi.startAP("MyAP", { hidden: "yes" }, () => {});

// @ts-expect-error -- channel must be number
wifi.startAP("MyAP", { channel: "6" }, () => {});

wifi.disconnect(() => {
    console.log("disconnected");
});

// @ts-expect-error -- callback is required
wifi.disconnect();

// @ts-expect-error -- callback takes no arguments
wifi.disconnect((err: string) => {});

digitalWrite(D2, false);
digitalWrite(D2, true);

I2C1.setup({ scl: D4, sda: D0 });
Serial2.setup(9600, { rx: D16, tx: D17 });

NRF.setServices({
    0xBCDE: {
        0xABCD: {
            value: "Hello", // optional
            maxLen: 5, // optional (otherwise is length of initial value)
            broadcast: false, // optional, default is false
            readable: true, // optional, default is false
            writable: true, // optional, default is false
            notify: true, // optional, default is false
            indicate: true, // optional, default is false
            description: "My Characteristic", // optional, default is null,
            security: { // optional - see NRF.setSecurity
                read: { // optional
                    encrypted: false, // optional, default is false
                    mitm: false, // optional, default is false
                    lesc: false, // optional, default is false
                    signed: false, // optional, default is false
                },
                write: { // optional
                    encrypted: true, // optional, default is false
                    mitm: false, // optional, default is false
                    lesc: false, // optional, default is false
                    signed: false, // optional, default is false
                },
            },
            onWrite: evt => {
                console.log("Got ", evt.data); // an ArrayBuffer
            },
        },
        // more characteristics allowed
    },
    // more services allowed
});

NRF.setServices({
    0x180D: { // heart_rate
        0x2A37: { // heart_rate_measurement
            notify: true,
            value: [0x06],
        },
    },
}, { advertise: ["180D"] });

NRF.setScanResponse([
    0x07, // Length of Data
    0x09, // Param: Complete Local Name
    "S",
    "a",
    "m",
    "p",
    "l",
    "e",
]);

NRF.requestDevice({ filters: [{ name: "Puck.js abcd" }] }).then(device => {
    console.log("found device");
    return device.gatt.connect({});
});

NRF.setAdvertising({
    0x180F: [95],
});

NRF.setAdvertising([
    0x03, // Length of Service List
    0x03, // Param: Service List
    0xAA,
    0xFE, // Eddystone ID
    0x13, // Length of Service Data
    0x16, // Service Data
    0xAA,
    0xFE, // Eddystone ID
    0x10, // Frame type: URL
    0xF8, // Power
    0x03, // https://
    "g",
    "o",
    "o",
    ".",
    "g",
    "l",
    "/",
    "B",
    "3",
    "J",
    "0",
    "O",
    "c",
], { interval: 100 });

NRF.on("connect", addr => console.log(addr));
