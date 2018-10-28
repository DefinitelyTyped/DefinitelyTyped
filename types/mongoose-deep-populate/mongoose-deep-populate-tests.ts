import mongooseDeepPopulate from 'mongoose-deep-populate';
import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

var connection = mongoose.connect("mongodb://localhost/myDatabase");

var deepPopulate = mongooseDeepPopulate(connection);

var bookSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Author' },
    title: String,
    genre: String,
    publishDate: Date
});

bookSchema.plugin(deepPopulate, {});
