// Type definitions for mongoose-simple-random 0.4
// Project: https://github.com/larryprice/mongoose-simple-random
// Definitions by: Roberts Slisans <https://github.com/rsxdalv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import mongoose = require('mongoose');
declare function pluginFunc(schema: mongoose.Schema): void;
declare namespace pluginFunc {}
export = pluginFunc;

declare module "mongoose" {
    interface Model<T extends Document> extends NodeJS.EventEmitter, ModelProperties {
        findRandom(conditions: Object, projection?: Object | null, options?: Object | null, callback?: (err: any, res?: T[]) => void)
            : void;
    }
}
