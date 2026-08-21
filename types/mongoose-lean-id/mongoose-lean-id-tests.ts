import { Schema } from "mongoose";
import mongooseLeanId from "mongoose-lean-id";

const schema = new Schema({
    test: { type: String },
});

schema.plugin(mongooseLeanId);
