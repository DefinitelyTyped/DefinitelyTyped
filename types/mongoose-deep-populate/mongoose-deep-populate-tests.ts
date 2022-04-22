import mongooseDeepPopulate from 'mongoose-deep-populate';
import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

async function wrapper() {
    const connection = await mongoose.connect("mongodb://localhost/myDatabase");
    const deepPopulate = mongooseDeepPopulate(connection);

    const bookSchema = new Schema({
        author: { type: Schema.Types.ObjectId, ref: 'Author' },
        title: String,
        genre: String,
        publishDate: Date
    });

    bookSchema.plugin(deepPopulate, {});
}
