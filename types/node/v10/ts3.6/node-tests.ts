import '../test/events';
import '../test/process';
import '../test/util';
import '../test/zlib';

import * as util from "util";

//////////////////////////////////////////////////////////
/// Global Tests : https://nodejs.org/api/global.html  ///
//////////////////////////////////////////////////////////
{
    {
        const hrtimeBigint: bigint = process.hrtime.bigint();
    }
}

//////////////////////////////////////////////////////////
/// Util Tests                                         ///
//////////////////////////////////////////////////////////
{
    {
        const value: BigInt64Array | BigUint64Array | number = [] as any;
        if (util.types.isBigInt64Array(value)) {
            // $ExpectType BigInt64Array
            const b = value;
        } else if (util.types.isBigUint64Array(value)) {
            // $ExpectType BigUint64Array
            const b = value;
        } else {
            // $ExpectType number
            const b = value;
        }
    }
}
