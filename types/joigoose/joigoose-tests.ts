import * as Joigoose from "joigoose";
import * as Mongoose from "mongoose";
import * as Joi from "joi";

let joigoose = Joigoose(Mongoose);
let options: Joi.ValidationOptions = {abortEarly: true};
joigoose = Joigoose(Mongoose, options);

let schema: Mongoose.Schema = joigoose.convert(Joi.object({aString: Joi.string()}));
