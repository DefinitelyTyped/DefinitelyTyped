// Minimum TypeScript Version: 5.0

import { Schema } from "mongoose";
declare namespace wrapCallback {
    interface Options {
        mode?: "scope" | "emit";
    }
}
declare function wrapCallback(schema: Schema, options?: wrapCallback.Options): void;

export = wrapCallback;
