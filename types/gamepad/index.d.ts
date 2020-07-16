// Type definitions for gamepad 1.5
// Project: https://github.com/creationix/node-gamepad#readme
// Definitions by: Alex Van Camp <https://github.com/Lange>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { EventEmitter } from 'events';

declare const nodeGamepad: NodeGamepad;
export = nodeGamepad;

interface NodeGamepad extends EventEmitter {
    init(): void;
    shutdown(): void;
    numDevices(): number;
    deviceAtIndex(deviceIndex: number): GamepadInstance;
    detectDevices(): void;
    processEvents(): void;

    on(event: 'attach', listener: (deviceID: number, device: GamepadInstance) => void): this;
    on(event: 'remove', listener: (deviceID: number) => void): this;
    on(event: 'down' | 'up', listener: (deviceID: number, buttonID: number, timestamp: number) => void): this;
    on(event: 'move', listener: (deviceID: number, axisID: number, value: number, lastValue: number, timestamp: number) => void): this;
}

interface GamepadInstance {
    deviceID: number;
    description: string;
    vendorID: number;
    productID: number;
    axisStates: number[];
    buttonStates: boolean[];
}
