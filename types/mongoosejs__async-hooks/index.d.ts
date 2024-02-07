import { Schema } from "mongoose";
declare namespace wrapCallback {
    interface Options {
        mode?: "scope" | "emit";
    }
}
declare function wrapCallback(schema: Schema, options?: wrapCallback.Options): void;

export = wrapCallback;

// Minimum TypeScript Version: 5.0
