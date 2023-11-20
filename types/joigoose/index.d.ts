import * as Joi from "joi";
import * as Mongoose from "mongoose";

declare namespace Joigoose {
    interface Joigoose {
        convert(schema: Joi.Schema): Mongoose.Schema;
    }
}

declare function Joigoose(mongoose: Mongoose.Mongoose, joiOptions?: Joi.ValidationOptions): Joigoose.Joigoose;

export = Joigoose;
