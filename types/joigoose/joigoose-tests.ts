import Joigoose = require("joigoose");
import * as Joi from "joi";
import * as Mongoose from "mongoose";

let joigoose = Joigoose(Mongoose);
const options: Joi.ValidationOptions = { abortEarly: true };
joigoose = Joigoose(Mongoose, options);

const schema: Mongoose.Schema = joigoose.convert(Joi.object({ aString: Joi.string() }));
