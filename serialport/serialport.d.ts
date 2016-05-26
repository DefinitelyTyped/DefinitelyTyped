// Type definitions for serialport
// Project: https://github.com/EmergingTechnologyAdvisors/node-serialport 
// Definitions by: Jeremy Foster <https://github.com/codefoster> 
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped 

declare module 'serialport' {
    module parsers {
        function readline(delimiter: string);
    }

    export class SerialPort {
        constructor(path: string, options?: Object, openImmediately?: boolean, callback?: () => {})
        isOpen: boolean;
        on(event: string, callback?: (data?:any) => void);
        open(callback?: () => void);
        write(buffer: any, callback?: () => void)
        pause();
        resume();
        disconnected(err: Error);
        close(callback?: () => void);
        flush(callback?: () => void);
        set(options: setOptions, callback: () => void);
        drain(callback?: () => void);
        update(options: updateOptions, callback?: () => void);
        list(callback?: () => void);
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