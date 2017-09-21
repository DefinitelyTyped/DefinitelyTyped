// Type definitions for mongoose-simple-random 0.4
// Project: https://github.com/larryprice/mongoose-simple-random
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'mongoose-simple-random' {
  import mongoose = require('mongoose');
  // Dummy function allows to avoid hard to kill or fix tslint warning
  // (exporting pluginFunc will make this a non-importable module)
  function pluginFunc(schema: mongoose.Schema): void;
  // Let allows typescript to still use ES2015 style imports
  let plugin: typeof pluginFunc;
  export = plugin;
}

declare module "mongoose" {
    interface Model<T extends Document> extends NodeJS.EventEmitter, ModelProperties {
        findRandom(conditions: Object, projection?: Object | null, options?: Object | null, callback?: (err: any, res?: T[]) => void)
            : void;
    }
}
