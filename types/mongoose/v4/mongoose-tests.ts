import * as mongoose from 'mongoose';

// dummy variables
var cb = function () {};

/*
 * Most of these tests are taken directly from the examples
 * in the Mongoose API documentation.
 *
 * http://mongoosejs.com/docs/guide.html
 * http://mongoosejs.com/docs/api.html
 */

/*
 * section index.js
 * http://mongoosejs.com/docs/api.html#index-js
 */
var connectUri = 'mongodb://user:pass@localhost:port/database';
mongoose.connect(connectUri).then(cb).catch(cb);
mongoose.connect(connectUri, {
  user: 'larry',
  pass: 'housan',
  config: {
    autoIndex: true
  },
  mongos: true
}).then(cb);
mongoose.connect(connectUri, function (error) {
  error.stack;
});
var mongooseConnection: mongoose.Connection = mongoose.createConnection();
mongoose.createConnection(connectUri).open('');
mongoose.createConnection(connectUri, {
  db: {
    native_parser: true
  }
}).open('');
mongoose.createConnection('localhost', 'database', 3000).open('');
mongoose.createConnection('localhost', 'database', 3000, {
  user: 'larry',
  config: {
    autoIndex: false
  }
}).open('');
mongoose.disconnect(cb).then(cb);
mongoose.get('test');
mongoose.model('Actor', new mongoose.Schema({
  name: String
}), 'collectionName', true).find({});
mongoose.model('Actor').find({});
mongoose.modelNames()[0].toLowerCase();
new (new mongoose.Mongoose(9, 8, 7)).Mongoose(1, 2, 3).connect('');
mongoose.plugin(cb, {}).connect('');
mongoose.set('test', 'value');
mongoose.set('debug', function(collectionName: any, methodName: any, arg1: any, arg2: any) {});
mongoose.STATES.hasOwnProperty('');
mongoose.connection.on('error', cb);
new mongoose.mongo.MongoError('error').stack;
mongoose.SchemaTypes.String;
mongoose.SchemaTypes.ObjectId;
mongoose.SchemaTypes.Decimal128;
mongoose.Types.ObjectId;
mongoose.Types.Decimal128;
mongoose.version.toLowerCase();

/*
 * section querystream.js
 * http://mongoosejs.com/docs/api.html#querystream-js
 */
var querystream = <mongoose.QueryStream> {};
querystream.destroy(new Error());
querystream.pause();
querystream.pipe(process.stdout, {end: true}).end();
querystream.resume();
querystream.paused;
querystream.readable;
/* inherited properties */
querystream.getMaxListeners();
/* practical examples */
var QSModel = <typeof mongoose.Model> {};
var QSStream: mongoose.QueryStream = QSModel.find().stream();
QSStream.on('data', function (doc: any) {
  doc.save();
}).on('error', function (err: any) {
  throw err;
}).on('close', cb);
QSModel.where('created').gte(20000).stream().pipe(process.stdout);

/*
 * section collection.js
 * http://mongoosejs.com/docs/api.html#collection-js
 *
 * section drivers/node-mongodb-native/collection.js
 * http://mongoosejs.com/docs/api.html#drivers-node-mongodb-native-collection-js
 */
var coll1 = <mongoose.Collection> {};
coll1.$format(999).toLowerCase();
coll1.$print('name', 'i', [1, 2, 3]);
coll1.getIndexes();
/* inherited properties */
coll1.collectionName;
coll1.conn;
coll1.name;
coll1.ensureIndex();
coll1.find({});
coll1.insert({}, {});

var coll2 = new mongoose.Collection('', new mongoose.Connection(mongoose));
coll2.$format(999).toLowerCase();
/* inherited properties */
coll2.initializeOrderedBulkOp;
coll2.indexExists;

/*
 * section connection.js
 * http://mongoosejs.com/docs/api.html#connection-js
 *
 * section section drivers/node-mongodb-native/connection.js
 * http://mongoosejs.com/docs/api.html#drivers-node-mongodb-native-connection-js
 */
var conn1: mongoose.Connection = mongoose.createConnection('mongodb://user:pass@localhost:port/database');
conn1 = new mongoose.Connection(mongoose);
conn1.open('mongodb://localhost/test', 'myDb', 27017, {
  replset: null,
  config: {
    autoIndex: false
  }
}, function (err) {}).open('');
conn1.openSet('mongodb://localhost/test', 'db', {
  replset: null,
  mongos: true
}, function (err) {}).then(cb).catch(cb);
conn1.close().catch(function (err) {});
conn1.collection('name').$format(999);
conn1.model('myModel', new mongoose.Schema({}), 'myCol').find();
conn1.deleteModel('myModel');
interface IStatics {
  staticMethod1: (a: number) => string;
}
conn1.modelNames()[0].toLowerCase();
conn1.config.hasOwnProperty('');
conn1.db.bufferMaxEntries;
conn1.collections['coll'].$format(999);
conn1.readyState.toFixed();
conn1.useDb('myDb').useDb('');
mongoose.Connection.STATES.hasOwnProperty('');
/* inherited properties */
conn1.on('data', cb);
conn1.addListener('close', cb);

/*
 * section error/validation.js
 * http://mongoosejs.com/docs/api.html#error-validation-js
 */
var validationError = <mongoose.ValidationError> {};
validationError.toString().toLowerCase();
/* inherited properties */
validationError.stack;
validationError.message;

/*
 * section error.js
 * http://mongoosejs.com/docs/api.html#error-js
 */
var mongooseError: mongoose.Error = new mongoose.Error('error');
/* inherited properties */
mongooseError.message;
mongooseError.name;
mongooseError.stack;
/* static properties */
mongoose.Error.messages.hasOwnProperty('');
mongoose.Error.Messages.hasOwnProperty('');

/*
 * section querycursor.js
 * http://mongoosejs.com/docs/api.html#querycursor-js
 */
var querycursor = <mongoose.QueryCursor<any>> {};
querycursor.close(function (error, result) {
  result.execPopulate();
}).catch(cb);
querycursor.eachAsync(function (doc) {
  doc.execPopulate();
}, function (err) {}).catch(cb);
querycursor.next(cb).catch(cb);
/* inherited properties */
querycursor.pause();
querycursor.pipe(process.stdout);
/* practical example */
var QCModel = mongoose.model('QC', new mongoose.Schema({name: String}));
QCModel.find({}).cursor({}).on('data', function (doc: any) {
  doc.depopulate('name');
}).on('error', function (error: any) {
  throw error;
}).close().then(cb).catch(cb);
querycursor.map(function (doc) {
  doc.foo = "bar";
  return doc;
}).on('data', function (doc: any) {
  console.log(doc.foo);
});
querycursor.map(function (doc) {
  doc.foo = "bar";
  return doc;
}).next(function (error, doc) {
  console.log(doc.foo);
});

/*
 * section virtualtype.js
 * http://mongoosejs.com/docs/api.html#virtualtype-js
 */
var virtualtype: mongoose.VirtualType = new mongoose.VirtualType({}, 'hello');
virtualtype.applyGetters({}, {});
virtualtype.applySetters({}, {});
virtualtype.get(cb).get(cb);
virtualtype.set(cb).set(cb);

/*
 * section schema.js
 * http://mongoosejs.com/docs/api.html#schema-js
 */
var schema: mongoose.Schema = new mongoose.Schema({
  name:    String,
  binary:  Buffer,
  living:  Boolean,
  updated: { type: Date, default: Date.now },
  age:     { type: Number, min: 18, max: 65 },
  mixed:   mongoose.Schema.Types.Mixed,
  _someId: mongoose.Schema.Types.ObjectId,
  someDecimal:mongoose.Schema.Types.Decimal128,
  array:      [],
  ofString:   [String],
  ofNumber:   [Number],
  ofDates:    [Date],
  ofBuffer:   [Buffer],
  ofBoolean:  [Boolean],
  ofMixed:    [mongoose.Schema.Types.Mixed],
  ofObjectId: [mongoose.Schema.Types.ObjectId],
  nested: {
    stuff: { type: String, lowercase: true, trim: true }
  }
});
schema.add({
  mixedArray: {
    type: [mongoose.Schema.Types.Mixed],
    required: true
  }
}, 'prefix');
schema.eachPath(function (path, type) {
  path.toLowerCase();
  type.sparse(true);
}).eachPath(cb);
schema.get('path');
schema.index({
  name: 1,
  binary: -1
}).index({}, {});
schema.indexes().slice();
schema.method('name', cb).method({
  m1: cb,
  m2: cb
});
schema.path('a', mongoose.Schema.Types.Buffer).path('a');
schema.pathType('m1').toLowerCase();
schema.plugin(function (schema: mongoose.Schema, opts?: any) {
  schema.get('path');
  if (opts) {
    opts.hasOwnProperty('');
  }
}).plugin(cb, {opts: true});

schema
.post('save', function (error, doc, next) {
  error.stack;
  doc.model;
  next.apply;
})
.post('save', function (doc: mongoose.Document, next: Function) {
  doc.model;
  next(new Error());
})
.post('save', function (doc: mongoose.Document) {
  doc.model;
});
schema.queue('m1', [1, 2, 3]).queue('m2', [[]]);
schema.remove('path');
schema.remove(['path1', 'path2', 'path3']);
schema.requiredPaths(true)[0].toLowerCase();
schema.set('key', 999).set('key');
schema.static('static', cb).static({
  s1: cb,
  s2: cb
});
schema.virtual('virt', {}).applyGetters({}, {});
schema.virtualpath('path').applyGetters({}, {});
/* static properties */
mongoose.Schema.indexTypes[0].toLowerCase();
mongoose.Schema.reserved.hasOwnProperty('');
/* inherited properties */
schema.addListener('e', cb);
/* practical examples */
var animalSchema = new mongoose.Schema({
  name: String,
  type: String
});
animalSchema.methods.findSimilarTypes = function (cb: any) {
  return this.model('Aminal').find({ type: this.type }, cb);
};
var Animal: any = mongoose.model('Animal', animalSchema);
var dog: any = new Animal({type: 'dog'});
dog['findSimilarTypes'](function (err: any, dogs: any) {
  console.log(dogs);
});
new mongoose.Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number,
    text: String
  },
  meta2: {
    text: mongoose.Schema.Types.Number,
    select: {
      type: String
    }
  }
});
new mongoose.Schema({ name: { type: String, index: true }});
new mongoose.Schema({ loc: { type: [Number], index: 'hashed' }});
new mongoose.Schema({ loc: { type: [Number], index: '2d', sparse: true }});
new mongoose.Schema({ loc: { type: [Number], index: { type: '2dsphere', sparse: true }}});
new mongoose.Schema({ date: { type: Date, index: { unique: true, expires: '1d' }}});
new mongoose.Schema({ born: { type: Date, required: '{PATH} is required!' }});
new mongoose.Schema({ born: { type: Date, required: function() {
  return this.age >= 18;
}}});
new mongoose.Schema({ state: { type: String, enum: ['opening', 'open', 'closing', 'closed'] }});
new mongoose.Schema({ state: { type: String, enum: {
  values: ['opening', 'open', 'closing', 'closed'],
  message: 'enum validator failed for path `{PATH}` with value `{VALUE}`'
}}});
new mongoose.Schema({ name: { type: String, match: /^a/ }});
new mongoose.Schema({ name: { type: String, match: [
  /\.html$/, "That file doesn't end in .html ({VALUE})"
]}});
new mongoose.Schema({
  createdAt: {type: Date, expires: 60 * 60 * 24}
});
new mongoose.Schema({ createdAt: { type: Date, expires: '1.5h' }});
new mongoose.Schema({ d: { type: Date, max: new Date('2014-01-01') }});
new mongoose.Schema({ d: { type: Date, max: [
  new Date('2014-01-01'),
  'The value of path `{PATH}` ({VALUE}) exceeds the limit ({MAX}).'
]}});
new mongoose.Schema({d: {type: Date, min: [
  new Date('1970-01-01'),
  'The value of path `{PATH}` ({VALUE}) is beneath the limit ({MIN}).'
]}});
new mongoose.Schema({
  integerOnly: {
    type: Number,
    get: (v: number) => Math.round(v),
    set: (v: number) => Math.round(v)
  }
});
new mongoose.Schema({ name: { type: String, validate: [
  { validator: () => {return true}, msg: 'uh oh' },
  { validator: () => {return true}, msg: 'failed' }
]}});
animalSchema.statics.findByName = function(name: any, cb: any) {
  return this.find({ name: new RegExp(name, 'i') }, cb);
};
Animal['findByName']('fido', function(err: any, animals: any) {
  console.log(animals);
});
animalSchema.virtual('name.full').get(function () {
  return this.name.first + ' ' + this.name.last;
});
var childSchema = new mongoose.Schema({ name: String });
var parentSchema = new mongoose.Schema({
  children: [childSchema],
  child: childSchema,
  name: {
    index: true,
    required: true
  }
});
new mongoose.Schema({
  eggs: {
    type: Number,
    min: [6, 'Too few eggs'],
    max: 12
  },
  bacon: {
    type: Number,
    required: [true, 'Why no bacon?']
  },
  drink: {
    type: String,
    enum: ['Coffee', 'Tea']
  }
});

(new mongoose.Schema({})).plugin(function (schema: any, options: any) {
  schema.add({ lastMod: Date })
  schema.pre('save', function (next: Function) {
    this.lastMod = new Date
    next()
  })
  if (options && options['index']) {
    schema.path('lastMod').index(options['index'])
  }
}, { index: true }).plugin(function (schema: any, options: any) {
  schema.add({ lastMod: Date })
  schema.pre('save', function (next: Function) {
    this.lastMod = new Date
    next()
  })
  if (options && options['index']) {
    schema.path('lastMod').index(options['index'])
  }
}, {index: true});

// plugins
interface PluginOption {
  modelName: string;
  timestamp: string;
}

function logger(modelName: string, timestamp: string) {
    // call special logger with options
}

function AwesomeLoggerPlugin(schema: mongoose.Schema, options?: PluginOption) {
  if (options) {
      schema.pre('save', function (next: Function) {
          logger(options.modelName, options.timestamp)
      })
  }
}

new mongoose.Schema({})
    .plugin<PluginOption>(AwesomeLoggerPlugin, {modelName: 'Executive', timestamp: 'yyyy/MM/dd'})

mongoose.plugin<PluginOption>(AwesomeLoggerPlugin, {modelName: 'Executive', timestamp: 'yyyy/MM/dd'})

export default function(schema: mongoose.Schema) {
  schema.pre('init', function(this: mongoose.Document, next: (err?: Error) => void, data: any): void {
    data.name = 'Hello world';
  });
}

/*
 * section document.js
 * http://mongoosejs.com/docs/api.html#document-js
 */
var doc = <mongoose.MongooseDocument> {};
doc.$isDefault('path').valueOf();
doc.depopulate('path');
doc.equals(doc).valueOf();
doc.execPopulate().then(function (arg) {
  arg.execPopulate();
}).catch(function (err) {});
doc.get('path', Number);
doc.init(doc, cb).init(doc, {}, cb);
doc.inspect();
doc.invalidate('path', new Error('hi'), 999).toString();
doc.isDirectModified('path').valueOf();
doc.isInit('path').valueOf();
doc.isModified('path').valueOf();
doc.isSelected('path').valueOf();
doc.markModified('path');
doc.modifiedPaths()[0].toLowerCase();
doc.populate(function (err, doc) {
  doc.populate('path', function (err, doc) {
    doc.populate({
      path: 'path',
      select: 'path',
      match: {}
    });
  });
});
doc.populated('path');
doc.set('path', 999, {}).set({ path: 999 });
doc.toJSON({
  getters: true,
  virtuals: false
});
doc.toObject({
  transform: function (doc, ret, options) {
    doc.toObject();
  }
});
doc.toString().toLowerCase();
doc.unmarkModified('path');
doc.update(doc, cb).cursor();
doc.update(doc, {
  safe: true,
  upsert: true
}, cb).cursor();
doc.validate({}, function (err) {});
doc.validate().then(null).catch(null);
var documentValidationError = doc.validateSync(['path1', 'path2']);
if (documentValidationError) {
    documentValidationError.stack
}
/* practical examples */
var MyModel = mongoose.model('test', new mongoose.Schema({
  name: {
    type: String,
    default: 'Val '
  }
}));
doc = new MyModel();
doc.$isDefault('name');
MyModel.findOne().populate('author').exec(function (err, doc) {
  if (doc) {
    doc.depopulate('author');
  }
});
doc.populate('path');
doc.populate({path: 'hello'});
doc.populate('path', cb)
doc.populate({path: 'hello'}, cb);
doc.populate(cb);
doc.populate({path: 'hello'}).execPopulate().catch(cb);
doc.update({$inc: {wheels:1}}, { w: 1 }, cb);

const ImageSchema = new mongoose.Schema({
  name: {type: String, required: true},
  id: {type: Number, unique: true, required: true, index: true},
}, { id: false });

interface ImageDoc extends mongoose.Document {
  name: string,
  id: number
}

const ImageModel = mongoose.model<ImageDoc>('image', ImageSchema);

ImageModel.findOne({}, function(err, doc) {
  if (doc) {
    doc.name;
    doc.id;
  }
});

/*
 * section types/subdocument.js
 * http://mongoosejs.com/docs/api.html#types-subdocument-js
 */
// The constructor is private api, but we'll use it to test
var subdocument: mongoose.Types.Subdocument = new mongoose.Types.Subdocument();
subdocument.ownerDocument().errors;
subdocument.remove({}, function (err) {
  return 6;
});
/* inherited properties */
subdocument.execPopulate();

/*
 * section types/array.js
 * http://mongoosejs.com/docs/api.html#types-array-js
 */
var mongooseArray: mongoose.Types.Array<string> = new mongoose.Types.Array<string>();
mongooseArray.$shift().toLowerCase();
mongooseArray.remove().$shift();
mongooseArray.$pop().toLowerCase();
mongooseArray.addToSet('hi', 9, 9, '4')[0].toLowerCase();
mongooseArray.indexOf({name: 'obj'}).toFixed();
mongooseArray.inspect();
mongooseArray.nonAtomicPush(9, 8, 'hi').toFixed();
mongooseArray.pop().toLowerCase();
mongooseArray.pull(5, 4, 'hi').$shift();
mongooseArray.push([]).toFixed();
mongooseArray.set(1, 'hi').$shift();
mongooseArray.shift().toLowerCase();
mongooseArray.sort(function (a, b) {
  return a.length - b.length;
}).unshift();
mongooseArray.splice(4, 1).unshift();
mongooseArray.toObject({depopulate: true}).unshift();
mongooseArray.unshift(2, 4, 'hi').toFixed();
/* inherited properties */
mongooseArray.concat();
mongooseArray.length;
/* practical examples */
interface MySubEntity extends mongoose.Types.Subdocument {
  property1: string;
  property2: string;
}
interface MyEntity extends mongoose.Document {
  sub: mongoose.Types.Array<MySubEntity>
}
var myEntity = <MyEntity> {};
var subDocArray = myEntity.sub.filter(sd => {
  sd.property1;
  sd.property2.toLowerCase();
  return true;
});


/*
 * section types/documentarray.js
 * http://mongoosejs.com/docs/api.html#types-documentarray-js
 */
// The constructor is private api, but we'll use it to test
var documentArray: mongoose.Types.DocumentArray<mongoose.MongooseDocument> =
  new mongoose.Types.DocumentArray();
documentArray.create({}).errors;
documentArray.id(new Buffer('hi'));
documentArray.inspect();
documentArray.toObject({}).length;
/* inherited from mongoose.Types.Array */
documentArray.$shift();
/* inherited from Native Array */
documentArray.concat();
/* practical example */
interface MySubEntity1 extends mongoose.Types.Subdocument {
  property1: string;
  property2: string;
}
interface MyEntity1 extends mongoose.Document {
  sub: mongoose.Types.DocumentArray<MySubEntity>
}
var newEnt = <MyEntity1> {};
var newSub: MySubEntity1 = newEnt.sub.create({ property1: "example", property2: "example" });

/*
 * section types/buffer.js
 * http://mongoosejs.com/docs/api.html#types-buffer-js
 */
var mongooseBuffer: mongoose.Types.Buffer = new mongoose.Types.Buffer('hello');
mongooseBuffer.copy(mongooseBuffer, 1, 2, 3).toFixed();
mongooseBuffer.copy(new Buffer('hi')).toFixed();
mongooseBuffer.equals(new Buffer('hi')).valueOf();
mongooseBuffer.subtype(123);
mongooseBuffer.toObject().value();
mongooseBuffer.write('world', 3, 2, 1).toFixed();
/* inherited properties */
mongooseBuffer.compare(mongooseBuffer);
/* inherited static properties */
mongoose.Types.Buffer.from([1, 2, 3]);

/*
 * section types/decimal128.js
 * http://mongoosejs.com/docs/api.html#types-decimal128-js
 */
var decimal128: mongoose.Types.Decimal128 = mongoose.Types.Decimal128.fromString('123.45678901234567');
decimal128 = new mongoose.Types.Decimal128(new Buffer('12345'));
/* practical examples */
export interface ILargeValuesSchema extends mongoose.MongooseDocument {
  sum: mongoose.Schema.Types.Decimal128;
}
export var LargeValuesSchema = new mongoose.Schema({
  sum: {
    type: mongoose.Schema.Types.Decimal128,
    required: true
  }
});

/*
 * section types/objectid.js
 * http://mongoosejs.com/docs/api.html#types-objectid-js
 */
var objectId: mongoose.Types.ObjectId = mongoose.Types.ObjectId.createFromHexString('0x1234');
objectId = new mongoose.Types.ObjectId(12345);
objectId = mongoose.Types.ObjectId(12345);
objectId.getTimestamp();
/* practical examples */
export interface IManagerSchema extends mongoose.MongooseDocument {
  user: mongoose.Schema.Types.ObjectId;
}
export var ManagerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

/*
 * section types/embedded.js
 * http://mongoosejs.com/docs/api.html#types-embedded-js
 */
var embeddedDocument: mongoose.Types.Embedded = new mongoose.Types.Embedded();
embeddedDocument.inspect().hasOwnProperty('');
embeddedDocument.invalidate('hi', new Error('bleh')).valueOf();
embeddedDocument.ownerDocument().execPopulate();
embeddedDocument.parent().execPopulate();
embeddedDocument.parentArray().$shift();
embeddedDocument.remove().invalidate('hi', new Error('hi'));
embeddedDocument.markModified('path');
/* inherited properties */
embeddedDocument.execPopulate();

/*
 * section query.js
 * http://mongoosejs.com/docs/api.html#query-js
 */
var query = <mongoose.Query<mongoose.MongooseDocument[]>> {};
query.$where('').$where(cb);
query.all(99).all('path', 99);
query.and([{ color: 'green' }, { status: 'ok' }]).and([]);
query.batchSize(100).batchSize(100);
var lowerLeft = [40.73083, -73.99756]
var upperRight = [40.741404,  -73.988135]
query.where('loc').within().box(lowerLeft, upperRight)
query.box({ ll : lowerLeft, ur : upperRight }).box({});
var queryModel = mongoose.model('QModel')
query.cast(new queryModel(), {}).hasOwnProperty('');
query.catch(cb).catch(cb);
query.center({}).center({});
query.centerSphere({ center: [50, 50], radius: 10 }).centerSphere('path', {});
query.circle({ center: [50, 50], radius: 10 }).circle('path');
query.collation({ locale: 'en_US', strength: 1 });
query.comment('comment').comment('comment');
query.where({color: 'black'}).count(function (err, count) {
  count.toFixed();
}).then(function (res) {
  res.toFixed();
}).catch(function (err) {});
query.cursor().close();
query.distinct('field', {}, cb);
query.distinct('field', {});
query.distinct('field', cb);
query.distinct('field');
query.distinct(cb);
query.distinct();
query.elemMatch('comment', {
  author: 'autobot',
  votes: {$gte: 5}
}).elemMatch('comment', function (elem) {
  elem.where('author').equals('autobot');
  elem.where('votes').gte(5);
});
query.where('age').equals(49);
query.exec('find', function (err, res) {
  res[0].execPopulate();
}).then(function (arg) {
  arg[0].execPopulate();
}).catch(cb);
query.where('name').exists().exists('age', false);
query.find({name: 'aa'}, function (err, res) {
  res[0].execPopulate();
}).find();
query.findOne(function (err, res) {
  res.execPopulate();
}).findOne();
query.findOneAndRemove({name: 'aa'}, {
  passRawResult: true
}, function (err, doc) {
  doc.execPopulate();
}).findOneAndRemove();
query.findOneAndUpdate({name: 'aa'}, {name: 'bb'}, {

});
query.findOneAndUpdate({name: 'aa'}, {name: 'bb'}, {
  passRawResult: true
}, cb);
query.findOneAndUpdate({name: 'aa'}, {name: 'bb'}, cb);
query.findOneAndUpdate({name: 'aa'}, {name: 'bb'});
query.findOneAndUpdate({name: 'aa'}, {name: 'bb'}, { });
query.findOneAndUpdate({name: 'aa'}, {name: 'bb'}, { upsert: true, new: true });
query.findOneAndUpdate({name: 'bb'}, cb);
query.findOneAndUpdate({name: 'bb'});
query.findOneAndUpdate(cb);
query.findOneAndUpdate().then(function (doc) {
  doc.execPopulate();
}).catch(cb);
var polyA = [[[ 10, 20 ], [ 10, 40 ], [ 30, 40 ], [ 30, 20 ]]]
query.where('loc').within().geometry({ type: 'Polygon', coordinates: polyA })
var polyB = [[ 0, 0 ], [ 1, 1 ]]
query.where('loc').within().geometry({ type: 'LineString', coordinates: polyB })
var polyC = [ 0, 0 ]
query.where('loc').within().geometry({ type: 'Point', coordinates: polyC })
query.where('loc').intersects().geometry({ type: 'Point', coordinates: polyC })
query.getQuery();
query.getUpdate();
query.find().where('age').gt(21);
query.find().gt('age', 21);
query.find().where('age').gte(21);
query.find().gte('age', 21);
query.hint({ indexA: 1, indexB: -1}).hint({});
query.in([1, 2, 3]).in('num', [1, 2, 3]);
query.where('path').intersects().geometry({
    type: 'LineString'
  , coordinates: [[180.0, 11.0], [180, 9.0]]
});
query.where('path').intersects({
    type: 'LineString'
  , coordinates: [[180.0, 11.0], [180, 9.0]]
});
query.find().lean().exec(function (err: any, docs: any) {
  docs[0];
});
query.limit(20).limit(20);
query.find().where('age').lt(21);
query.find().lt('age', 21);
query.find().where('age').lte(21);
query.find().lte('age', 21);
query.maxDistance('path', 21).maxDistance(21);
query.maxscan(100).maxScan(100);
query.maxScan(100).maxScan(100);
query.merge(query).merge({});
query.mod([1, 2]).mod([5, 6]);
query.find().where('age').ne(21);
query.find().ne('age', 21);
query.where('loc').near({ center: [10, 10] });
query.where('loc').near({ center: [10, 10], maxDistance: 5 });
query.where('loc').near({ center: [10, 10], maxDistance: 5, spherical: true });
query.near('loc', { center: [10, 10], maxDistance: 5 });
query.where('loc').nearSphere({ center: [10, 10], maxDistance: 5 });
query.find().where('age').in([20, 21]);
query.find().in('age', [20, 21]);
query.nor([{ color: 'green' }, { status: 'ok' }]).nor([]);
query.or([{ color: 'red' }, { status: 'emergency' }]).or([]);
query.where('loc').within().polygon([10,20], [13, 25], [7,15]);
query.polygon('loc', [10,20], [13, 25], [7,15]);
query.findOne().populate('owner').exec(function (err, kitten) {
  kitten.execPopulate();
});
query.find().populate({
    path: 'owner'
  , select: 'name'
  , match: { color: 'black' }
  , options: { sort: { name: -1 }}
}).exec(function (err, kittens) {
  kittens[0].execPopulate();
});
query.find().populate('owner', 'name', null, {sort: { name: -1 }}).exec(function (err, kittens) {
  kittens[0].execPopulate();
});
query.read('primary', []).read('primary');
query.regex(/re/).regex('path', /re/);
query.remove({}, cb);
query.remove({});
query.remove(cb);
query.remove();
query.select('a b');
query.select('-c -d');
query.select({ a: 1, b: 1 });
query.select({ c: 0, d: 0 });
query.select('+path');
query.selected();
query.selectedExclusively();
query.selectedInclusively();
query.setOptions({
  tailable: true,
  batchSize: true,
  lean: false
});
query.size(0).size('age', 0);
query.skip(100).skip(100);
query.slaveOk().slaveOk(false);
query.slice('comments', 5);
query.slice('comments', -5);
query.slice('comments', [10, 5]);
query.where('comments').slice(5);
query.where('comments').slice([-10, 5]);
query.snapshot().snapshot(true);
query.sort({ field: 'asc', test: -1 });
query.sort('field -test');
query.stream().on('data', function (doc: any) {
}).on('error', function (err: any) {
}).on('close', function () {
});
query.tailable().tailable(false);
query.then(cb).catch(cb);
(new (query.toConstructor())(1, 2, 3)).toConstructor();
query.update({}, doc, {

}, cb);
query.update({}, doc, {

});
query.update({}, doc, cb);
query.update({}, doc);
query.update(doc, cb);
query.update(doc);
query.update(cb);
query.update(true);
query.update();
query.where('age').gte(21).lte(65)
  .where('name', /^vonderful/i)
  .where('friends').slice(10)
  .exec(cb);
query.where('path').within().box({})
query.where('path').within().circle({})
query.where('path').within().geometry({type: 'c', coordinates: []});
query.where('loc').within({ center: [50,50], radius: 10, unique: true, spherical: true });
query.where('loc').within({ box: [[40.73, -73.9], [40.7, -73.988]] });
query.where('loc').within({ polygon: [[],[],[],[]] });
query.where('loc').within([], [], []);
query.where('loc').within([], []);
query.where('loc').within({ type: 'LineString', coordinates: [] });
mongoose.Query.use$geoWithin = false;
/* practical example */
query.
  find({
    occupation: /host/,
    'name.last': 'Ghost',
    age: { $gt: 17, $lt: 66 },
    likes: { $in: ['vaporizing', 'talking'] }
  }).
  limit(10).
  sort({ occupation: -1 }).
  select({ name: 1, occupation: 1 }).
  exec(cb).then(cb).catch(cb);
query.
  find({ occupation: /host/ }).
  where('name.last').equals('Ghost').
  where('age').gt(17).lt(66).
  where('likes').in(['vaporizing', 'talking']).
  limit(10).
  sort('-occupation').
  select('name occupation').
  exec(cb).then(cb).catch(cb);

/*
 * section schema/array.js
 * http://mongoosejs.com/docs/api.html#schema-array-js
 */
var schemaArray: mongoose.Schema.Types.Array = new mongoose.Schema.Types.Array('key', new mongoose.SchemaType('hi'), {});
schemaArray.checkRequired('hello').valueOf();
/** static properties */
mongoose.Schema.Types.Array.schemaName.toLowerCase();
/** inherited properties */
schemaArray.sparse(true);

/*
 * section schema/string.js
 * http://mongoosejs.com/docs/api.html#schema-string-js
 */
var MongoDocument = <mongoose.Document> {};
var schemastring: mongoose.Schema.Types.String = new mongoose.Schema.Types.String('hello');
schemastring.checkRequired(234, MongoDocument).valueOf();
schemastring.enum(['hi', 'a', 'b']).enum('hi').enum({});
schemastring.lowercase().lowercase();
schemastring.match(/re/, 'error').match(/re/);
schemastring.maxlength(999, 'error').maxlength(999);
schemastring.minlength(999, 'error').minlength(999);
schemastring.trim().trim();
schemastring.uppercase().uppercase();
/* static properties */
mongoose.Schema.Types.String.schemaName.toLowerCase();
/* inherited properties */
schemastring.sparse(true);

/*
 * section schema/documentarray.js
 * http://mongoosejs.com/docs/api.html#schema-documentarray-js
 */
var documentarray: mongoose.Schema.Types.DocumentArray = new mongoose.Schema.Types.DocumentArray('key', new mongoose.Schema());
/* static properties */
mongoose.Schema.Types.DocumentArray.schemaName.toLowerCase();
/* inherited properties */
documentarray.sparse(true);

/*
 * section schema/number.js
 * http://mongoosejs.com/docs/api.html#schema-number-js
 */
var schemanumber: mongoose.Schema.Types.Number = new mongoose.Schema.Types.Number('num', {});
schemanumber.checkRequired(999, MongoDocument).valueOf();
schemanumber.max(999, 'error').max(999);
schemanumber.min(999, 'error').min(999);
/* static properties */
mongoose.Schema.Types.Number.schemaName.toLowerCase();
/* inherited properties */
schemanumber.sparse(true);

/*
 * section schema/date.js
 * http://mongoosejs.com/docs/api.html#schema-date-js
 */
var schemadate: mongoose.Schema.Types.Date = new mongoose.Schema.Types.Date('99');
schemadate.checkRequired([], MongoDocument).valueOf();
schemadate.expires(99).expires('now');
schemadate.max(new Date(), 'error').max(new Date(''));
schemadate.min(new Date(), 'error').min(new Date(''));
/* static properties */
mongoose.Schema.Types.Date.schemaName.toLowerCase();
/* inherited properties */
schemadate.sparse(true);

/*
 * section schema/buffer.js
 * http://mongoosejs.com/docs/api.html#schema-buffer-js
 */
var schemabuffer: mongoose.Schema.Types.Buffer = new mongoose.Schema.Types.Buffer('99');
schemabuffer.checkRequired(999, MongoDocument).valueOf();
/* static properties */
mongoose.Schema.Types.Buffer.schemaName.toLowerCase();
/* inherited properties */
schemabuffer.sparse(true);

/*
 * section schema/boolean.js
 * http://mongoosejs.com/docs/api.html#schema-boolean-js
 */
var schemaboolean: mongoose.Schema.Types.Boolean = new mongoose.Schema.Types.Boolean('99');
schemaboolean.checkRequired(99).valueOf();
/* static properties */
mongoose.Schema.Types.Boolean.schemaName.toLowerCase();
/* inherited properties */
schemaboolean.sparse(true);

/*
 * section schema/objectid.js
 * http://mongoosejs.com/docs/api.html#schema-objectid-js
 */
var schemaobjectid: mongoose.Schema.Types.ObjectId = new mongoose.Schema.Types.ObjectId('99');
schemaobjectid.auto(true).auto(false);
schemaobjectid.checkRequired(99, MongoDocument).valueOf();
/* static properties */
mongoose.Schema.Types.ObjectId.schemaName.toLowerCase();
/* inherited properties */
schemaobjectid.sparse(true);

/*
 * section schema/mixed.js
 * http://mongoosejs.com/docs/api.html#schema-mixed-js
 */
var schemamixed: mongoose.Schema.Types.Mixed = new mongoose.Schema.Types.Mixed('99');
/* static properties */
mongoose.Schema.Types.Mixed.schemaName.toLowerCase();
/* inherited properties */
schemamixed.sparse(true);

/*
 * section schema/embedded.js
 * http://mongoosejs.com/docs/api.html#schema-embedded-js
 */
var schemaembedded: mongoose.Schema.Types.Embedded =
  new mongoose.Schema.Types.Embedded(new mongoose.Schema(), '99');
/* inherited properties */
schemaembedded.sparse(true);

/*
 * section aggregate.js
 * http://mongoosejs.com/docs/api.html#aggregate-js
 */
var aggregate: mongoose.Aggregate<Object[]>;
aggregate = mongoose.model('ex').aggregate({ $match: { age: { $gte: 21 }}});
aggregate = new mongoose.Aggregate<Object[]>();
aggregate = new mongoose.Aggregate<Object[]>({ $project: { a: 1, b: 1 } });
aggregate = new mongoose.Aggregate<Object[]>({ $project: { a: 1, b: 1 } }, { $skip: 5 });
aggregate = new mongoose.Aggregate<Object[]>([{ $project: { a: 1, b: 1 } }, { $skip: 5 }]);
aggregate.addCursorFlag('flag', true).addCursorFlag('', false);
aggregate.allowDiskUse(true).allowDiskUse(false, []);
aggregate.append({ $project: { field: 1 }}, { $limit: 2 });
aggregate.append([{ $match: { daw: 'Logic Audio X' }} ]);
aggregate.collation({ locale: 'en_US', strength: 1 });
aggregate.cursor({ batchSize: 1000 }).exec().each(cb);
aggregate.exec().then(cb).catch(cb);
aggregate.explain(cb).then(cb).catch(cb);
aggregate.group({ _id: "$department" }).group({ _id: "$department" });
aggregate.limit(10).limit(10);
var lookupOpt = {
  from: 'users', localField:
  'userId', foreignField: '_id',
  as: 'users'
};
aggregate.lookup(lookupOpt).lookup(lookupOpt);
aggregate.match({
  department: {$in: [ "sales", "engineering"]}
});
aggregate.model(new (mongoose.model('xx'))()).model(null);
aggregate.near({
  near: [40.724, -73.997],
  distanceField: "dist.calculated",
  maxDistance: 0.008,
  query: { type: "public" },
  includeLocs: "dist.location",
  uniqueDocs: true,
  num: 5
});
aggregate.project("a b -_id");
aggregate.project({a: 1, b: 1, _id: 0});
aggregate.project({
    newField: '$b.nested'
  , plusTen: { $add: ['$val', 10]}
  , sub: {
    name: '$a'
  }
})
aggregate.project({ salary_k: { $divide: [ "$salary", 1000 ]}});
aggregate.read('primaryPreferred').read('pp');
aggregate.sample(3).sample(3);
aggregate.skip(10).skip(10);
aggregate.sort({ field: 'asc', test: -1 });
aggregate.sort('field -test');
aggregate.then(cb).catch(cb);
aggregate.unwind("tags").unwind('tags');
aggregate.unwind("a", "b", "c").unwind('tag1', 'tag2');
aggregate.unwind(
  {
    path: "tags",
    includeArrayIndex: "idx",
    preserveNullAndEmptyArrays: true
  })
  .unwind({
    path: "tags",
    includeArrayIndex: "idx",
    preserveNullAndEmptyArrays: true
  });
aggregate.unwind(
  {
    path: "a",
    includeArrayIndex: "idx",
    preserveNullAndEmptyArrays: true
  }, {
    path: "b",
    includeArrayIndex: "idx",
    preserveNullAndEmptyArrays: true
  }, {
    path: "c",
    includeArrayIndex: "idx",
    preserveNullAndEmptyArrays: true
  })
  .unwind({
    path: "tag1",
    includeArrayIndex: "idx",
    preserveNullAndEmptyArrays: true
  }, {
    path: "tag2",
    includeArrayIndex: "idx",
    preserveNullAndEmptyArrays: true
  });

/*
 * section schematype.js
 * http://mongoosejs.com/docs/api.html#schematype-js
 */
new mongoose.SchemaType('hello', 9, 'hello' );
var STSchema = new mongoose.Schema({
  mixed: mongoose.Schema.Types.Mixed
});
var schematype = schema.path('mixed');
schematype.default('default');
STSchema.path('born').get(cb).get(cb);
STSchema.path('name').index(true).index({ unique: true, sparse: true });
schematype.required(true, 'mess').required(true);
schematype.select(true).select(false);
STSchema.path('name').set(cb).set(cb);
schematype.sparse(true).sparse(true);
schematype.text(true).text(true);
schematype.unique(true).unique(true);
schematype.validate(/re/)
  .validate({}, 'error')
  .validate(cb, 'try', 'tri');

/*
 * section promise.js
 * http://mongoosejs.com/docs/api.html#promise-js
 */
var mongopromise = new mongoose.Promise();
mongopromise = new mongoose.Promise(function (err: any, arg: any) {
  arg.sparse(true);
  err.stack;
});
mongopromise = new mongoose.Promise(function (err: any, arg1: any, arg2: any) {
  arg1.sparse(true);
  arg2.sparse(true);
  err.stack;
});
mongopromise.addBack(function (err: any, arg: any) {
  err.stack;
  arg.sparse(true);
}).addBack(function (err: any, arg1: any, arg2: any) {
  err.stack;
  arg1.sparse(true);
  arg2.sparse(true);
});
mongopromise.addCallback(function (arg: any) {
  arg.sparse(true);
}).addCallback(function (arg1: any, arg2: any) {
  arg1.sparse(true);
  arg2.sparse(true);
});
mongopromise.addErrback(function (err: any) {
  err.stack;
}).addErrback(function () {});
mongopromise.catch(function (err: any) {
  err.stack;
}).catch(function () {});
mongopromise.end();
mongopromise.error(999).error([]);
mongopromise.on('init', function () {}).on('init', function () {});
mongopromise.reject({}).reject('').reject(new Error('hi'));
mongopromise.resolve(new Error('hi'), {}).resolve();
mongopromise.then(function (arg: any) {
  arg.sparse(true);
}, function (err: any) {
  err.stack;
}).then(function (arg1: any, arg2: any) {
  arg1.sparse(true);
  arg2.sparse(true);
});
mongopromise.complete(new mongoose.SchemaType('')).complete(
  new mongoose.SchemaType(''),
  new mongoose.SchemaType('')
);
/* static properties */
mongoose.Promise.ES6(function (complete: Function, error: Function) {
  complete.apply(this);
  error.apply(this);
});

/* inherited properties */
mongopromise.chain(mongopromise);
mongoose.Promise.FAILURE;
/* practical example */
mongoose.model('')
  .findOne({})
  .exec()
  .then(function (arg) {
    if (arg) {
      arg.save;
    }
    return 1;
  }).then(function (num) {
    num.toFixed;
    return new Promise<string>((resolve, reject) => {
      resolve('string');
    });
  }).then(function (str) {
    str.toLowerCase
    return (mongoose.model('')).findOne({}).exec();
  }).then(function (arg) {
    if (arg) {
      arg.save;
    }
    return 1;
  }).catch(function (err) {
    return 1;
  }).then(function (arg) {
    arg.toFixed;
    return new Promise<{a: string, b: number}>((resolve, reject) => {
      resolve({a: 'hi', b: 29});
    });
  }).then(function (arg) {
    arg.a.toLowerCase;
    arg.b.toFixed;
  });

mongoose.model('').findOne({})
  .then(function (arg) {
    if (arg) {
      arg.save;
    }
    return 2;
  }).then(function (num) {
    num.toFixed;
    return new Promise<string>((resolve, reject) => {
      resolve('str');
    });
  }).then(function (str) {
    str.toLowerCase;
  });

mongoose.model('').aggregate()
  .then(function (arg) {
    return 2;
  }).then(function (num) {
    num.toFixed;
    return new Promise<string>((resolve, reject) => {
      resolve('str');
    });
  }).then(function (str) {
    str.toLowerCase;
  });

/* pluggable promise */
(<any>mongoose).Promise = Promise;
require('mongoose').Promise = Promise;
mongoose.Promise.race;
mongoose.Promise.all;

mongoose.model('').findOne()
  .exec().then(cb);

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
MongoModel.find({}).$where('indexOf("val") !== -1').exec(function (err, docs) {
  docs[0].save();
  docs[0].__v;
});
MongoModel.findById(999, function (err, doc) {
  var handleSave = function(err: Error, product: mongoose.Document, numAffected: number) {};
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
  doc.save(function(err, product, numAffected) { product.save(); })
    .then(function(p) { p.save() }).catch(cb);
  doc.save({ validateBeforeSave: false }, function(err, product, numAffected) {
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
    { $group: { _id: null, maxBalance: { $max: '$balance' }}}
  , { $project: { _id: 0, maxBalance: 1 }}
  , cb);
MongoModel.aggregate()
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
MongoModel.distinct('url', { clicks: {$gt: 100}}, function (err, result) {
});
MongoModel.distinct('url').exec(cb);
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
MongoModel.findByIdAndUpdate(999, {}, { new: true, upsert: true }, cb);
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
MongoModel.findOne({ type: 'iphone' }).select('name').lean().exec()
.then(function(doc: ModelUser) {
  doc._id;
  doc.name;
  doc.abctest;
});
MongoModel.findOneAndRemove({}, {}, cb);
MongoModel.findOneAndRemove({}, {});
MongoModel.findOneAndRemove({}, cb);
MongoModel.findOneAndRemove({});
MongoModel.findOneAndRemove();
MongoModel.findOneAndUpdate({}, {}, {}, cb);
MongoModel.findOneAndUpdate({}, {}, {});
MongoModel.findOneAndUpdate({}, {}, { upsert: true, new: true });
MongoModel.findOneAndUpdate({}, {}, cb);
MongoModel.findOneAndUpdate({}, {});
MongoModel.findOneAndUpdate();
MongoModel.geoNear([1,3], { maxDistance : 5, spherical : true }, function(err, results, stats) {
   results[0].on('data', cb);
});
MongoModel.geoNear({ type : "Point", coordinates : [9,9] }, {
  maxDistance : 5, spherical : true
}, function(err, results, stats) {
   console.log(results);
});
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
      { path: 'company', match: { x: 1 }, select: 'name' }
    , { path: 'notes', options: { limit: 10 }, model: 'override' }
  ]
  MongoModel.populate(user, opts, cb);
  MongoModel.populate(user, opts, function (err, user) {
    console.log(user);
  });
});
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
MongoModel.update({ age: { $gt: 18 } }, { oldEnough: true }, cb);
MongoModel.update({ name: 'Tobi' }, { ferret: true }, { multi: true, arrayFilters: [{ element: { $gte: 100 } }] }, cb);
MongoModel.where('age').gte(21).lte(65).exec(cb);
MongoModel.where('age').gte(21).lte(65).where('name', /^b/i);
new (mongoModel.base.model(''))();
mongoModel.baseModelName && mongoModel.baseModelName.toLowerCase();
mongoModel.collection.$format(99);
mongoModel.collection.initializeOrderedBulkOp;
mongoModel.collection.findOne;
mongoModel.db.openSet('');
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
LocModel.count({})
  .exec(function (err, count) {
    count.toFixed();
  });
LocModel.distinct('')
  .select('-review')
  .exec(function (err, distinct) {
    distinct.concat;
  })
  .then(cb).catch(cb);
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
LocModel.findOneAndRemove()
  .exec(function (err, location) {
    if (location) {
      location.name;
    }
  });
LocModel.findOneAndUpdate().exec().then(function (arg) {
  if (arg) {
    arg.openingTimes;
  }
});
LocModel.geoSearch({}, {
  near: [1, 2],
  maxDistance: 22
}, function (err, res) { res[0].openingTimes; });
interface IStatics {
  staticMethod2: (a: number) => string;
}
interface MyDocument extends mongoose.Document {
  prop: string;
  method: () => void;
}
interface MyModel extends mongoose.Model<MyDocument> {
  staticProp: string;
  staticMethod: () => void;
}
interface ModelStruct {
  doc: MyDocument;
  model: MyModel;
  method1: (callback: (model: MyModel, doc: MyDocument) => void) => MyModel;
}
var modelStruct1 = <ModelStruct> {};
var myModel1: MyModel;
var myDocument1: MyDocument;
modelStruct1.method1(function (myModel1, myDocument1) {
  myModel1.staticProp;
  myModel1.staticMethod();
  myDocument1.prop;
  myDocument1.method();
}).staticProp.toLowerCase();
var mySchema = new mongoose.Schema({});
export var Final: MyModel = <MyModel>mongoose.connection.model<MyDocument>('Final', mySchema);
Final.findOne(function (err: any, doc: MyDocument) {
  doc.save();
  doc.remove();
  doc.model('');
});
export var Final2: MyModel = mongoose.model<MyDocument, MyModel>('Final2', mySchema);
Final2.staticMethod();
Final2.staticProp;
var final2 = new Final2();
final2.prop;
final2.method;interface ibase extends mongoose.Document {
  username: string;
}
interface extended extends ibase {
  email: string;
}
const base: mongoose.Model<ibase> = mongoose.model<ibase>('testfour')
const extended: mongoose.Model<extended> = base.discriminator<extended>('extendedS', schema);
const x = new extended({
  username: 'hi',     // required in baseSchema
  email: 'beddiw',    // required in extededSchema
});
