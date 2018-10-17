import BigNumber = require("bn.js");
import * as us from "underscore";

type Unit =
    | "noether"
    | "wei"
    | "kwei"
    | "Kwei"
    | "babbage"
    | "femtoether"
    | "mwei"
    | "Mwei"
    | "lovelace"
    | "picoether"
    | "gwei"
    | "Gwei"
    | "shannon"
    | "nanoether"
    | "nano"
    | "szabo"
    | "microether"
    | "micro"
    | "finney"
    | "milliether"
    | "milli"
    | "ether"
    | "kether"
    | "grand"
    | "mether"
    | "gether"
    | "tether";

type Mixed =
    | string
    | number
    | BigNumber
    | {
        type: string;
        value: string;
    }
    | {
        t: string;
        v: string;
    };

type Hex = string | number;

export default interface Utils {
    BN: BigNumber; // TODO only static-definition
    isBN(any: any): boolean;
    isBigNumber(any: any): boolean;
    isAddress(any: any): boolean;
    isHex(any: any): boolean;
    isHexStrict(val: Hex): boolean;
    _: us.UnderscoreStatic;
    asciiToHex(val: string): string;
    hexToAscii(val: string): string;
    bytesToHex(val: number[]): string;
    numberToHex(val: number | BigNumber): string;
    checkAddressChecksum(address: string): boolean;
    fromAscii(val: string): string;
    fromDecimal(val: string | number | BigNumber): string;
    fromUtf8(val: string): string;
    fromWei(val: BigNumber, unit?: Unit): BigNumber;
    fromWei(val: string | number, unit?: Unit): string;
    hexToBytes(val: string): number[];
    hexToNumber(val: string | number | BigNumber): number;
    hexToNumberString(val: string | number | BigNumber): string;
    hexToString(val: string): string;
    hexToUtf8(val: string): string;
    keccak256(val: string): string;
    leftPad(string: string, chars: number, sign: string): string;
    padLeft(string: string, chars: number, sign: string): string;
    rightPad(string: string, chars: number, sign: string): string;
    padRight(string: string, chars: number, sign: string): string;
    sha3(
        val: string,
        val2?: string,
        val3?: string,
        val4?: string,
        val5?: string
    ): string;
    soliditySha3(...val: Mixed[]): string;
    randomHex(bytes: number): string;
    stringToHex(val: string): string;
    toAscii(hex: string): string;
    toBN(any: any): BigNumber;
    toChecksumAddress(val: string): string;
    toDecimal(val: any): number;
    toHex(val: any): string;
    toUtf8(val: any): string;
    toWei(val: string | number, unit?: Unit): string;
    toWei(val: BigNumber, unit?: Unit): BigNumber;
    unitMap: any;
}
