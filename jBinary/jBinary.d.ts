// Type definitions for jBinary
// Project: https://github.com/jDataView/jBinary
// Definitions by: Tim Bureck <https://github.com/tbureck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Additional notes:
// Method stubs and types are taken from the official jBinary documentation, which can be found here:
// https://github.com/jDataView/jBinary/wiki/jBinary-Constructor
// https://github.com/jDataView/jBinary/wiki/jBinary-Methods

/// <reference path="../jdataview/jdataview.d.ts" />

declare class jBinary
{

    constructor(data:Array<number>);
    constructor(data:jDataView, typeSet:Object);
    constructor(bufferSize:number, typeSet:Object);

    read(type:string, offset:number = this.tell()):any;
    readAll():any;

    write(type:string, data:any, offset:number = this.tell());
    writeAll(data:any);

    tell():number;
    seek(position:number, callback):number;
    skip(count:number, callback):number;

    slice(start:number, end:number, forceCopy:boolean = false):jBinary;
    as(typeSet:Object, modifyOriginal:boolean = false):jBinary;
}