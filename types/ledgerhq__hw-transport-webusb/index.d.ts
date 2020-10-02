// Type definitions for @ledgerhq/hw-transport-webusb 4.70
// Project: https://github.com/LedgerHQ/ledgerjs/tree/master/packages/hw-transport-webusb, https://github.com/ledgerhq/ledgerjs
// Definitions by: Joshua <https://github.com/questofiranon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
import Transport, { DescriptorEvent, Observer, Subscription } from '@ledgerhq/hw-transport';

declare class TransportWebUSB extends Transport {
    constructor(device: string);

    static listen(observer: Observer<DescriptorEvent<string>>): Subscription;

    static request(): Promise<TransportWebUSB>;
    static openConnection(): Promise<TransportWebUSB>;

    static open(device: string): Promise<TransportWebUSB>;
}

export default TransportWebUSB;
