// Type definitions for onoff
// Project: https://github.com/fivdi/onoff
// Definitions by: Marcel Ernst <https://github.com/marcel-ernst>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = __ONOFF;

declare namespace __ONOFF {

    var version:string;

    interface GpioOptions {
        debounceTimeout:number;
    }

    class Gpio {
        constructor(gpio:number, direction:string);
        constructor(gpio:number, direction:string, edge:string);
        constructor(gpio:number, direction:string, edge:string, options:GpioOptions);
        constructor(gpio:number, direction:string, options:GpioOptions);

        gpio:number
        gpioPath:string;
        opts:GpioOptions;
        readBuffer:Buffer;
        listeners:Array<(error:Error, value:number) => void>;
        valueFd:number;

        read(cb:(err:Error, value:number) => void):void;
        readSync():number;

        write(value:number, cb:(err:Error, value:number) => void):void;
        writeSync(value:number):void;

        watch(cb:(error:Error, value:number) => void):void;
        unwatch():void;
        unwatch(cb:(error:Error, value:number) => void):void;
        unwatchAll():void;

        direction():string;
        setDirection(value:string):void;

        edge():string;
        setEdge(value:string):void;

        options():GpioOptions;

        unexport():void;
    }

}