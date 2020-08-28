import { Schema } from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const schema = new Schema({
    test: { type: String },
});

schema.plugin(mongooseAutoPopulate);
