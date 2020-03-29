// Type definitions for joigoose 5.0
// Project: https://github.com/yoitsro/joigoose
// Definitions by: Karoline <https://github.com/boothwhack>
//                 Luke <https://github.com/lukecarr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as Mongoose from "mongoose";
import * as Joi from "hapi__joi";

declare namespace Joigoose {
    interface Joigoose {
        convert(schema: Joi.Schema): Mongoose.Schema;
    }
}

declare function Joigoose(mongoose: Mongoose.Mongoose, joiOptions?: Joi.ValidationOptions): Joigoose.Joigoose;

export = Joigoose;
