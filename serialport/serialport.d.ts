// Type definitions for serialport
// Project: https://github.com/EmergingTechnologyAdvisors/node-serialport 
// Definitions by: Jeremy Foster <https://github.com/codefoster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped 

declare module 'serialport' {
    module parsers {
        function readline(delimiter: string):void;
        function raw(emitter:any, buffer:string):void
    }

    export class SerialPort {
        constructor(path: string, options?: Object, openImmediately?: boolean, callback?: (err:string) => void)
        isOpen: boolean;
        on(event: string, callback?: (data?:any) => void):void;
        open(callback?: () => void):void;
        write(buffer: any, callback?: (err:string, bytesWritten:number) => void):void
        pause():void;
        resume():void;
        disconnected(err: Error):void;
        close(callback?: () => void):void;
        flush(callback?: () => void):void;
        set(options: setOptions, callback: () => void):void;
        drain(callback?: () => void):void;
        update(options: updateOptions, callback?: () => void):void;
    }

    export function list(callback: (err: string, ports:portConfig[]) => void): void;

    interface portConfig {
        comName: string,
        manufacturer: string,
        serialNumber: string,
        pnpId: string,
        locationId: string,
        vendorId: string,
        productId: string
    }

    interface setOptions {
        brk?: boolean;
        cts?: boolean;
        dsr?: boolean;
        dtr?: boolean;
        rts?: boolean;
    }
    
    interface updateOptions {
        baudRate?: number
    }
}