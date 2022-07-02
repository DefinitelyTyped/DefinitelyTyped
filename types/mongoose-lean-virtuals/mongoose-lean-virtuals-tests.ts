import { Schema } from 'mongoose';
import mongooseLeanVirtuals = require('mongoose-lean-virtuals');

const schema = new Schema({
    test: { type: String }
});

schema.plugin(mongooseLeanVirtuals);
