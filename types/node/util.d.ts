// tslint:disable-next-line:no-bad-reference
/// <reference path="ts3.1/util.d.ts" />

declare module "util" {
    namespace types {
        function isBigInt64Array(value: any): value is BigInt64Array;
        function isBigUint64Array(value: any): value is BigUint64Array;
    }
}
