/// <reference types="meteor-typings" />

interface Model {
  _id: string;
  value: number;
}

const Collection = new Mongo.Collection<Model>("test_collection");
let cursor: Mongo.Cursor<Model>;
let doc: Model;

const selector = {
  sort: { createdAt: -1 },
  skip: 5,
  limit: 5,
  fields: { createdAt: 1 },
  reacrive: true,
  transform: function () {}
};

Collection.before.find(function (userId: string, selector: Mongo.Selector, options: { multi?: boolean; upsert?: boolean; }): void {});
Collection.before.findOne(function (userId: string, selector: Mongo.Selector, options: { multi?: boolean; upsert?: boolean; }): void {});
Collection.before.insert(function (userId: string, doc: Model): void {});
Collection.before.remove(function (userId: string, doc: Model): void {});
Collection.before.update(function (userId: string, doc: Model, fieldNames: string[], modifier: Mongo.Modifier, options: { multi?: boolean; upsert?: boolean; }): void {});
Collection.before.upsert(function (userId: string, doc: Model, selector: Mongo.Selector, modifier: Mongo.Modifier, options: { multi?: boolean; upsert?: boolean; }): void {});

Collection.after.find(function (userId: string, selector: Mongo.Selector, options: { multi?: boolean; upsert?: boolean; }, cursor: Mongo.Cursor<Model>): void {});
Collection.after.findOne(function (userId: string, selector: Mongo.Selector, options: { multi?: boolean; upsert?: boolean; }, doc: Model): void {});
Collection.after.insert(function (userId: string, doc: Model): void {});
Collection.after.remove(function (userId: string, doc: Model): void {});
Collection.after.update(function (userId: string, doc: Model, fieldNames: string[], modifier: Mongo.Modifier, options: { multi?: boolean; upsert?: boolean; }): void {}, { fetchPrevious: true });
Collection.after.upsert(function (userId: string, doc: Model, selector: Mongo.Selector, modifier: Mongo.Modifier, options: { multi?: boolean; upsert?: boolean; }): void {});

cursor = Collection.direct.find({ _id: doc._id }, { sort: { createdAt: -1 }, skip: 5, limit: 5, fields: { createdAt: 1 }, reactive: true, transform: function () {} });
cursor = Collection.direct.find(doc._id, { sort: { createdAt: -1 }, skip: 5, limit: 5, fields: { createdAt: 1 }, reactive: true, transform: function () {} });

doc = Collection.direct.findOne({ _id: doc._id }, { sort: { createdAt: -1 }, skip: 5, fields: { createdAt: 1 }, reactive: true, transform: function () {} });
doc = Collection.direct.findOne(doc._id, { sort: { createdAt: -1 }, skip: 5, fields: { createdAt: 1 }, reactive: true, transform: function () {} });

doc._id = Collection.direct.insert(doc, function () {});

doc.value = Collection.direct.remove({ _id: doc._id }, function () {});
doc.value = Collection.direct.remove(doc._id, function () {});

doc.value = Collection.direct.update({ _id: doc._id }, { $inc: { votes: 2 } }, { multi: true, upsert: true }, function () {});
doc.value = Collection.direct.update(doc._id, { $inc: { votes: 2 } }, { multi: true, upsert: true }, function () {});

let { numberAffected, insertedId }: { numberAffected?: number; insertedId?: string; } = Collection.direct.upsert(doc._id, { $inc: { votes: 2 } }, { multi: true }, function () {});

Collection.hookOptions = {
  before: {
    all: { fetchPrevious: true },
    find: { fetchPrevious: true },
    findOne: { fetchPrevious: true },
    insert: { fetchPrevious: true },
    remove: { fetchPrevious: true },
    update: { fetchPrevious: true },
    upsert: { fetchPrevious: true }
  },
  after: {
    all: { fetchPrevious: true },
    find: { fetchPrevious: true },
    findOne: { fetchPrevious: true },
    insert: { fetchPrevious: true },
    remove: { fetchPrevious: true },
    update: { fetchPrevious: true },
    upsert: { fetchPrevious: true }
  },
  all: {
    all: { fetchPrevious: true },
    find: { fetchPrevious: true },
    findOne: { fetchPrevious: true },
    insert: { fetchPrevious: true },
    remove: { fetchPrevious: true },
    update: { fetchPrevious: true },
    upsert: { fetchPrevious: true }
  }
};