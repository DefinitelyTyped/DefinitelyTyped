// Type definitions for jBinary
// Project: https://github.com/jDataView/jBinary
// Definitions by: Tim Bureck <https://github.com/tbureck>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Additional notes:
// Method stubs and types are taken from the official jBinary documentation, which can be found here:
// https://github.com/jDataView/jBinary/wiki/jBinary-Constructor
// https://github.com/jDataView/jBinary/wiki/jBinary-Methods

/// <reference types="jdataview" />

declare class jBinary
{

    static loadData(source:any, callback?: (error:string, data:any) => any):any;
    static load(source:any, typeSet?:any, callback?: (error:string, data:any) => any):any;

    static saveAs(destination:any, mimeType?:string, callback?: (error:string, data:any) => any):any;
    static toURI(mimeType?:string):any;

    constructor(data:Array<number>);
    constructor(data:jDataView, typeSet:Object);
    constructor(bufferSize:number, typeSet:Object);

    read(type:string, offset?:number):any;
    readAll():any;

    write(type:string, data:any, offset?:number):number;
    writeAll(data:any):number;

    tell():number;
    seek(position:number, callback?: (prop:jBinary, data:any) => any):number;
    skip(count:number, callback?: (prop:jBinary, data:any) => any):number;

    slice(start:number, end:number, forceCopy?:boolean):jBinary;
    as(typeSet:Object, modifyOriginal?:boolean):jBinary;
}