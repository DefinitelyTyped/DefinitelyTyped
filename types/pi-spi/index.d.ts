// Type definitions for pi-spi
// Project: https://github.com/natevw/pi-spi
// Definitions by: Marcel Ernst <https://github.com/marcel-ernst>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = __PI_SPI;

declare namespace __PI_SPI {
    
    enum mode {
        CPHA = 0x01,
        CPOL = 0x02
    }

    enum order {
        MSB_FIRST = 0,
        LSB_FIRST = 1
    }

    function initialize(device:string):__PI_SPI.SPI;

    class SPI {
        clockSpeed():number;
        clockSpeed(speed:number):void;

        dataMode():number;
        dataMode(mode:mode):void;

        bitOrder():number;
        bitOrder(order:order):void;


        write(writebuf:Buffer, cb:(error:Error,data:Buffer) => void):void;
        read(readcount:number, cb:(error:Error,data:Buffer) => void):void;

        transfer(writebuf:Buffer, cb:(error:Error,data:Buffer) => void ):void;
        transfer(writebuf:Buffer, readcount:number, cb:(error:Error,data:Buffer) => void ):void;

        close(cb:(error:Error) => void):void;
    }
}
