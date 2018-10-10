// Type definitions for onoff v3.2
// Project: https://github.com/fivdi/onoff
// Definitions by: Marcel Ernst <https://github.com/marcel-ernst>
//                 Kallu609 <https://github.com/Kallu609>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = __ONOFF;

declare namespace __ONOFF {
    var version: string;
    
    interface GpioOptions {
        debounceTimeout?: number;
        activeLow?: boolean;
    }
    
    type Direction = 'in' | 'out' | 'high' | 'low';
    type Edge = 'none' | 'falling' | 'rising' | 'both';
    
    class Gpio {
        constructor(gpio: number, direction: Direction, options?: GpioOptions);
        constructor(
            gpio: number,
            direction: Direction,
            edge?: Edge,
            options?: GpioOptions
        );
        
        gpio: number;
        gpioPath: string;
        opts: GpioOptions;
        readBuffer: Buffer;
        listeners: Array<(err: Error, value: number) => void>;
        _valueFd: number;
        
        read(cb: (err: Error, value: number) => void): void;
        readSync(): number;
        
        write(value: number, cb: (err: Error, value: number) => void): void;
        writeSync(value: number): void;
        
        watch(cb: (err: Error, value: number) => void): void;
        unwatch(): void;
        unwatch(cb: (err: Error, value: number) => void): void;
        unwatchAll(): void;
        
        direction(): Direction;
        setDirection(value: Direction): void;
        
        edge(): Edge;
        setEdge(value: Edge): void;
        
        activeLow(): boolean;
        setActiveLow(invert?: boolean): void;
        
        options(): GpioOptions;
        
        unexport(): void;
    }
}
