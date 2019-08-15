import * as mongoose from 'mongoose';
import mongoose_simple_random = require("mongoose-simple-random");

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
