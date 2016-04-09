// Type definitions for serialport
// Project: https://github.com/voodootikigod/node-serialport
// Definitions by: Sumit <https://github.com/sumitkm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare interface SerialPort
{
    SerialPort: SerialPortStatic;
    parsers: any;
}

declare var SerialPort: SerialPort;

declare module "serialport" {
    export = SerialPort;
}

declare interface SerialPortStatic
{
    new(path: string, options?: OptionsStatic, openImmediately?: boolean, callback?: () => void): SerialPortStatic;
    open(callback?: (error: any)=>void): void;
    isOpen(): boolean;
    write(buffer: any, callback: (error: any) => void): void;
    pause() : void;
    resume() : void;
    flush(callback: (error: any)=>void) : void;
    drain(callback: (error: any)=>void) : void;
    close(callback: (error: any)=>void) : void;
    set(options: any, callback: (error: any, results: any)=>void) : void;
    on(eventName: string, callback : (data: any)=> void) : void;
}

declare interface OptionsStatic
{
    baudRate?: number;
    dataBits?: number;
    stopBits?: number;
    parity?: string;
    rtscts?: boolean;
    xon?: boolean;
    xoff?: boolean;
    xany?: boolean;
    flowControl?: any;
    bufferSize?: number;
    parser? : any;
    platformOptions?: any;
}
