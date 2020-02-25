import { Schema } from 'mongoose';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';

const schema = new Schema({
    test: { type: String }
});

schema.plugin(mongooseLeanVirtuals);
