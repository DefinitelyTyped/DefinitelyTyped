// Type definitions for joigoose 2.0
// Project: https://github.com/yoitsro/joigoose
// Definitions by: Karoline <https://github.com/boothwhack>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import * as Mongoose from "mongoose";
import * as Joi from "joi";

declare namespace Joigoose {
    interface Joigoose {
        convert(schema: Joi.Schema): Mongoose.Schema;
    }
}

declare function Joigoose(mongoose: Mongoose.Mongoose, joiOptions?: Joi.ValidationOptions): Joigoose.Joigoose;

export = Joigoose;
