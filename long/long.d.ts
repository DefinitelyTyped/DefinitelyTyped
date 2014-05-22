// Type definitions for Long.js 1.1.2
// Project: https://github.com/dcodeIO/Long.js
// Definitions by: Toshihide Hara <https://github.com/kerug/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module dcodeIO {

    interface LongStatic {
        new(low:number, high:number, unsigned?:boolean):Long;

        MAX_SIGNED_VALUE:Long;
        MAX_UNSIGNED_VALUE:Long;
        MAX_VALUE:Long;
        MIN_SIGNED_VALUE:Long;
        MIN_UNSIGNED_VALUE:Long;
        MIN_VALUE:Long;
        NEG_ONE:Long;
        ONE:Long;
        ZERO:Long;

        from28Bits(part0:number, part1:number, part2:number, unsigned?:boolean):Long;
        fromBits(lowBits:number, highBits:number, unsigned?:boolean):Long;
        fromInt(value:number, unsigned?:boolean):Long;
        fromNumber(value:number, unsigned?:boolean):Long;
        fromString(str:string, unsigned?:boolean, radix?:number):Long;
        fromString(str:string, unsigned?:number, radix?:number):Long;
        fromString(str:string, unsigned?:any, radix?:number):Long;
    }

    interface Long {
        high:number;
        low:number;
        unsigned:boolean;

        add(other:Long):Long;
        and(other:Long):Long;
        clone():Long;
        compare(other:Long):number;
        div(other:Long):Long;
        equals(other:Long):boolean;
        getHighBits():number;
        getHighBitsUnsigned():number;
        getLowBits():number;
        getLowBitsUnsigned():number;
        getNumBitsAbs():number;
        greaterThan(other:Long):boolean;
        greaterThanOrEqual(other:Long):boolean;
        isEven():boolean;
        isNegative():boolean;
        isOdd():boolean;
        isZero():boolean;
        lessThan(other:Long):boolean;
        lessThanOrEqual(other:Long):boolean;
        modulo(other:Long):Long;
        multiply(other:Long):Long;
        negate():Long;
        not():Long;
        notEquals(other:Long):boolean;
        or(other:Long):Long;
        shiftLeft(numBits:number):Long;
        shiftRight(numBits:number):Long;
        shiftRightUnsigned(numBits:number):Long;
        subtract(other:Long):Long;
        toInt():number;
        toNumber():number;
        toSigned():Long;
        toString(radix?:number):string;
        toUnsigned():Long;
        xor(other:Long):Long;
    }

    // for browser
    export var Long:LongStatic;
}

// for node, commonjs
declare module "long" {
    var Long:dcodeIO.LongStatic;
    export = Long;
}
