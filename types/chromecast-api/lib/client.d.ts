import { EventEmitter } from 'events';
import Device = require('./device');

/**
 * Initialize the client to start searching for chromecast devices.
 */
declare class Client extends EventEmitter {
    /**
     * An array of all devices found by the client.
     */
    devices: ReadonlyArray<Device>;

    /**
     * The device event is emitted each time a new device has been found.
     */
    on(event: 'device', listener: (d: Device) => void): this;

    /**
     * Trigger the mDNS search again. Warning: the device event will trigger again (it might return the same device).
     */
    queryMDNS(): void;

    /**
     * Trigger the mDNS search again. Warning: the device event will trigger again (it might return the same device).
     */
    querySSDP(): void;

    /**
     * Trigger the mDNS and SSDP search again. Warning: the device event will trigger again (it might return the same device).
     */
    update(): void;

    destroy(): void;
}

export = Client;
