/// <reference types="jasmine" />

declare function installPromiseMatchers(): void;

declare namespace jasmine {
    interface Matchers<T> {
        /**
         * Verifies that a value is a $q Promise.
         */
        toBePromise(): boolean;

        /**
         * Verifies that a Promise is (or has been) rejected.
         */
        toBeRejected(): boolean;

        /**
         * Verifies that a Promise is (or has been) rejected with the specified parameter.
         */
        toBeRejectedWith(value: any): boolean;

        /**
         * Verifies that a Promise is (or has been) resolved.
         */
        toBeResolved(): boolean;

        /**
         * Verifies that a Promise is (or has been) resolved with the specified parameter.
         */
        toBeResolvedWith(value: any): boolean;
    }
}
