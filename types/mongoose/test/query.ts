import * as mongodb from "mongodb";
import * as mongoose from "mongoose";

import { Location } from "./definitions";

// dummy variables
var cb = function () {};

/*
 * section query.js
 * http://mongoosejs.com/docs/api.html#query-js
 */
var doc = <mongoose.Document>{};
var query = <mongoose.Query<mongoose.Document[]>>{};
query.$where("").$where(cb);
query.all(99).all("path", 99);
query.find().where("path").all(["val1", "val2", "val3"]);
query.find().all("path", ["val1", "val2", "val3"]);
query.and([{ color: "green" }, { status: "ok" }]).and([]);
query.batchSize(100).batchSize(100);
var lowerLeft = [40.73083, -73.99756];
var upperRight = [40.741404, -73.988135];
query.where("loc").within().box(lowerLeft, upperRight);
query.where("loc").wtimeout();
query.where("loc").wtimeout(10);
query.box({ ll: lowerLeft, ur: upperRight }).box({});
var queryModel = mongoose.model("QModel");
query.cast(new queryModel(), {}).hasOwnProperty("");
query.catch(cb).catch(cb);
query.center({}).center({});
query.centerSphere({ center: [50, 50], radius: 10 }).centerSphere("path", {});
query.circle({ center: [50, 50], radius: 10 }).circle("path");
query.collation({ locale: "en_US", strength: 1 });
query.comment("comment").comment("comment");
query
    .where({ color: "black" })
    .count(function (err, count) {
        count.toFixed();
    })
    .then(function (res) {
        res.toFixed();
    })
    .catch(function (err) {});
query.cursor().close();
query.distinct("field", {}, cb);
query.distinct("field", {});
query.distinct("field", cb);
query.distinct("field");
query.distinct(cb);
query.distinct();
query
    .elemMatch("comment", {
        author: "autobot",
        votes: { $gte: 5 },
    })
    .elemMatch("comment", function (elem) {
        elem.where("author").equals("autobot");
        elem.where("votes").gte(5);
    });
query.where("age").equals(49);
query
    .exec("find", function (err, res) {
        res[0].execPopulate();
    })
    .then(function (arg) {
        arg[0].execPopulate();
    })
    .catch(cb);
query.where("name").exists().exists("age", false);
query
    .find({ name: "aa" }, function (err, res) {
        res[0].execPopulate();
    })
    .find();
query
    .findOne(function (err, res) {
        res.execPopulate();
    })
    .findOne();
query
    .findOneAndRemove(
        { name: "aa" },
        {
            rawResult: true,
        },
        function (err, doc) {
            doc.lastErrorObject;
        },
    )
    .findOneAndRemove();
query.findOneAndUpdate({ name: "aa" }, { name: "bb" }, {});
query.findOneAndUpdate(
    { name: "aa" },
    { name: "bb" },
    {
        rawResult: true,
    },
    cb,
);
query.findOneAndUpdate({ name: "aa" }, { name: "bb" }, cb);
query.findOneAndUpdate({ name: "aa" }, { name: "bb" });
query.findOneAndUpdate({}, {}, { upsert: true, new: true });
query.findOneAndUpdate({ name: "bb" }, cb);
query.findOneAndUpdate({ name: "bb" });
query.findOneAndUpdate(cb);
query
    .findOneAndUpdate()
    .then(function (doc) {
        doc.execPopulate();
    })
    .catch(cb);
var polyA = [
    [
        [10, 20],
        [10, 40],
        [30, 40],
        [30, 20],
    ],
];
query.where("loc").within().geometry({ type: "Polygon", coordinates: polyA });
var polyB = [
    [0, 0],
    [1, 1],
];
query.where("loc").within().geometry({ type: "LineString", coordinates: polyB });
var polyC = [0, 0];
query.where("loc").within().geometry({ type: "Point", coordinates: polyC });
query.where("loc").intersects().geometry({ type: "Point", coordinates: polyC });
query.getQuery();
query.getFilter();
query.getUpdate();
query.find().where("age").gt(21);
query.find().gt("age", 21);
query.find().where("age").gte(21);
query.find().gte("age", 21);
query.hint({ indexA: 1, indexB: -1 }).hint({});
query.in([1, 2, 3]).in("num", [1, 2, 3]);
query
    .where("path")
    .intersects()
    .geometry({
        type: "LineString",
        coordinates: [
            [180.0, 11.0],
            [180, 9.0],
        ],
    });
query.where("path").intersects({
    type: "LineString",
    coordinates: [
        [180.0, 11.0],
        [180, 9.0],
    ],
});
query
    .find()
    .lean()
    .exec(function (err: any, docs: any) {
        docs[0];
    });
query.limit(20).limit(20);
query.find().where("age").lt(21);
query.find().lt("age", 21);
query.find().where("age").lte(21);
query.find().lte("age", 21);
query
    .find()
    .map(res => {
        res.length;
        res[0]._id;
        return { b: 123 };
    })
    .map(res => {
        res.b;
        return { c: true };
    })
    .then(res => {
        typeof res.c === "boolean";
    });
query
    .findOne()
    .map(res => {
        res.save();
        return res;
    })
    .then(res => {
        res._id;
    });
query.maxDistance("path", 21).maxDistance(21);
query.maxTimeMS(1000);
query.maxscan(100).maxScan(100);
query.maxScan(100).maxScan(100);
query.merge(query).merge({});
query.mod([1, 2]).mod([5, 6]);
query.find().where("age").ne(21);
query.find().ne("age", 21);
query.where("loc").near({ center: [10, 10] });
query.where("loc").near({ center: [10, 10], maxDistance: 5 });
query.where("loc").near({ center: [10, 10], maxDistance: 5, spherical: true });
query.near("loc", { center: [10, 10], maxDistance: 5 });
query.where("loc").nearSphere({ center: [10, 10], maxDistance: 5 });
query.find().where("age").in([20, 21]);
query.find().in("age", [20, 21]);
query.nor([{ color: "green" }, { status: "ok" }]).nor([]);
query.or([{ color: "red" }, { status: "emergency" }]).or([]);
query.find({ color: "blue" }).orFail();
query.where("loc").within().polygon([10, 20], [13, 25], [7, 15]);
query.polygon("loc", [10, 20], [13, 25], [7, 15]);
query
    .findOne()
    .populate("owner")
    .exec(function (err, kitten) {
        kitten.execPopulate();
    });
query
    .find()
    .populate({
        path: "owner",
        select: "name",
        match: { color: "black" },
        options: { sort: { name: -1 } },
    })
    .exec(function (err, kittens) {
        kittens[0].execPopulate();
    });
query
    .find()
    .populate("owner", "name", null, { sort: { name: -1 } })
    .exec(function (err, kittens) {
        kittens[0].execPopulate();
    });
query.read("primary", []).read("primary");
query.readConcern("majority").readConcern("m");
query.regex(/re/).regex("path", /re/);
query.remove({}, cb);
query.remove({});
query.remove(cb);
query.remove();
query.select("a b");
query.select("-c -d");
query.select({ a: 1, b: 1 });
query.select({ c: 0, d: 0 });
query.select("+path");
query.selected();
query.selectedExclusively();
query.selectedInclusively();
query.setOptions({
    tailable: true,
    batchSize: true,
    lean: false,
});
query.setQuery({ age: 5 });
query.size(0).size("age", 0);
query.skip(100).skip(100);
query.slaveOk().slaveOk(false);
query.slice("comments", 5);
query.slice("comments", -5);
query.slice("comments", [10, 5]);
query.where("comments").slice(5);
query.where("comments").slice([-10, 5]);
query.snapshot().snapshot(true);
query.sort({ field: "asc", test: -1 });
query.sort("field -test");
query.tailable().tailable(false);
query.then(cb).catch(cb);
new (query.toConstructor())(1, 2, 3).toConstructor();
query.update({}, doc, {}, cb);
query.update({}, doc, {});
query.update({}, doc, cb);
query.update({}, doc);
query.update(doc, cb);
query.update(doc);
query.update(cb);
// $ExpectError
query.update(true);
query.update();
query
    .where("age")
    .gte(21)
    .lte(65)
    .where("name", /^vonderful/i)
    .where("friends")
    .slice(10)
    .exec(cb);
query.where("path").within().box({});
query.where("path").within().circle({});
query.where("path").within().geometry({ type: "c", coordinates: [] });
query.where("loc").within({ center: [50, 50], radius: 10, unique: true, spherical: true });
query.where("loc").within({
    box: [
        [40.73, -73.9],
        [40.7, -73.988],
    ],
});
query.where("loc").within({ polygon: [[], [], [], []] });
query.where("loc").within([], [], []);
query.where("loc").within([], []);
query.where("loc").within({ type: "LineString", coordinates: [] });
mongoose.Query.use$geoWithin = false;
/* practical example */
query
    .find({
        occupation: /host/,
        "name.last": "Ghost",
        age: { $gt: 17, $lt: 66 },
        likes: { $in: ["vaporizing", "talking"] },
    })
    .limit(10)
    .sort({ occupation: -1 })
    .select({ name: 1, occupation: 1 })
    .exec(cb)
    .then(cb)
    .catch(cb);
query
    .find({ occupation: /host/ })
    .where("name.last")
    .equals("Ghost")
    .where("age")
    .gt(17)
    .lt(66)
    .where("likes")
    .in(["vaporizing", "talking"])
    .limit(10)
    .sort("-occupation")
    .select("name occupation")
    .exec(cb)
    .then(cb)
    .catch(cb);
/**
 * https://mongoosejs.com/docs/api.html#query_Query-lean
 */
query.lean(); // true
query.lean(false);
query.lean({});

var locDocument = <Location>{};
var locationQuery = <mongoose.DocumentQuery<Location, Location>>{};
locationQuery.count({ name: "foo" });
// $ExpectError
locationQuery.count({ name: 123 });
locationQuery.countDocuments({ name: "foo" });
locationQuery.find({ _id: new mongodb.ObjectId() });
locationQuery.find({ _id: "string-allowed" });
locationQuery.find({ _id: locDocument });
// $ExpectError
locationQuery.find({ _id: 123 });
// $ExpectError
locationQuery.find({ _id: { foo: "bar" } });
locationQuery.find({ ref1: new mongodb.ObjectId() });
locationQuery.find({ ref1: "string-allowed" });
// $ExpectError
locationQuery.find({ ref1: 123 });
locationQuery.find({ ref2: new mongodb.ObjectId() });
locationQuery.find({ ref2: "string-allowed" });
// $ExpectError
locationQuery.find({ ref2: 123 });
locationQuery.find({
    name: "foo",
    address: /bar/, // strings are allowed as RegExp
    rating: 10,
    facilities: { $exists: true },
    "reviews.0": { $exists: true }, // additional queries are allowed
});
// $ExpectError
locationQuery.find({ name: 123 });
// $ExpectError
locationQuery.find({ rating: "foo" });
locationQuery.findOne({ name: "foo", rating: 10 }).then(location => {
    if (location) {
        // $ExpectType ObjectId
        location._id;
        // $ExpectType string
        location.name;
        // $ExpectError
        location.unknown;
        location.save();
    }
});
locationQuery.findOne({ name: "foo" }, "name", { lean: true }).then(location => {
    if (location) {
        // $ExpectType ObjectId
        location._id;
        // $ExpectType string
        location.name;
        // $ExpectError
        location.unknown;
        // $ExpectError
        location.save();
    }
});
// $ExpectError
locationQuery.findOne({ rating: "foo" });
locationQuery.findOneAndRemove({ name: "foo", rating: 10 });
// $ExpectError
locationQuery.findOneAndRemove({ rating: "foo" });
locationQuery.findOneAndUpdate({ name: "foo" }, { rating: 20 }).then(location => {
    if (location) {
        // $ExpectType ObjectId
        location._id;
        // $ExpectType string
        location.name;
        // $ExpectType number
        location.rating;
        // $ExpectError
        location.unknown;
        location.save();
    }
});
locationQuery.findOneAndUpdate({ name: "foo" }, { rating: 20 }, { lean: true }).then(location => {
    if (location) {
        // $ExpectType ObjectId
        location._id;
        // $ExpectType string
        location.name;
        // $ExpectType number
        location.rating;
        // $ExpectError
        location.unknown;
        // $ExpectError
        location.save();
    }
});
// $ExpectError
locationQuery.findOneAndUpdate({ rating: "foo" }, { rating: 20 });
locationQuery.remove({ name: "foo", rating: 10 });
// $ExpectError
locationQuery.remove({ rating: "foo" });

locationQuery.update({ name: "foo", rating: 10 }, { rating: 20 });
// $ExpectError
locationQuery.update({ rating: "foo" }, { rating: 20 });
locationQuery.update(
    { name: "foo" },
    {
        rating: 20,
        "untyped.field": "test",
        $set: {
            name: "bar",
            "untyped.field": "foo",
        },
        $unset: {
            address: "",
        },
        $pull: {
            reviews: "foo",
            "untyped.field": "foo",
        },
        $push: {
            reviews: "bar",
            "untyped.field": "bar",
        },
    },
);
// $ExpectError
locationQuery.update({ name: "foo" }, { name: 123 });
// $ExpectError
locationQuery.update({ name: "foo" }, { $pull: { reviews: 123 } });
// $ExpectError
locationQuery.update({ name: "foo" }, { $push: { reviews: 123 } });

locationQuery.lean().then(location => {
    if (location) {
        // $ExpectType ObjectId
        location._id;
        // $ExpectType string
        location.name;
        // $ExpectType number
        location.rating;
        // $ExpectError
        location.unknown;
        // $ExpectError
        location.save();
    }
});

interface LocationWithStringID extends mongoose.Document {
    _id: string;
    name: string;
    rating: number;
}
var locWithStringIDQuery = <mongoose.DocumentQuery<LocationWithStringID, LocationWithStringID>>{};
locWithStringIDQuery.lean().then(location => {
    if (location) {
        // $ExpectType string
        location._id;
        // $ExpectType string
        location.name;
        // $ExpectType number
        location.rating;
        // $ExpectError
        location.unknown;
        // $ExpectError
        location.save();
    }
});

async function testOrFail() {
    var lq = <mongoose.DocumentQuery<Location, Location>>{};

    var x = await lq.findOne({ color: "blue" }).orFail().exec();
    x.toJSON();
}
