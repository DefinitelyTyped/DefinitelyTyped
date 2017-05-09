import { Schema } from "mongoose";
import * as uniqueValidator from "mongoose-unique-validator";

const schema = new Schema({
    test: { type: String }
});

schema.plugin(uniqueValidator);
