import mongoose = require("mongoose");
declare function pluginFunc(schema: mongoose.Schema): void;
declare namespace pluginFunc {}
export = pluginFunc;

declare module "mongoose" {
    interface Model<T> extends NodeJS.EventEmitter {
        findRandom(
            conditions: Object,
            projection?: Object | null,
            options?: Object | null,
            callback?: (err: any, res?: T[]) => void,
        ): void;
    }
}
