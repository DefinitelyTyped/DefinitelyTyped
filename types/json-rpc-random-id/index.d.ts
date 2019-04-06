// Type definitions for json-rpc-random-id 1.0
// Project: https://github.com/kumavis/json-rpc-random-id#readme
// Definitions by: Micah Riggan <https://github.com/micahriggan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/**
 *  Returns a function that generates a random number
 *  This number is to be used with web3 rpc
 */
declare function IdIterator(options?: {
    max?: number;
    start?: number;
}): () => number;

export = IdIterator;
