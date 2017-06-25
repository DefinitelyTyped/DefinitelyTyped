// Type definitions for mongoose-simple-random 0.4
// Project: https://github.com/larryprice/mongoose-simple-random
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="mongoose" />

// tslint:disable-next-line no-single-declare-module
declare module "mongoose" {
    interface Model<T extends Document> extends NodeJS.EventEmitter, ModelProperties {
        findRandom(conditions: Object, projection?: Object | null, options?: Object | null, callback?: (err: any, res: T[]) => void)
            : void;
    }
}
