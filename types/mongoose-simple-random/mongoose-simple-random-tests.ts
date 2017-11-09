import * as mongoose from 'mongoose';
import * as mongoose_simple_random from "mongoose-simple-random";

// test compatibility with other libraries - from @types/mongoose
import * as _ from 'lodash';
import * as fs from "fs";

mongoose.Model.findRandom({
    username: { $ne: "DummyUser" },
    rating: {
        $gt: 1,
        $lt: 11,
    },
}, {}, { limit: 1 }, (error, data) => {
    if (error) { console.error("Error!"); } else { console.log("Success!"); }
});

mongoose.plugin(mongoose_simple_random);
