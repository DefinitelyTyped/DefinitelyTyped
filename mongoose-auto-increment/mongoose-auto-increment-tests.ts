/// <reference path="../mongoose/mongoose.d.ts" />
/// <reference path="./mongoose-auto-increment.d.ts" />

import * as autoIncrement from 'mongoose-auto-increment';
import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

var connection = mongoose.createConnection("mongodb://localhost/myDatabase");

autoIncrement.initialize(connection);

var bookSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Author' },
    title: String,
    genre: String,
    publishDate: Date
});

bookSchema.plugin(autoIncrement.plugin, 'Book');
var Book = connection.model('Book', bookSchema);
