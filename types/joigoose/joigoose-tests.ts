import * as Joigoose from "joigoose";
import * as Mongoose from "mongoose";
import * as Joi from "joi";

let joigoose = Joigoose(Mongoose);
const options: Joi.ValidationOptions = {abortEarly: true};
joigoose = Joigoose(Mongoose, options);

const schema: Mongoose.Schema = joigoose.convert(Joi.object({aString: Joi.string()}));
