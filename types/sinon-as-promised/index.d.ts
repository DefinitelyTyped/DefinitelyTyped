import * as s from "sinon";

declare module "sinon" {
    interface SinonStub {
        /**
         * Causes the stub to resolve with the provided value.
         *
         * @param value   Resolve value.
         * @remarks Any Promises/A+ compliant library will handle this object properly.
         */
        resolves<T>(value: T): SinonStub;

        /**
         * Causes the stub to reject with the provided error.
         *
         * @param error   Rejection error.
         * @returns A thenable which will return a rejected promise with the provided error.
         * @remarks If error is a string, it will be set as the message on an Error object.
         */
        rejects(error: any): SinonStub;
    }
}
