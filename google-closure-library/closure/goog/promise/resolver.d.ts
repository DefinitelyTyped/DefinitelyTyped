declare module goog.promise {

    /**
     * Resolver interface for promises. The resolver is a convenience interface that
     * bundles the promise and its associated resolve and reject functions together,
     * for cases where the resolver needs to be persisted internally.
     *
     * @interface
     * @template TYPE
     */
    interface Resolver<TYPE> {
        
        /**
         * The promise that created this resolver.
         * @type {!goog.Promise<TYPE>}
         */
        promise: goog.Promise<TYPE, any>;
        
        /**
         * Resolves this resolver with the specified value.
         * @type {function((TYPE|goog.Promise<TYPE>|Thenable)=)}
         */
        resolve: (arg0?: TYPE|goog.Promise<TYPE, any>|Thenable<any>) => any;
        
        /**
         * Rejects this resolver with the specified reason.
         * @type {function(*): void}
         */
        reject: (arg0: any) => void;
    }
}
