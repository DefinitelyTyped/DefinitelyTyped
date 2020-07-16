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
