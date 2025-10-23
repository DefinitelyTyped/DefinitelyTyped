import Joi = require("joi");
import Mongoose = require("mongoose");

declare namespace Joigoose {
    interface Joigoose {
        convert(schema: Joi.Schema): Mongoose.Schema;
    }
}

declare function Joigoose(mongoose: Mongoose.Mongoose, joiOptions?: Joi.ValidationOptions): Joigoose.Joigoose;

export = Joigoose;
