/**
 * Based on the examples on: https://github.com/ramiel/mongoose-sequence
 * Created by Linus Brolin <https://github.com/linusbrolin/>.
 */

import { SequenceDocument, SequenceOptions, SequenceSchema, Document, Schema, Model, model } from 'mongoose';
import mongooseSequence = require('mongoose-sequence');

//#region Test Models
interface User extends SequenceDocument {
    name: string;
    country: string;
    city: string;
    inhabitant_number: number;
}

const UserSchema: SequenceSchema = new Schema({
    name: String,
    country: String,
    city: String,
    inhabitant_number: Number
}) as SequenceSchema;

let seqOpts: SequenceOptions = { id: 'inhabitant_seq', inc_field: 'inhabitant_number', reference_fields: ['country', 'city'] };
UserSchema.plugin(mongooseSequence, seqOpts);

let UserModel: Model<User> = model<User>('User', UserSchema);
//#endregion

//#region Test Sequence
let user: User = new UserModel({
    name: 'Patrice',
    country: 'France',
    city: 'Paris'
});
user.save();
console.log(user.inhabitant_number);

user.setNext('inhabitant_seq', function(err: any, user: User) {
    if (err) {
        console.log(err);
        return;
    }
    if (user) {
        console.log(user.inhabitant_number);
    }
});
//#endregion
