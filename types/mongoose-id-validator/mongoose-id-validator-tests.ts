import * as mongoose from 'mongoose';
import mongooseIdValidator = require('mongoose-id-validator');

const TestSchema = new mongoose.Schema({
    title: String,
});

TestSchema.plugin(mongooseIdValidator);

const MySchema = new mongoose.Schema({
    title: String,
});

MySchema.plugin(mongooseIdValidator, {
    allowDuplicates: false,
});
