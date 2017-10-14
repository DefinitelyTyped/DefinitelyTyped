// Type definitions for keypair 1.0.1
// Project: https://www.npmjs.com/package/keypair
// Definitions by: eskelter <https://github.com/eskelter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare namespace keypair {
    export interface Options {
        bits?: number,
        e?: number
    }
    
    export interface Results {
        public: string,
        private: string
    }    
}

/**
 * Get an RSA PEM key pair.
 * @param opts
 */
declare function keypair (opts?: keypair.Options): keypair.Results;

export = keypair;