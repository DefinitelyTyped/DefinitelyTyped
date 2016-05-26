// Type definitions for serialport
// Project: https://github.com/EmergingTechnologyAdvisors/node-serialport 
// Definitions by: Jeremy Foster <https://github.com/codefoster> 
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped 

declare module 'serialport' {
    module parsers {
        function readline(delimiter: string):void;
    }

    export class SerialPort {
        constructor(path: string, options?: Object, openImmediately?: boolean, callback?: () => {})
        isOpen: boolean;
        on(event: string, callback?: (data?:any) => void):void;
        open(callback?: () => void):void;
        write(buffer: any, callback?: () => void):void
        pause():void;
        resume():void;
        disconnected(err: Error):void;
        close(callback?: () => void):void;
        flush(callback?: () => void):void;
        set(options: setOptions, callback: () => void):void;
        drain(callback?: () => void):void;
        update(options: updateOptions, callback?: () => void):void;
        list(callback?: () => void):void;
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