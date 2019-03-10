// tslint:disable-next-line:no-bad-reference
import "../node-tests";

//////////////////////////////////////////////////////////
/// Global Tests : https://nodejs.org/api/global.html  ///
//////////////////////////////////////////////////////////
{
    {
        const hrtimeBigint: bigint = process.hrtime.bigint();
    }
}
