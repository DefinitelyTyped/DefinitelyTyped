type EventHandler = (event: Event) => void;

interface SerialPortInfoBase {
    serialNumber: string;
    manufacturer: string;
    locationId: string;
    vendorId: string;
    vendor: string;
    productId: string;
    product: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface -- Augments the Web Serial interface added in TypeScript 7.1.
interface SerialPortInfo extends Partial<SerialPortInfoBase> {}

interface Serial {
    onconnect: EventHandler;
    ondisconnect: EventHandler;
}
