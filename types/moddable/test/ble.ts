import BLEClient from "bleclient";
import BLEServer from "bleserver";
import { uuid } from "btutils";
import { Characteristic, Client } from "gatt";

class KeyboardService extends BLEServer {
    onReady(): void {
        this.startAdvertising({
            advertisingData: {},
        });
    }

    onConnected(device: Client): void {
        this.stopAdvertising();
    }

    onDisconnected(device: Client): void {
        trace();
    }

    onCharacteristicRead(characteristic: Characteristic): number | void | number[] | Uint8Array {
        if (characteristic.name === 'battery') {
        }
    }
}

class Scanner extends BLEClient {
    onReady(): void {
        this.startScanning();
    }

    onDiscovered(device: Client): void {
        const scanResponse = device.scanResponse;
        const completeName = scanResponse.completeName;
        this.connect(device);
    }

    onConnected(device: Client): void {
        device.discoverPrimaryService(uuid("6E400001B5A3F393E0A9E50E24DCCA9E"));
    }


}
