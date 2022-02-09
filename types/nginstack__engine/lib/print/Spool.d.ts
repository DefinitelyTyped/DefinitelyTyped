export = Spool;
declare function Spool(printerName: string): void;
declare class Spool {
    constructor(printerName: string);
    open(jobName: string): void;
    write(data: string): void;
    writeln(data: string): void;
    writeByte(data: number): void;
    close(waitPrint?: boolean, timeout?: number): void;
}
declare namespace Spool {
    function getPrinters(): string[];
}
