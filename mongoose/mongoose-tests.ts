/// <reference path="mongoose.d.ts" />

var fs = require('fs');
import mongoose = require('mongoose');

var createInstance = new mongoose.Mongoose();

var Schema = mongoose.Schema;
var CreateSchema = new Schema({});

mongoose.connect('mongodb://user:pass@localhost:port/database');
mongoose.connect('mongodb://hostA:27501,hostB:27501', { mongos: true });

var conn: mongoose.Connection = mongoose.createConnection('mongodb://user:pass@localhost:port/database');
conn = mongoose.createConnection('mongodb://user:pass@localhost:port/database,mongodb://anotherhost:port,mongodb://yetanother:port', { replset: { strategy: 'ping', rs_name: 'testSet' }});
conn = mongoose.createConnection('localhost', 'database', 27014);
conn = mongoose.createConnection('localhost', 'database', 27014, { server: { auto_reconnect: false }, user: 'username', pass: 'mypassword' });
conn = mongoose.createConnection();
conn.open('localhost', 'database', 27014, {});

var db = mongoose.createConnection();
db.openSet("mongodb://user:pwd@localhost:27020/testing,mongodb://example.com:27020,mongodb://localhost:27019");
db.openSet('mongodb://mongosA:27501,mongosB:27501', 'db', { mongos: true }, (err: any) => {});
db.close();

var collection = db.collection('collection1');

mongoose.connection.on('error', (err: any) => {});
mongoose.disconnect();

mongoose.set('test', 1234567890);
var value = mongoose.get('test');
mongoose.set('debug', true);

interface IActor extends mongoose.Document {
  name: string;
}
mongoose.model<IActor>('Actor', new Schema({ name: String }));
db.model<IActor>('Actor', new Schema({ name: String }));
var schema: mongoose.Schema = new Schema({ name: String }, { collection: 'actor' });
schema.set('collection', 'actor');
var Model = mongoose.model<IActor>('Actor', schema, 'actor');

var names: string[] = mongoose.modelNames();
var names: string[] = db.modelNames();
mongoose.plugin((schema: mongoose.Schema) => {
}, { index: true });


var aggregate = new mongoose.Aggregate();
var aggregate = new mongoose.Aggregate({ $project: { a: 1, b: 1 } });
var aggregate = new mongoose.Aggregate({ $project: { a: 1, b: 1 } }, { $skip: 5 });
var aggregate = new mongoose.Aggregate([{ $project: { a: 1, b: 1 } }, { $skip: 5 }]);
aggregate.append({ $project: { field: 1 }}, { $limit: 2 });
aggregate.append([{ $match: { daw: 'Logic Audio X' }} ]);
aggregate.group({ _id: "$department" });
aggregate.skip(10);
aggregate.limit(10);
aggregate.match({ department: { $in: [ "sales", "engineering" ] } });
aggregate.near({
  near: [40.724, -73.997],
  distanceField: "dist.calculated", // required
  maxDistance: 0.008,
  query: { type: "public" },
  includeLocs: "dist.location",
  uniqueDocs: true,
  num: 5
});
aggregate.project("a b -_id");
aggregate.project({a: 1, b: 1, _id: 0});
aggregate.project({
  newField: '$b.nested',
  plusTen: { $add: ['$val', 10]},
  sub: {
    name: '$a'
  }
});
aggregate.project({ salary_k: { $divide: [ "$salary", 1000 ] } });
aggregate.sort({ field: 'asc', test: -1 });
aggregate.sort('field -test');
aggregate.unwind("tags");
aggregate.unwind("a", "b", "c");
var p = aggregate.exec();
aggregate.read('primaryPreferred').exec((err: any, result: {}) => {});


var p = new mongoose.Promise;
var p2 = p.then(function() { throw new Error('shucks') }).end();
setTimeout(function() {
  p.fulfill({});
}, 10);
var promise = new mongoose.Promise<number>();
promise.then(function (meetups: number) {
  return new mongoose.Promise<string[]>();
}).then(function (people: string[]) {
  if (people.length < 10000) {
    throw new Error('Too few people!!!');
  } else {
    throw new Error('Still need more people!!!');
  }
}).then(null, function (err: Error) {
}).end();


Model.findOne({ name: 'john' }, (err: any, doc: mongoose.Document) => {
  doc.invalidate('size', 'must be less than 20', 14);
  doc.validate((err: any) => { });

  doc.set('documents.0.title', 'changed');
  doc.get('documents.0');
  doc.set({
    'path' : 1,
    'path2' : {
      'path' : 2
    }
  });
  doc.set('path', 'value', { strict: false });
  doc.set('path3', '1', Number);
  doc.get('path3', Number);
  doc.id;
  doc._id;

  doc.isModified();
  doc.isModified('documents');
  doc.isModified('documents.0.title');
  doc.isDirectModified('documents.0.title');
  doc.isDirectModified('documents');
  doc.isSelected('name');

  doc.markModified('mixed.type');
  doc.populate('user');
  doc.populate('other', (err: any, doc: mongoose.Document) => {});
  doc.populated('author');
  doc.save();

  doc.toJSON({ getters: true, virtuals: false });
  var data: any = doc.toObject();
  delete data['age'];
  delete data['weight'];
  data['isAwesome'] = true;
});

Model.model('User').findById('id', (err: any, res: IActor) => {});
Model.count({ type: 'jungle' }, (err: any, count: number) => {});
Model.remove((err: any, res: IActor[]) => {});
Model.save((err: any, res: IActor, numberAffected: number) => {});
Model.create({ type: 'jelly bean' }, { type: 'snickers' }, (err: any, res1: IActor, res2: IActor) => {});
Model.create({ type: 'jawbreaker' });
Model.distinct('url', { clicks: {$gt: 100}}, (err: any, result: IActor[]) => {});
Model.distinct('url');

Model.aggregate(
  { $group: { _id: null, maxBalance: { $max: '$balance' }}},
  { $project: { _id: 0, maxBalance: 1 }},
  (err: any, res: IActor[]) => {});
Model.aggregate()
  .group({ _id: null, maxBalance: { $max: '$balance' } })
  .select('-id maxBalance')
  .exec((err: any, res: IActor[]) => {});
Model.ensureIndexes((err) => {});

Model.find({ name: 'john', age: { $gte: 18 }});
Model.find({ name: 'john', age: { $gte: 18 }}, (err: any, docs: IActor[]) => {});
Model.find({ name: /john/i }, 'name friends', (err: any, docs: IActor[]) => {});
Model.find({ name: /john/i }, null, { skip: 10 });
Model.find({ name: /john/i }, null, { skip: 10 }, (err: any, docs: IActor[]) => {});
Model.find({ name: /john/i }, null, { skip: 10 }).exec((err: any, docs: IActor[]) => {});
var query = Model.find({ name: /john/i }, null, { skip: 10 });
var promise1 = query.exec();
promise1.addBack((err: any, docs: IActor[]) => {});

Model.findById('id', (err: any, res: IActor) => {});
Model.findById('id').exec((err: any, res: IActor) => {});
Model.findById('id', 'name length', (err: any, res: IActor) => {});
Model.findById('id', '-length').exec((err: any, res: IActor) => {});
Model.findById('id', 'name', { lean: true }, (err: any, res: IActor) => {});
Model.findById('id', 'name').lean().exec((err: any, res: IActor) => {});
Model.findByIdAndRemove('id1', { select: 'name' }, (err: any, res: IActor) => {});
Model.findByIdAndRemove('id1', { select: 'name' }).exec((err: any, res: IActor) => {});
Model.findByIdAndRemove('id1', (err: any, res: IActor) => {});
Model.findByIdAndRemove('id1').exec((err: any, res: IActor) => {});
Model.findByIdAndUpdate('id2', { $set: { name: 'jason borne' }}, { upsert: true }, (err: any, res: IActor) => {});

Model.findOne({ type: 'iphone' }, (err: any, res: IActor) => {});
Model.findOne({ type: 'iphone' }).exec((err: any, res: IActor) => {});
Model.findOne({ type: 'iphone' }, 'name', (err: any, res: IActor) => {});
Model.findOne({ type: 'iphone' }, 'name').exec((err: any, res: IActor) => {});
Model.findOne({ type: 'iphone' }, 'name', { lean: true }, (err: any, res: IActor) => {});
Model.findOne({ type: 'iphone' }, 'name', { lean: true }).exec((err: any, res: IActor) => {});
Model.findOne({ type: 'iphone' }).select('name').lean().exec((err: any, res: IActor) => {});
Model.findOneAndRemove({ type: 'iphone' }, { select: 'name' }, (err: any, res: IActor) => {});
Model.findOneAndRemove({ type: 'iphone' }, { select: 'name' }).exec((err: any, res: IActor) => {});
Model.findOneAndUpdate({ type: 'iphone' }, { $set: { name: 'jason borne' }}, { upsert: true }, (err: any, res: IActor) => {});

Model.geoNear([1, 3], { maxDistance : 5, spherical : true }, (err: any, res: IActor[]) => {});
Model.geoNear({ type : "Point", coordinates : [9,9] }, { maxDistance : 5, spherical : true }, (err: any, res: IActor[]) => {});
Model.geoSearch({ type : "house" }, { near: [10, 10], maxDistance: 5 }, (err: any, res: IActor[]) => {});

var o = {
  map: function () { this.emit(this.name, 1) },
  reduce: function (k: string, vals: IActor[]) { return vals.length },
};
Model.mapReduce(o, (err: any, res: any[]) => {});

Model.findById('id', (err: any, res: IActor) => {
  var opts = [
    { path: 'company', match: { x: 1 }, select: 'name' },
    { path: 'notes', options: { limit: 10 }, model: 'override' }
  ];
  Model.populate(res, opts, (err: any, res: IActor) => {});
});
Model.find({ type: 'iphone' }, (err: any, res: IActor[]) => {
  var opts = [{ path: 'company', match: { x: 1 }, select: 'name' }];
  var promise = Model.populate(res, opts);
  promise.then(console.log).end();
});
Model.populate({ name: 'Test A' }, { path: 'weapon', model: 'Weapon' }, (err: any, user: IActor) => {});
Model.populate([
  { name: 'User hoge' },
  { name: 'User fuga' },
], { path: 'weapon' }, (err: any, users: IActor[]) => {});

Model.remove({ title: 'baby born from alien father' }, (err: any) => {});
var query2 = Model.remove({ _id: 'id' });
query2.exec();
Model.update({ age: { $gt: 18 } }, { oldEnough: true }, (err: any, numberAffected: number, raw: any) => {});
Model.update({ name: 'Tobi' }, { ferret: true }, { multi: true }, (err: any, numberAffected: number, raw: any) => {});
Model.update({ _id: 'id' }, { $set: { text: 'changed' }}).exec();

Model.where('age').gte(21).lte(65).exec((err: any, res: IActor[]) => {});
var query3 =Model
  .where('age').gt(21).lt(65)
  .where('name', /^b/i).all('type', 1);
query3.all(25);
query3.and([{ color: 'green' }, { status: 'ok' }]);
query3.batchSize(100);
query3.where('loc').within().box([40.73083, -73.99756], [40.741404,  -73.988135]);
query3.where('loc').within().circle({ center: [50, 50], radius: 10, unique: true });
query3.circle('loc', { center: [50, 50], radius: 10, unique: true });
query3.comment('login query');
query3.where({ 'color': 'black' }).count();
query3.count({ color: 'black' }).count((err: any, count: number) => {});
query3.count({ color: 'black' }, (err: any, count: number) => {});
query3.where({ color: 'black' }).count((err: any, count: number) => {});
query3.elemMatch('comment', { author: 'autobot', votes: {$gte: 5}});
query3.where('comment').elemMatch({ author: 'autobot', votes: {$gte: 5}});
query.elemMatch('comment', (elem: mongoose.Query<IActor>) => {
  elem.where('author').equals('autobot');
  elem.where('votes').gte(5);
});
query3.where('age').equals(49);
query3.where('age', 49);
query3.exec();
query3.exec('update');
query3.where('name').exists();
query3.where('name').exists(true);
query3.find().exists('name');
query3.where('name').exists(false);
query3.find().exists('name', false);
query3.find({ name: 'Los Pollos Hermanos' }).find((err: any, res: IActor[]) => {});
query3.where('loc').within().geometry({ type: 'Polygon', coordinates: [[[ 10, 20 ], [ 10, 40 ], [ 30, 40 ], [ 30, 20 ]]] });
query3.find().where('age').gt(21);
query3.find().gt('age', 21);
query3.hint({ indexA: 1, indexB: -1});
query3.where('path').intersects().geometry({ type: 'LineString', coordinates: [[180.0, 11.0], [180, 9.0]] });
query3.where('path').intersects({ type: 'LineString', coordinates: [[180.0, 11.0], [180, 9.0]] });
query3.maxScan(100);
query3.where('loc').near({ center: [10, 10] });
query3.where('loc').near({ center: [10, 10], maxDistance: 5 });
query3.where('loc').near({ center: [10, 10], maxDistance: 5, spherical: true });
query3.near('loc', { center: [10, 10], maxDistance: 5 });
query3.where('loc').nearSphere({ center: [10, 10], maxDistance: 5 });
query3.nor([{ color: 'green' }, { status: 'ok' }]);
query3.or([{ color: 'red' }, { status: 'emergency' }]);
query3.where('loc').within().polygon([10,20], [13, 25], [7,15]);
query3.polygon('loc', [10,20], [13, 25], [7,15]);

query3.findOne().populate('owner').exec((err: any, res: IActor[]) => {});
query3.find().populate({
  path: 'owner',
  select: 'name',
  match: { color: 'black' },
  options: { sort: { name: -1 }}
}).exec((err: any, res: IActor[]) => {});
query3.find().populate('owner', 'name', null, {sort: { name: -1 }}).exec((err: any, res: IActor[]) => {});

query3.read('primary');
query3.read('p');
query3.read('primaryPreferred');
query3.read('pp');
query3.read('secondary');
query3.read('s');
query3.read('secondaryPreferred');
query3.read('sp');
query3.read('nearest');
query3.read('n');
query3.read('s', [{ dc:'sf', s: 1 },{ dc:'ma', s: 2 }]);
query3.remove({ artist: 'Anne Murray' }, (err: any, res: IActor[]) => {});
query3.select('a b -c');
query3.select({a: 1, b: 1, c: 0});
query3.select('+path');
query3.where('tags').size(0);
query3.skip(100).limit(20);
query3.slaveOk();
query3.slaveOk(true);
query3.slaveOk(false);
query3.slice('comments', -5);
query3.slice('comments', [10, 5])
query3.where('comments').slice(5);
query3.where('comments').slice([-10, 5]);
query3.snapshot();
query3.snapshot(true);
query3.snapshot(false);
query3.sort({ field: 'asc', test: -1 });
query3.sort('field -test');
Model.find({ name: /^hello/ }).stream({ transform: JSON.stringify }).pipe(fs.createWriteStream('./test.json'));
var stream = Model.find({ name: /^hello/ }).stream();
stream
  .on('data', (doc: IActor) => {})
  .on('error', (err: any) => {})
  .on('close', () => {});

query3.tailable();
query3.tailable(false);
var AdvQuery = query3.toConstructor();
query3.update({ title: 'words' });
query3.update({ $set: { title: 'words' }});
query3.update({ name: /^match/ }, { $set: { arr: [] }}, { multi: true }, (err: any, row: number, raw: any) => {});

query3.where('loc').within({ center: [50,50], radius: 10, unique: true, spherical: true });
query3.where('loc').within({ box: [[40.73, -73.9], [40.7, -73.988]] });
query3.where('loc').within({ polygon: [[],[],[],[]] });
query3.where('loc').within([], [], []); // polygon
query3.where('loc').within([], []); // box
query3.where('loc').within({ type: 'LineString', coordinates: [] }); // geometry

mongoose.Query.use$geoWithin = false;


var ToySchema = new Schema({});
ToySchema.add({ name: 'string', color: 'string', price: 'number' });
schema.eachPath(function(path: string, value: any) {});
schema.index({ first: 1, last: -1 });
schema.indexes();
schema.method('meow', function() {
  console.log('meeeeeoooooooooooow');
});
var Kitty = mongoose.model<IActor>('Kitty', schema);
var fizz: any = new Kitty({ name: 'kitty' });
fizz.meow();
schema.method({
  purr: function() {},
  scratch: function() {},
});
schema.path('name');
schema.path('name', Number);
schema.pathType('name');
schema.plugin(function() {});
schema.post('save', function(doc: IActor) {});
schema.pre('save', function(next: () => void) {});
schema.requiredPaths();
schema.static('findByName', function(name: string, callback: () => void) {});
schema.virtual('display_name')
  .get(function(): string { return this.name; })
  .set((value: string): void => {});

