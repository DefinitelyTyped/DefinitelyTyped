export namespace BitcoinTxParser {
    export function parse(rawTx: any): {
        version: any;
        txInVector: any;
        txOutVector: any;
        locktime: any;
    };
}
