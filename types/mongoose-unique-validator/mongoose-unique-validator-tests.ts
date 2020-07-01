import { Schema } from "mongoose";
import uniqueValidator = require("mongoose-unique-validator");

const schema = new Schema({
    test: { type: String }
});

schema.plugin(uniqueValidator);
