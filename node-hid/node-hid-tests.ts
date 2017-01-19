import HID = require('node-hid');

var devices = HID.devices()


var device = new HID.HID("path");

var device = new HID.HID(12, 22);

device.on("data", function (data) { });
device.on("error", function (err) { });

device.write([0x00, 0x01, 0x01, 0x05, 0xff, 0xff]);