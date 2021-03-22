import * as mongodb from 'mongodb';
import * as mongoose from 'mongoose';

export const MyModel = mongoose.model('test', new mongoose.Schema({
    name: {
        type: String,
        alias: 'foo',
        default: 'Val '
    },
    wheels: Number
}));

export interface OtherLocation extends mongoose.Document {
    type: string;
}

export interface Location extends mongoose.Document {
    _id: mongodb.ObjectId;
    name: string;
    address: string;
    rating: number;
    reviews: string[];
    ref1: mongodb.ObjectId;
    // This type is useful for using with `populate()`
    ref2: mongodb.ObjectId | OtherLocation;
};
