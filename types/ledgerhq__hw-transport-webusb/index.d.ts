/// <reference types="node" />
import Transport, { DescriptorEvent, Observer, Subscription } from "@ledgerhq/hw-transport";

declare class TransportWebUSB extends Transport {
    constructor(device: string);

    static listen(observer: Observer<DescriptorEvent<string>>): Subscription;

    static request(): Promise<TransportWebUSB>;
    static openConnection(): Promise<TransportWebUSB>;

    static open(device: string): Promise<TransportWebUSB>;
}

export default TransportWebUSB;
