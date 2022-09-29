import * as wifi from 'Wifi';

wifi.connect('ssid', { password: 'pass', authMode: 'wpa_wpa2' }, err => {
    if (err) throw err;
    console.log('connected');
});

wifi.startAP('ssid', { password: 'pass', authMode: 'wpa_wpa2' }, err => {
    if (err) throw err;
    console.log("created");
});

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
            readable: true,   // optional, default is false
            writable: true,   // optional, default is false
            notify: true,   // optional, default is false
            indicate: true,   // optional, default is false
            description: "My Characteristic",  // optional, default is null,
            security: { // optional - see NRF.setSecurity
                read: { // optional
                    encrypted: false, // optional, default is false
                    mitm: false, // optional, default is false
                    lesc: false, // optional, default is false
                    signed: false // optional, default is false
                },
                write: { // optional
                    encrypted: true, // optional, default is false
                    mitm: false, // optional, default is false
                    lesc: false, // optional, default is false
                    signed: false // optional, default is false
                }
            },
            onWrite: evt => {
                console.log("Got ", evt.data); // an ArrayBuffer
            }
        }
        // more characteristics allowed
    }
    // more services allowed
});

NRF.setServices({
    0x180D: { // heart_rate
        0x2A37: { // heart_rate_measurement
            notify: true,
            value: [0x06],
        }
    }
}, { advertise: ['180D'] });

NRF.setScanResponse([0x07,  // Length of Data
    0x09,  // Param: Complete Local Name
    'S', 'a', 'm', 'p', 'l', 'e']);

NRF.requestDevice({ filters: [{ name: 'Puck.js abcd' }] }).then(device => {
    console.log("found device");
    return device.gatt.connect({});
});

NRF.setAdvertising({
    0x180F: [95]
});

NRF.setAdvertising([0x03,  // Length of Service List
    0x03,  // Param: Service List
    0xAA, 0xFE,  // Eddystone ID
    0x13,  // Length of Service Data
    0x16,  // Service Data
    0xAA, 0xFE, // Eddystone ID
    0x10,  // Frame type: URL
    0xF8, // Power
    0x03, // https://
    'g', 'o', 'o', '.', 'g', 'l', '/', 'B', '3', 'J', '0', 'O', 'c'],
    { interval: 100 });

NRF.on('connect', addr => console.log(addr));
