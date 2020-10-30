
import noble = require("noble");

function test_startScanning(): void {
    "use strict";
    noble.startScanning();
    noble.startScanning((err) => {});
    noble.startScanning(["0x180d"]);
    noble.startScanning(["0x180d"], (err) => {});
    noble.startScanning(["0x180d"], true);
    noble.startScanning(["0x180d"], true, (err) => {});
}
test_startScanning();

function test_stopScanning(): void {
    "use strict";
    noble.stopScanning();
    noble.stopScanning(() => {});
}
test_stopScanning();

noble.on("stateChange", (state: string): void => {});
noble.on("scanStart", (): void => {});
noble.on("scanStop", (): void => {});
noble.on("discover", (peripheral: noble.Peripheral): void => {
    peripheral.connect((error: string): void => {});
    peripheral.disconnect((): void => {});
});

noble.once("stateChange", (state: string): void => {});
noble.once("scanStart", (): void => {});
noble.once("scanStop", (): void => {});
noble.once("discover", (peripheral: noble.Peripheral): void => {
    peripheral.connect((error: string): void => {});
    peripheral.disconnect((): void => {});
});

noble.removeListener("stateChange", (state: string): void => {});
noble.removeListener("scanStart", (): void => {});
noble.removeListener("scanStop", (): void => {});
noble.removeListener("discover", (peripheral: noble.Peripheral): void => {
    peripheral.connect((error: string): void => {});
    peripheral.disconnect((): void => {});
});

noble.removeAllListeners("stateChange");
noble.removeAllListeners("scanStart");
noble.removeAllListeners("scanStop");
noble.removeAllListeners("discover");
noble.removeAllListeners();

var peripheral: noble.Peripheral = new noble.Peripheral();
peripheral.uuid = "12ad4e81";
peripheral.advertisement = {
    localName:        "device",
    serviceData:      [{
        uuid: "180a",
        data: new Buffer(1)
    }],
    txPowerLevel:     1,
    manufacturerData: new Buffer(1),
    serviceUuids:     ["0x180a", "0x180d"]
};
peripheral.connect();
peripheral.connect((error: string): void => {});
peripheral.disconnect();
peripheral.disconnect((): void => {});
peripheral.updateRssi();
peripheral.updateRssi((error: string, rssi: number): void => {});
peripheral.discoverServices(["180d"]);
peripheral.discoverServices(["180d"], (error: string, services: noble.Service[]): void => {});
peripheral.discoverAllServicesAndCharacteristics();
peripheral.discoverAllServicesAndCharacteristics((error: string, services: noble.Service[], characteristics: noble.Characteristic[]): void => {});
peripheral.discoverSomeServicesAndCharacteristics(["180d"], ["2a38"]);
peripheral.discoverSomeServicesAndCharacteristics(["180d"], ["2a38"], (error: string, services: noble.Service[], characteristics: noble.Characteristic[]): void => {});
peripheral.readHandle(new Buffer(1), (error: string, data: Buffer): void => {});
peripheral.writeHandle(new Buffer(1), new Buffer(1), true, (error: string): void => {});
peripheral.on("connect", (error: string): void => {});
peripheral.on("disconnect", (error: string): void => {});
peripheral.on("rssiUpdate", (rssi: number): void => {});
peripheral.on("servicesDiscover", (services: noble.Service[]): void => {});
peripheral.once("connect", (error: string): void => {});
peripheral.once("disconnect", (error: string): void => {});
peripheral.once("rssiUpdate", (rssi: number): void => {});
peripheral.once("servicesDiscover", (services: noble.Service[]): void => {});

var service: noble.Service = new noble.Service();
service.uuid = "180a";
service.name = "";
service.type = "";
service.includedServiceUuids = ["180d"];
service.discoverIncludedServices(["180d"]);
service.discoverIncludedServices(["180d"], (error: string, includedServiceUuids: string[]): void => {});
service.discoverCharacteristics(["2a38"]);
service.discoverCharacteristics(["2a38"], (error: string, characteristics: noble.Characteristic[]): void => {});
service.on("includedServicesDiscover", (includedServiceUuids: string[]): void => {});
service.on("characteristicsDiscover", (characteristics: noble.Characteristic[]): void => {});
service.once("includedServicesDiscover", (includedServiceUuids: string[]): void => {});
service.once("characteristicsDiscover", (characteristics: noble.Characteristic[]): void => {});

var characteristic: noble.Characteristic = new noble.Characteristic();
characteristic.uuid = "2a37";
characteristic.name = "";
characteristic.type = "";
characteristic.properties = ["read", "notify"];
characteristic.read();
characteristic.read((error: string, data: Buffer): void => {});
characteristic.write(new Buffer(1), true);
characteristic.write(new Buffer(1), true, (error: string): void => {});
characteristic.broadcast(true);
characteristic.broadcast(true, (error: string): void => {});
characteristic.notify(true);
characteristic.notify(true, (error: string): void => {});
characteristic.discoverDescriptors();
characteristic.discoverDescriptors((error: string, descriptors: noble.Descriptor[]): void => {});
characteristic.on("read", (data: Buffer, isNotification: boolean): void => {});
characteristic.on("write", true, (error: string): void => {});
characteristic.on("broadcast", (state: string): void => {});
characteristic.on("notify", (state: string): void => {});
characteristic.on("descriptorsDiscover", (descriptors: noble.Descriptor[]): void => {});
characteristic.once("read", (data: Buffer, isNotification: boolean): void => {});
characteristic.once("write", true, (error: string): void => {});
characteristic.once("broadcast", (state: string): void => {});
characteristic.once("notify", (state: string): void => {});
characteristic.once("descriptorsDiscover", (descriptors: noble.Descriptor[]): void => {});
characteristic.subscribe();
characteristic.subscribe((error: string) => {});
characteristic.unsubscribe();
characteristic.unsubscribe((error: string) => {});

var descriptor: noble.Descriptor = new noble.Descriptor();
descriptor.uuid = "";
descriptor.name = "";
descriptor.type = "";
descriptor.readValue();
descriptor.readValue((error: string, data: Buffer): void => {});
descriptor.writeValue(new Buffer(1));
descriptor.writeValue(new Buffer(1), (error: string): void => {});
descriptor.on("valueRead", (error: string, data: Buffer): void => {});
descriptor.on("valueWrite", (error: string): void => {});
descriptor.once("valueRead", (error: string, data: Buffer): void => {});
descriptor.once("valueWrite", (error: string): void => {});
