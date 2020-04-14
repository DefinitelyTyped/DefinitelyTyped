import * as mongodb from 'mongodb';
import * as mongoose from 'mongoose';

// dummy variables
var cb = function () {};

/*
 * section model.js
 * http://mongoosejs.com/docs/api.html#model-js
 */
var MongoModel = mongoose.model('MongoModel', new mongoose.Schema({
    name: String,
    type: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    }
}), 'myCollection', true);

MongoModel.init().then(cb);
MongoModel.find({}).$where('indexOf("val") !== -1').exec(function (err, docs) {
    docs[0].save();
    docs[0].__v;
});
MongoModel.findById(999, function (err, doc) {
    var handleSave = function(err: Error, product: mongoose.Document) {};
    if (!doc) {
        return;
    }
    doc.increment();
    doc.save(handleSave).then(cb).catch(cb);
    doc.save({ validateBeforeSave: false }, handleSave).then(cb).catch(cb);
    doc.save({ safe: true }, handleSave).then(cb).catch(cb);
    doc.save({ safe: { w: 2, j: true } }, handleSave).then(cb).catch(cb);
    doc.save({ safe: { w: 'majority', wtimeout: 10000 } }, handleSave).then(cb).catch(cb);

    // test if Typescript can infer the types of (err, product, numAffected)
    doc.save(function(err, product) { product.save(); })
        .then(function(p) { p.save() }).catch(cb);
    doc.save({ validateBeforeSave: false }, function(err, product) {
        product.save();
    }).then(function(p) { p.save() }).catch(cb);
});
MongoModel = (new MongoModel()).model('MongoModel');
var mongoModel = new MongoModel();
mongoModel.remove(function (err, product) {
    if (err) throw(err);
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
    [
        { $group: { _id: null, maxBalance: { $max: '$balance' }}},
        { $project: { _id: 0, maxBalance: 1 }}
    ],
    cb
);
MongoModel.aggregate([])
    .group({ _id: null, maxBalance: { $max: '$balance' } })
    .exec(cb);
MongoModel.count({ type: 'jungle' }, function (err, count) {
    count.toFixed();
});
MongoModel.create({
    type: 'jelly bean'
}, {
    type: 'snickers'
}, cb).then(function (a) {
    a.save();
})
MongoModel.create([{ type: 'jelly bean' }, {
    type: 'snickers'
}], function (err, candies) {
    var jellybean = candies[0];
    var snickers = candies[1];
}).then(function (arg) {
    arg[0].save();
    arg[1].save();
});
MongoModel.createCollection().then(() => {});
MongoModel.createCollection({ capped: true, max: 42 }).then(() => {});
MongoModel.createCollection({ capped: true, max: 42 }, err => {});
MongoModel.distinct('url', { clicks: {$gt: 100}}, function (err, result) {});
MongoModel.distinct('url').exec(cb);
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
MongoModel.find({ name: 'john', age: { $gte: 18 }});
MongoModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {
    docs[0].remove();
    docs[1].execPopulate();
});
MongoModel.find({ name: /john/i }, 'name friends', function (err, docs) { })
MongoModel.find({ name: /john/i }, null, { skip: 10 })
MongoModel.find({ name: /john/i }, null, { skip: 10 }, function (err, docs) {});
MongoModel.find({ name: /john/i }, null, { skip: 10 }).exec(function (err, docs) {});
MongoModel.findById(999, function (err, adventure) {});
MongoModel.findById(999).exec(cb);
MongoModel.findById(999, 'name length', function (err, adventure) {
    if (adventure) {
        adventure.save();
    }
});
MongoModel.findById(999, 'name length').exec(cb);
MongoModel.findById(999, '-length').exec(function (err, adventure) {
    if (adventure) {
        adventure.addListener('click', cb);
    }
});
MongoModel.findById(999, 'name', { lean: true }, function (err, doc) {});
MongoModel.findById(999, 'name').lean().exec(function (err, doc) {});
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
MongoModel.findOne({ type: 'iphone' }, function (err, adventure) {});
MongoModel.findOne({ type: 'iphone' }).exec(function (err, adventure) {});
MongoModel.findOne({ type: 'iphone' }, 'name', function (err, adventure) {});
MongoModel.findOne({ type: 'iphone' }, 'name').exec(function (err, adventure) {});
MongoModel.findOne({ type: 'iphone' }, 'name', { lean: true }, cb);
MongoModel.findOne({ type: 'iphone' }, 'name', { lean: true }).exec(cb);
MongoModel.findOne({ type: 'iphone' }).select('name').lean().exec(cb);

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
MongoModel.findOneAndUpdate({}, {}, { upsert: true, new: true, arrayFilters: [{ 'elem._id': 123 }] });
MongoModel.findOneAndUpdate({}, {}, { upsert: true, new: true, timestamps: true });
MongoModel.findOneAndUpdate({}, {}, cb);
MongoModel.findOneAndUpdate({}, {});
MongoModel.findOneAndUpdate();
MongoModel.geoSearch({ type : "house" }, {
    near: [10, 10], maxDistance: 5
}, function(err, res) {
    res[0].remove();
});
MongoModel.hydrate({
    _id: '54108337212ffb6d459f854c',
    type: 'jelly bean'
}).execPopulate();
MongoModel.insertMany([
    { name: 'Star Wars' },
    { name: 'The Empire Strikes Back' }
], function(error, docs) {});
MongoModel.insertMany({name: 'Star Wars'}, function(error, doc) {});
MongoModel.mapReduce({
    map: cb,
    reduce: cb
}, function (err, results) {
    console.log(results)
}).then(function (model) {
    return model.find().where('value').gt(10).exec();
}).then(function (docs) {
    console.log(docs);
}).then(null, cb);
MongoModel.findById(999, function (err, user) {
    if (!user) {
        return;
    }
    var opts = [
        { path: 'company', match: { x: 1 }, select: 'name' },
        { path: 'notes', options: { limit: 10 }, model: 'override' }
    ]
    MongoModel.populate(user, opts, cb);
    MongoModel.populate(user, opts, function (err, user) {
        console.log(user);
    });
});
// $ExpectError
MongoModel.find(999, function (err, users) {
    var opts = [{ path: 'company', match: { x: 1 }, select: 'name' }]
    var promise = MongoModel.populate(users, opts);
    promise.then(console.log);
});
MongoModel.populate({
    name: 'Indiana Jones',
    weapon: 389
}, {
    path: 'weapon',
    model: 'Weapon'
}, cb);
var users = [{ name: 'Indiana Jones', weapon: 389 }]
users.push({ name: 'Batman', weapon: 8921 })
MongoModel.populate(users, { path: 'weapon' }, function (err, users) {
    users.forEach(cb);
});
MongoModel.remove({ title: 'baby born from alien father' }, cb);
MongoModel.remove({_id: '999'}).exec().then(cb).catch(cb);
MongoModel.remove({_id: '999'}).exec().then(res=>console.log(res.ok));
MongoModel.deleteOne({_id: '999'}).then(res=>console.log(res.ok));
MongoModel.deleteOne({_id: '999'}).exec().then(res=>console.log(res.ok));
MongoModel.deleteMany({_id: '999'}).then(res=>console.log('Success?',!!res.ok, 'deleted count', res.n));
MongoModel.deleteMany({_id: '999'}).exec().then(res=>console.log(res.ok));
MongoModel.update({ age: { $gt: 18 } }, { oldEnough: true }, cb);
MongoModel.update({ name: 'Tobi' }, { ferret: true }, { multi: true,  arrayFilters: [{ element: { $gte: 100 } }] }, cb);
MongoModel.where('age').gte(21).lte(65).exec(cb);
MongoModel.where('age').gte(21).lte(65).where('name', /^b/i);
new (mongoModel.base.model(''))();
mongoModel.baseModelName && mongoModel.baseModelName.toLowerCase();
mongoModel.collection.$format(99);
mongoModel.collection.initializeOrderedBulkOp;
mongoModel.collection.findOne;
mongoModel.db.openUri('');
mongoModel.discriminators;
mongoModel.modelName.toLowerCase();
MongoModel = mongoModel.base.model('new', mongoModel.schema);
/* inherited properties */
MongoModel.modelName;
mongoModel.modelName;
MongoModel.collection;
mongoModel.collection;
mongoModel._id;
mongoModel.execPopulate();
mongoModel.on('data', cb);
mongoModel.addListener('event', cb);
MongoModel.findOne({ title: /timex/i })
    .populate('_creator', 'name')
    .exec(function (err, story) {
        if (story) {
            story.execPopulate();
        }
    });
MongoModel.find({
    id: 999
})
.populate({
    path: 'fans',
    match: { age: { $gte: 21 }},
    select: 'name -_id',
    options: { limit: 5 }
})
.exec();

/* practical example */

interface Location extends mongoose.Document {
  _id: mongodb.ObjectId;
  name: string;
  address: string;
  rating: number;
  facilities: string[];
  coords: number[];
  openingTimes: any[];
  reviews: any[];
};
const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  rating: { type: Number, "default": 0, min: 0, max: 5 },
  facilities: [String],
  coords: { type: [Number], index: "2dsphere" },
  openingTimes: [mongoose.Schema.Types.Mixed],
  reviews: [mongoose.SchemaTypes.Mixed]
});

var locDocument = <Location>{};
var LocModel = mongoose.model<Location>("Location", locationSchema);
LocModel.findById(999)
    .select("-reviews -rating")
    .exec(function (err, location) {
        if (!location) {
            return;
        }
        location.name = 'blah';
        location.address = 'blah';
        location.reviews.forEach(review => {});
        location.facilities.forEach(facility => {
            facility.toLowerCase();
        });
    });
LocModel.find()
    .select('-reviews -rating')
    .exec(function (err, locations) {
        locations.forEach(location => {
            location.name = 'blah';
            location.address = 'blah';
            location.reviews.forEach(review => {});
            location.facilities.forEach(facility => {
                facility.toLowerCase();
            });
        });
    });
LocModel.find({}).$where('')
    .exec(function (err, locations) {
        locations[0].name;
        locations[1].openingTimes;
    });
LocModel.find({
    name: 'foo',
    address: /bar/, // strings are allowed as RegExp
    rating: 10,
    facilities: { $exists: true },
    'reviews.0': { $exists: true } // additional queries are allowed
});
LocModel.find({ _id: new mongodb.ObjectId() });
LocModel.find({ _id: 'string-allowed' });
LocModel.find({ _id: locDocument });
// $ExpectError
LocModel.find({ _id: 123 });
// $ExpectError
LocModel.find({ _id: { foo: 'bar' } });
// $ExpectError
LocModel.find({ name: 123 });
// $ExpectError
LocModel.find({ rating: 'foo' });
LocModel.count({ name: 'foo'})
    .exec(function (err, count) {
        count.toFixed();
    });
// $ExpectError
LocModel.count({ name: 123 });
LocModel.countDocuments({ name: 'foo' });
// $ExpectError
LocModel.countDocuments({ name: 123 });
LocModel.distinct('')
    .select('-review')
    .exec(function (err, distinct) {
        distinct.concat;
    })
    .then(cb).catch(cb);
LocModel.exists({ name: 'foo' });
// $ExpectError
LocModel.exists({ name: 123 });
LocModel.findByIdAndRemove()
    .exec(function (err, doc) {
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
        doc.openingTimes;
    }
});
LocModel
    .findOne({ name: 'foo', rating: 10 })
    .lean()
    .exec()
    .then(function(doc) {
        if (doc) {
            // $ExpectType ObjectId
            doc._id;
            // $ExpectType string
            doc.name;
            // $ExpectError
            doc.unknown;
        }
    });
LocModel.findOneAndRemove()
    .exec(function (err, location) {
        if (location) {
            location.name;
        }
    });
LocModel.findOneAndRemove({ name: 'foo', rating: 10 });
LocModel.findOneAndDelete({ name: 'foo', rating: 10 });
LocModel.findOneAndUpdate({ name: 'foo' }, { rating: 20 }).exec().then(function (arg) {
    if (arg) {
        arg.openingTimes;
    }
});
LocModel.findOneAndUpdate(
    // find a document with that filter
    { name: "aa" },
    // document to insert when nothing was found
    { $set: { name: "bb" } },
    // options
    {upsert: true, new: true, runValidators: true,
        rawResult: true, multipleCastError: true });
LocModel.geoSearch({}, {
    near: [1, 2],
    maxDistance: 22
}, function (err, res) { res[0].openingTimes; });
LocModel.remove({ name: 'foo' });
LocModel.deleteOne({ name: 'foo' });
LocModel.deleteMany({ name: 'foo' });
LocModel.replaceOne({ name: 'foo' }, { name: 'bar' });

LocModel.update({ name: 'foo' }, {
    name: 'bar',
    'reviews.0': 'test',
    $unset: {
        rating: ''
    },
    $pull: {
        facilities: 'foo'
    },
    $push: {
        coords: 100
    }
});
// $ExpectError
LocModel.update({ name: 'foo' }, { name: 123 });
// $ExpectError
LocModel.update({ name: 'foo' }, { $pull: { facilities: 123 } });
// $ExpectError
LocModel.update({ name: 'foo' }, { $push: { coords: 'bar' } });

LocModel.updateOne({ name: 'foo' }, {
    name: 'bar',
    'reviews.0': 'test',
    $unset: {
        rating: ''
    },
    $pull: {
        facilities: 'foo'
    },
    $push: {
        coords: 100
    }
});
// $ExpectError
LocModel.updateOne({ name: 'foo' }, { name: 123 });
// $ExpectError
LocModel.updateOne({ name: 'foo' }, { $pull: { facilities: 123 } });
// $ExpectError
LocModel.updateOne({ name: 'foo' }, { $push: { coords: 'bar' } });

LocModel.updateMany({ name: 'foo' }, {
    name: 'bar',
    'reviews.0': 'test',
    $unset: {
        rating: ''
    },
    $pull: {
        facilities: 'foo'
    },
    $push: {
        coords: 100
    }
});
// $ExpectError
LocModel.updateMany({ name: 'foo' }, { name: 123 });
// $ExpectError
LocModel.updateMany({ name: 'foo' }, { $pull: { facilities: 123 } });
// $ExpectError
LocModel.updateMany({ name: 'foo' }, { $push: { coords: 'bar' } });
