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