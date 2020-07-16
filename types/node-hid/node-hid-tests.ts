import HID = require('node-hid');

const devices = HID.devices();

let device = new HID.HID('path');

device = new HID.HID(12, 22);
device.setNonBlocking(true);

device.on('data', data => {});
device.once('data', data => {});
device.on('error', err => {});

device.write([0x00, 0x01, 0x01, 0x05, 0xff, 0xff]);
device.write(Buffer.from([0x00, 0x01, 0x01, 0x05, 0xff, 0xff]));

device.sendFeatureReport([0x00, 0x01, 0x01, 0x05, 0xff, 0xff]);
device.sendFeatureReport(Buffer.from([0x00, 0x01, 0x01, 0x05, 0xff, 0xff]));

device.pause();
device.resume();

device.removeListener('data', data => {});
device.removeAllListeners('data');
device.close();
