import { OneWire } from 'raspi-onewire';

const oneWire = new OneWire();

oneWire.searchForDevices((err, devices) => {});
oneWire.read([ 1, 2 ], 1, (err, data) => {});
oneWire.readAllAvailable([ 1, 2 ], (err, data) => {});
