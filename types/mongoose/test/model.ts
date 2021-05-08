import * as mongodb from "mongodb";
import * as mongoose from "mongoose";

// dummy variables
var cb = function () {};

/*
 * section model.js
 * http://mongoosejs.com/docs/api.html#model-js
 */
var MongoModel = mongoose.model(
    "MongoModel",
    new mongoose.Schema({
        name: String,
        type: {
            type: mongoose.Schema.Types.Mixed,
            required: true,
        },
    }),
    "myCollection",
    true,
);

MongoModel.init().then(cb);
MongoModel.find({})
    .$where('indexOf("val") !== -1')
    .exec(function (err, docs) {
        docs[0].save();
        docs[0].__v;
    });
MongoModel.findById(999, function (err, doc) {
    var handleSave = function (err: Error, product: mongoose.Document) {};
    if (!doc) {
        return;
    }
    doc.increment();
    doc.save(handleSave).then(cb).catch(cb);
    doc.save({ validateBeforeSave: false }, handleSave).then(cb).catch(cb);
    doc.save({ safe: true }, handleSave).then(cb).catch(cb);
    doc.save({ safe: { w: 2, j: true } }, handleSave)
        .then(cb)
        .catch(cb);
    doc.save({ safe: { w: "majority", wtimeout: 10000 } }, handleSave)
        .then(cb)
        .catch(cb);

    // test if Typescript can infer the types of (err, product, numAffected)
    doc.save(function (err, product) {
        product.save();
    })
        .then(function (p) {
            p.save();
        })
        .catch(cb);
    doc.save({ validateBeforeSave: false }, function (err, product) {
        product.save();
    })
        .then(function (p) {
            p.save();
        })
        .catch(cb);
});
MongoModel = new MongoModel().model("MongoModel");
var mongoModel = new MongoModel();
mongoModel.remove(function (err, product) {
    if (err) throw err;
    MongoModel.findById(product._id, function (err, product) {
        if (product) {
            product.id.toLowerCase();
            product.remove();
        }
    });
});
mongoModel.save().then(function (product) {
    product.save().then(cb).catch(cb);
});
MongoModel.aggregate(
    [{ $group: { _id: null, maxBalance: { $max: "$balance" } } }, { $project: { _id: 0, maxBalance: 1 } }],
    cb,
);
MongoModel.aggregate([])
    .group({ _id: null, maxBalance: { $max: "$balance" } })
    .hint({ _id: 1, maxBalance: 1 })
    .exec(cb);
MongoModel.count({ type: "jungle" }, function (err, count) {
    count.toFixed();
});
MongoModel.create(
    {
        type: "jelly bean",
    },
    {
        type: "snickers",
    },
    cb,
).then(function (a) {
    a.save();
});
MongoModel.create(
    [
        { type: "jelly bean" },
        {
            type: "snickers",
        },
    ],
    function (err, candies) {
        var jellybean = candies[0];
        var snickers = candies[1];
    },
).then(function (arg) {
    arg[0].save();
    arg[1].save();
});
MongoModel.createCollection().then(() => {});
MongoModel.createCollection({ capped: true, max: 42 }).then(() => {});
MongoModel.createCollection({ capped: true, max: 42 }, err => {});
MongoModel.distinct("url", { clicks: { $gt: 100 } }, function (err, result) {});
MongoModel.distinct("url").exec(cb);
MongoModel.syncIndexes().then(() => {});
MongoModel.syncIndexes({}).then(() => {});
MongoModel.syncIndexes(null).then(() => {});
MongoModel.syncIndexes(undefined).then(() => {});
MongoModel.syncIndexes({}, err => {});
MongoModel.syncIndexes(null, err => {});
MongoModel.syncIndexes(undefined, err => {});
MongoModel.listIndexes();
MongoModel.listIndexes(cb);
MongoModel.ensureIndexes({}, cb);
MongoModel.find({ name: "john", age: { $gte: 18 } });
MongoModel.find({ name: "john", age: { $gte: 18 } }, function (err, docs) {
    docs[0].remove();
    docs[1].execPopulate();
});
async () => {
    for await (const item of MongoModel.find({})) {
        item.model;
    }
};
MongoModel.find({ name: /john/i }, "name friends", function (err, docs) {});
MongoModel.find({ name: /john/i }, null, { skip: 10 });
MongoModel.find({ name: /john/i }, null, { skip: 10 }, function (err, docs) {});
MongoModel.find({ name: /john/i }, null, { skip: 10 }).exec(function (err, docs) {});
MongoModel.findById(999, function (err, adventure) {});
MongoModel.findById(999).exec(cb);
MongoModel.findById(999, "name length", function (err, adventure) {
    if (adventure) {
        adventure.save();
    }
});
MongoModel.findById(999, "name length").exec(cb);
MongoModel.findById(999, "-length").exec(function (err, adventure) {
    if (adventure) {
        adventure.addListener("click", cb);
    }
});
MongoModel.findById(999, "name", { lean: true }, function (err, doc) {});
MongoModel.findById(999, "name")
    .lean()
    .exec(function (err, doc) {});
MongoModel.findByIdAndRemove(999, {}, cb);
MongoModel.findByIdAndRemove(999, {});
MongoModel.findByIdAndRemove(999, cb);
MongoModel.findByIdAndRemove(999);
MongoModel.findByIdAndRemove();
MongoModel.findByIdAndUpdate(999, {}, {}, cb);
MongoModel.findByIdAndUpdate(999, {}, {});
MongoModel.findByIdAndUpdate(999, {}, { upsert: true, new: true });
MongoModel.findByIdAndUpdate(999, {}, cb);
MongoModel.findByIdAndUpdate(999, {});
MongoModel.findByIdAndUpdate();
MongoModel.findOne({ type: "iphone" }, function (err, adventure) {});
MongoModel.findOne({ type: "iphone" }).exec(function (err, adventure) {});
MongoModel.findOne({ type: "iphone" }, "name", function (err, adventure) {});
MongoModel.findOne({ type: "iphone" }, "name").exec(function (err, adventure) {});
MongoModel.findOne({ type: "iphone" }, "name", { lean: true }, cb);
MongoModel.findOne({ type: "iphone" }, "name", { lean: true }).exec(cb);
MongoModel.findOne({ type: "iphone" }).select("name").lean().exec(cb);

interface ModelUser {
    _id: any;
    name: string;
    abctest: string;
}

MongoModel.findOneAndRemove({}, {}, cb);
MongoModel.findOneAndRemove({}, {});
MongoModel.findOneAndRemove({}, cb);
MongoModel.findOneAndRemove({});
MongoModel.findOneAndRemove();
MongoModel.findOneAndUpdate({}, {}, {}, cb);
MongoModel.findOneAndUpdate({}, {}, {});
MongoModel.findOneAndUpdate({}, {}, { upsert: true, new: true });
MongoModel.findOneAndUpdate({}, {}, { upsert: true, new: true, arrayFilters: [{ "elem._id": 123 }] });
MongoModel.findOneAndUpdate({}, {}, { upsert: true, new: true, timestamps: true });
MongoModel.findOneAndUpdate({}, {}, { overwrite: true });
MongoModel.findOneAndUpdate({}, {}, { overwriteDiscriminatorKey: true });
MongoModel.findOneAndUpdate({}, {}, cb);
MongoModel.findOneAndUpdate({}, {});
MongoModel.findOneAndUpdate();
MongoModel.geoSearch(
    { type: "house" },
    {
        near: [10, 10],
        maxDistance: 5,
    },
    function (err, res) {
        res[0].remove();
    },
);
MongoModel.hydrate({
    _id: "54108337212ffb6d459f854c",
    type: "jelly bean",
}).execPopulate();
MongoModel.insertMany([{ name: "Star Wars" }, { name: "The Empire Strikes Back" }], function (error, docs) {});
MongoModel.insertMany({ name: "Star Wars" }, function (error, doc) {});
MongoModel.mapReduce(
    {
        map: cb,
        reduce: cb,
    },
    function (err, results) {
        console.log(results);
    },
)
    .then(function (model) {
        return model.find().where("value").gt(10).exec();
    })
    .then(function (docs) {
        console.log(docs);
    })
    .then(null, cb);
MongoModel.findById(999, function (err, user) {
    if (!user) {
        return;
    }
    var opts = [
        { path: "company", match: { x: 1 }, select: "name" },
        { path: "notes", options: { limit: 10 }, model: "override" },
    ];
    MongoModel.populate(user, opts, cb);
    MongoModel.populate(user, opts, function (err, user) {
        console.log(user);
    });
});
// $ExpectError
MongoModel.find(999, function (err, users) {
    var opts = [{ path: "company", match: { x: 1 }, select: "name" }];
    var promise = MongoModel.populate(users, opts);
    promise.then(console.log);
});
MongoModel.populate(
    {
        name: "Indiana Jones",
        weapon: 389,
    },
    {
        path: "weapon",
        model: "Weapon",
    },
    cb,
);
var users = [{ name: "Indiana Jones", weapon: 389 }];
users.push({ name: "Batman", weapon: 8921 });
MongoModel.populate(users, { path: "weapon" }, function (err, users) {
    users.forEach(cb);
});
MongoModel.remove({ title: "baby born from alien father" }, cb);
MongoModel.remove({ _id: "999" }).exec().then(cb).catch(cb);
MongoModel.remove({ _id: "999" })
    .exec()
    .then(res => console.log(res.ok));
MongoModel.deleteOne({ _id: "999" }).then(res => console.log(res.ok));
MongoModel.deleteOne({ _id: "999" })
    .exec()
    .then(res => console.log(res.ok));
MongoModel.deleteMany({ _id: "999" }).then(res => console.log("Success?", !!res.ok, "deleted count", res.n));
MongoModel.deleteMany({ _id: "999" })
    .exec()
    .then(res => console.log(res.ok));
MongoModel.update({ age: { $gt: 18 } }, { oldEnough: true }, cb);
MongoModel.update({ name: "Tobi" }, { ferret: true }, { multi: true, arrayFilters: [{ element: { $gte: 100 } }] }, cb);
MongoModel.update(
    { name: "Tobi" },
    { ferret: true },
    { multi: true, arrayFilters: [{ element: { $gte: 100 } }], overwriteDiscriminatorKey: true },
    cb,
);
MongoModel.where("age").gte(21).lte(65).exec(cb);
MongoModel.where("age").gte(21).lte(65).where("name", /^b/i);
new (MongoModel.base.model(""))();
// $ExpectError
mongoModel.baseModelName;
MongoModel.baseModelName && MongoModel.baseModelName.toLowerCase();
mongoModel.collection.$format(99);
mongoModel.collection.initializeOrderedBulkOp;
mongoModel.collection.findOne;
mongoModel.db.openUri("");
// $ExpectError
mongoModel.discriminators;
MongoModel.discriminators;
// $ExpectError
mongoModel.modelName;
MongoModel.modelName;
MongoModel.modelName.toLowerCase();
MongoModel = MongoModel.base.model("new", mongoModel.schema);

/* model inherited properties */
MongoModel.collection;
mongoModel.collection;
mongoModel._id;
mongoModel.execPopulate();
mongoModel.on("data", cb);
mongoModel.addListener("event", cb);
MongoModel.findOne({ title: /timex/i })
    .populate("_creator", "name")
    .exec(function (err, story) {
        if (story) {
            story.execPopulate();
        }
    });
MongoModel.find({
    id: 999,
})
    .populate({
        path: "fans",
        match: { age: { $gte: 21 } },
        select: "name -_id",
        options: { limit: 5 },
    })
    .exec();

/* practical example */
interface Note extends mongoose.Document {
    text: string;
}
const noteSchema = new mongoose.Schema({ text: String });

interface Location extends mongoose.Document {
    _id: mongodb.ObjectId;
    name: string;
    address: string;
    rating: number;
    facilities: string[];
    coords: number[];
    openingTimes: any[];
    reviews: any[];
    notes: Note[];
}
const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: String,
    rating: { type: Number, default: 0, min: 0, max: 5 },
    facilities: [String],
    coords: { type: [Number], index: "2dsphere" },
    openingTimes: [mongoose.Schema.Types.Mixed],
    reviews: [mongoose.SchemaTypes.Mixed],
    notes: [noteSchema],
});

var locDocument = <Location>{};
var LocModel = mongoose.model<Location>("Location", locationSchema);
LocModel.findById(999)
    .select("-reviews -rating")
    .exec(function (err, location) {
        if (!location) {
            return;
        }
        location.name = "blah";
        location.address = "blah";
        location.reviews.forEach(review => {});
        location.facilities.forEach(facility => {
            facility.toLowerCase();
        });
    });

LocModel.find()
    .select("-reviews -rating")
    .exec(function (err, locations) {
        locations.forEach(location => {
            location.name = "blah";
            location.address = "blah";
            location.reviews.forEach(review => {});
            location.facilities.forEach(facility => {
                facility.toLowerCase();
            });
        });
    });
LocModel.find({})
    .$where("")
    .exec(function (err, locations) {
        locations[0].name;
        locations[1].openingTimes;
    });
LocModel.find({
    name: "foo",
    address: /bar/, // strings are allowed as RegExp
    rating: 10,
    facilities: { $exists: true },
    "reviews.0": { $exists: true }, // additional queries are allowed
});
LocModel.find({ _id: new mongodb.ObjectId() });
LocModel.find({ _id: "string-allowed" });
LocModel.find({ _id: locDocument });
// $ExpectError
LocModel.find({ _id: 123 });
// $ExpectError
LocModel.find({ _id: { foo: "bar" } });
// $ExpectError
LocModel.find({ name: 123 });
// $ExpectError
LocModel.find({ rating: "foo" });
LocModel.find({ name: "foo" }).then(function (doc) {
    if (doc && doc.length > 0) {
        // $ExpectType ObjectId
        doc[0]._id;
        // $ExpectType string
        doc[0].name;
        // $ExpectError
        doc[0].unknown;
        doc[0].save();
    }
});
LocModel.find({ name: "foo" }, null, { lean: true }).then(function (doc) {
    if (doc && doc.length > 0) {
        // $ExpectType string
        doc[0].name;
        // $ExpectError
        doc[0].unknown;
        // $ExpectError
        doc[0].save();
    }
});

LocModel.findById("test-id").then(function (doc) {
    if (doc) {
        // $ExpectType string
        doc.name;
        // $ExpectError
        doc.unknown;
        doc.save();
    }
});
LocModel.findById("test-id", null, { lean: true }).then(function (doc) {
    if (doc) {
        // $ExpectType string
        doc.name;
        // $ExpectError
        doc.unknown;
        // $ExpectError
        doc.save();
    }
});

LocModel.findByIdAndUpdate("test-id", { $set: { name: "bb" } }).then(doc => {
    if (doc) {
        // $ExpectType string
        doc.name;
        // $ExpectError
        doc.unknown;
        doc.save();
    }
});
LocModel.findByIdAndUpdate("test-id", { $set: { name: "bb" } }, { lean: true }).then(doc => {
    if (doc) {
        // $ExpectType string
        doc.name;
        // $ExpectError
        doc.unknown;
        // $ExpectError
        doc.save();
    }
});

LocModel.count({ name: "foo" }).exec(function (err, count) {
    count.toFixed();
});
// $ExpectError
LocModel.count({ name: 123 });
LocModel.countDocuments({ name: "foo" });
// $ExpectError
LocModel.countDocuments({ name: 123 });
LocModel.distinct("")
    .select("-review")
    .exec(function (err, distinct) {
        distinct.concat;
    })
    .then(cb)
    .catch(cb);
LocModel.exists({ name: "foo" });
// $ExpectError
LocModel.exists({ name: 123 });
LocModel.findByIdAndRemove().exec(function (err, doc) {
    if (!doc) {
        return;
    }
    doc.addListener;
    doc.openingTimes;
});
LocModel.findByIdAndUpdate()
    .select({})
    .exec(function (err, location) {
        if (location) {
            location.reviews;
        }
    });
LocModel.findOne({}, function (err, doc) {
    if (doc) {
        // $ExpectType ObjectId
        doc._id;
        // $ExpectType string
        doc.name;
        // $ExpectError
        doc.unknown;
        doc.save();
        doc.openingTimes;
    }
});
LocModel.findOne({ name: "foo", rating: 10 }, "name", { lean: true }).then(function (doc) {
    if (doc) {
        // $ExpectType ObjectId
        doc._id;
        // $ExpectType string
        doc.name;
        // $ExpectError
        doc.unknown;
        // $ExpectError
        doc.save();
    }
});
LocModel.findOne({ name: "foo", rating: 10 })
    .lean()
    .exec()
    .then(function (doc) {
        if (doc) {
            // $ExpectType ObjectId
            doc._id;
            // $ExpectType string
            doc.name;
            // $ExpectError
            doc.unknown;
            // $ExpectError
            doc.save();
        }
    });
LocModel.findOneAndRemove().exec(function (err, location) {
    if (location) {
        location.name;
    }
});
LocModel.findOneAndRemove({ name: "foo", rating: 10 });
LocModel.findOneAndDelete({ name: "foo", rating: 10 });
LocModel.findOneAndUpdate({ name: "foo" }, { rating: 20 })
    .exec()
    .then(function (doc) {
        if (doc) {
            // $ExpectType string
            doc.name;
            // $ExpectError
            doc.unknown;
            doc.save();
            doc.openingTimes;
        }
    });
LocModel.findOneAndUpdate(
    // find a document with that filter
    { name: "aa" },
    // document to insert when nothing was found
    { $set: { name: "bb" } },
    // options
    {
        upsert: true,
        new: true,
        runValidators: true,
        rawResult: true,
        multipleCastError: true,
    },
);
LocModel.findOneAndUpdate({ name: "aa" }, { $set: { name: "bb" } }, { lean: true }).then(doc => {
    if (doc) {
        // $ExpectType string
        doc.name;
        // $ExpectError
        doc.unknown;
        // $ExpectError
        doc.save();
    }
});
LocModel.geoSearch(
    {},
    {
        near: [1, 2],
        maxDistance: 22,
    },
    function (err, res) {
        res[0].openingTimes;
    },
);
LocModel.remove({ name: "foo" });
LocModel.deleteOne({ name: "foo" });
LocModel.deleteMany({ name: "foo" });
LocModel.replaceOne({ name: "foo" }, { name: "bar" });

LocModel.update(
    { name: "foo" },
    {
        name: "bar",
        "reviews.0": "test",
        $unset: {
            rating: "",
        },
        $pull: {
            facilities: "foo",
        },
        $push: {
            coords: 100,
        },
    },
);
// $ExpectError
LocModel.update({ name: "foo" }, { name: 123 });
// $ExpectError
LocModel.update({ name: "foo" }, { $pull: { facilities: 123 } });
// $ExpectError
LocModel.update({ name: "foo" }, { $push: { coords: "bar" } });

LocModel.updateOne(
    { name: "foo" },
    {
        name: "bar",
        "reviews.0": "test",
        $unset: {
            rating: "",
        },
        $pull: {
            facilities: "foo",
        },
        $push: {
            coords: 100,
        },
    },
);
// $ExpectError
LocModel.updateOne({ name: "foo" }, { name: 123 });
// $ExpectError
LocModel.updateOne({ name: "foo" }, { $pull: { facilities: 123 } });
// $ExpectError
LocModel.updateOne({ name: "foo" }, { $push: { coords: "bar" } });

LocModel.updateMany(
    { name: "foo" },
    {
        name: "bar",
        "reviews.0": "test",
        $unset: {
            rating: "",
        },
        $pull: {
            facilities: "foo",
        },
        $push: {
            coords: 100,
        },
    },
);
// $ExpectError
LocModel.updateMany({ name: "foo" }, { name: 123 });
// $ExpectError
LocModel.updateMany({ name: "foo" }, { $pull: { facilities: 123 } });
// $ExpectError
LocModel.updateMany({ name: "foo" }, { $push: { coords: "bar" } });

LocModel.findByIdAndUpdate("someId", { $pull: { notes: { _id: ["someId"] } } });
LocModel.findByIdAndUpdate("someId", { $pull: { notes: { _id: { $in: ["someId", "someId"] } } } });

// $ExpectError
LocModel.create({ address: "foo", coords: [1, 2], facilities: ["foo", "bar"] });

LocModel.create({
    address: "foo",
    coords: [1, 2],
    facilities: ["foo", "bar"],
    name: "bar",
    openingTimes: ["foo"],
    rating: 10,
    reviews: ["foo"],
    notes: [],
});
LocModel.create<{ address: string }>({ address: "foo" });

enum SchemaEnum {
    Foo,
    Bar,
}

enum StringSchemaEnum {
    Foo = "foo",
    Bar = "bar",
}

interface ModelWithFunction extends mongoose.Document {
    name: string;

    someFunc: () => any;

    objectId?: mongoose.Types.ObjectId;

    date?: Date;

    boolean?: boolean;

    decimal?: mongodb.Decimal128;

    number?: number;

    enum?: SchemaEnum;

    enum2?: StringSchemaEnum;

    selfRef?: ModelWithFunction | mongodb.ObjectID;

    selfRef2?: ModelWithFunction | mongodb.ObjectID;

    selfRefArray?: (ModelWithFunction | mongodb.ObjectID | undefined)[];

    selfRefArray2?: ModelWithFunction[] | mongodb.ObjectID[];

    myParent?: {
        ref:
            | {
                  _id: mongodb.ObjectId;
                  child: ModelWithFunction;
              }
            | mongodb.ObjectID;
    };

    enumArray?: SchemaEnum[];

    deeperFuncTest?: {
        test: string;
        // ensure this doesn't turn required
        optionalTest?: string;

        someFunc: () => any; // should be excluded in CreateQuery<T>

        tuple?: [number, number];
        array?: number[];

        deepArray?: Array<{
            title: string;
            func: () => {}; // should be excluded in CreateQuery<T>
            tuple?: [number, number];
            objectId?: mongoose.Types.ObjectId;

            mapWithFuncs?: Map<
                string,
                {
                    title: string;
                    func: () => {}; // should be excluded in CreateQuery<T>
                    innerMap: Map<
                        string,
                        {
                            title: string;
                            func: () => {}; // should be excluded in CreateQuery<T>
                            readonly readonly: unknown; // should be excluded in CreateQuery<T>
                            objectId?: mongoose.Types.ObjectId;
                        }
                    >;
                }
            >;
        }>;
    };

    map?: Map<string, boolean>;

    mapWithFuncs?: Map<
        string,
        {
            title: string;
            func: () => {}; // should be excluded in CreateQuery<T>
            innerMap: Map<
                string,
                {
                    title: string;
                    func: () => {}; // should be excluded in CreateQuery<T>
                    readonly readonly: unknown; // should be excluded in CreateQuery<T>
                }
            >;
        }
    >;

    jobs: Array<{
        title: string;
        readonly readonly: unknown; // should be excluded in CreateQuery<T>
    }>;

    titles?: Array<{ title: string }>;

    readonly readonly: unknown; // should be excluded in CreateQuery<T>
}

// we are only testing the types, not the functionality, so no mongoose.Schema needed
var ModelWithFunctionInSchema = mongoose.model<ModelWithFunction>("ModelWithFunction", {} as any);

ModelWithFunctionInSchema.create({
    name: "test",
    jobs: [],
    deeperFuncTest: { test: "test", array: [1, 2, 3], tuple: [1, 2] },
});

ModelWithFunctionInSchema.create({
    name: "test",
    jobs: [],
    deeperFuncTest: {
        test: "hello",
        deepArray: [
            {
                title: "test",
                tuple: [1, 2],
                objectId: "valid-object-id-source",
                mapWithFuncs: {
                    test: {
                        title: "test",
                        innerMap: {
                            test: {
                                title: "hello",
                                objectId: "valid-object-id-source",
                            },
                        },
                    },
                },
            },
        ],
    },
});

// ------------------------------------------------------------------------------------
// TESTS DISABLED: note that these tests does not properly pass $ExpectError on TS 3.3
// they can be re-enabled once minimum TS version is bumped

//! $ExpectError
//ModelWithFunctionInSchema.create({ name: "test", jobs: [], deeperFuncTest: { deepArray: [{ title1: "test" }] } });

//! $ExpectError
//ModelWithFunctionInSchema.create({ name: "test", jobs: [], deeperFuncTest: { test: "hello", deepArray: [{ title1: "test" }] } });

//! $ExpectError
//ModelWithFunctionInSchema.create({ name: "test", jobs: [], deeperFuncTest: { foo: "bar" } });
// ------------------------------------------------------------------------------------

// $ExpectError
ModelWithFunctionInSchema.create({ foo: "bar" });

// $ExpectError
ModelWithFunctionInSchema.create({ name: "test", jobs: [], foo: "bar" });

// $ExpectError
ModelWithFunctionInSchema.create({ name: "test", jobs: [], someFunc: {} as any });

// works with map
ModelWithFunctionInSchema.create({ name: "test", jobs: [], map: new Map<string, boolean>([["test", true]]) });

// works with object
ModelWithFunctionInSchema.create({ name: "test", jobs: [], map: { test: true } });

// works with array
ModelWithFunctionInSchema.create({ name: "test", jobs: [], map: [["test", true]] });

ModelWithFunctionInSchema.create({ name: "test", jobs: [{ title: "hello" }] });
ModelWithFunctionInSchema.create({ name: "test", jobs: [{ title: "hello" }], titles: [{ title: "test" }] });

ModelWithFunctionInSchema.create({
    name: "test",
    jobs: [],
    mapWithFuncs: { test: { title: "hello", innerMap: { test: { title: "hello" } } } },
});

ModelWithFunctionInSchema.create({ name: "test", jobs: [], enum: SchemaEnum.Bar });

ModelWithFunctionInSchema.create({ name: "test", jobs: [], enumArray: [SchemaEnum.Bar, SchemaEnum.Foo] });

ModelWithFunctionInSchema.create({ name: "test", jobs: [] }).then(ref => {
    const id: mongodb.ObjectID = ref._id;
    ModelWithFunctionInSchema.create({
        name: "test",
        jobs: [],
        selfRef: ref,
        selfRef2: ref._id,
        selfRefArray: [ref, id],
    });
    ModelWithFunctionInSchema.create({ name: "test", jobs: [], selfRefArray2: [id, id] });
    ModelWithFunctionInSchema.create({ name: "test", jobs: [], selfRefArray2: [ref, ref] });
});

ModelWithFunctionInSchema.create({ name: "test", jobs: [], objectId: "valid-object-id-source" });
ModelWithFunctionInSchema.create({
    name: "test",
    jobs: [],
    objectId: new mongodb.ObjectID("valid-object-id-source"),
});

ModelWithFunctionInSchema.create({
    name: "test",
    jobs: [],
    date: new Date(),
});
ModelWithFunctionInSchema.create({ name: "test", jobs: [], date: "2020-01-01" });

// allow strings, since mongoose can cast them
ModelWithFunctionInSchema.create({ name: "test", jobs: [], boolean: "true" });
ModelWithFunctionInSchema.create({ name: "test", jobs: [], boolean: 1 });
ModelWithFunctionInSchema.create({ name: "test", jobs: [], decimal: "1" });
ModelWithFunctionInSchema.create({ name: "test", jobs: [], decimal: 1 });
ModelWithFunctionInSchema.create({ name: "test", jobs: [], number: "1" });

// $ExpectError
ModelWithFunctionInSchema.create({ name: "test", jobs: [], enum2: "bad value" });

// $ExpectError
ModelWithFunctionInSchema.create({ name: "test", jobs: [], date: [123] });

// $ExpectError
ModelWithFunctionInSchema.create({ name: "test", jobs: [], objectId: [123] });
