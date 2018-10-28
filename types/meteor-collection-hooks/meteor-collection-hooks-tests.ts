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
  transform: () => {}
};

Collection.before.find((userId: string, selector: Mongo.Selector, options: { multi?: boolean; upsert?: boolean; }) => {});
Collection.before.findOne((userId: string, selector: Mongo.Selector, options: { multi?: boolean; upsert?: boolean; }) => {});
Collection.before.insert((userId: string, doc: Model) => {});
Collection.before.remove((userId: string, doc: Model) => {});
Collection.before.update((userId: string, doc: Model, fieldNames: string[], modifier: Mongo.Modifier, options: { multi?: boolean; upsert?: boolean; }) => {});
Collection.before.upsert((userId: string, doc: Model, selector: Mongo.Selector, modifier: Mongo.Modifier, options: { multi?: boolean; upsert?: boolean; }) => {});

Collection.after.find((userId: string, selector: Mongo.Selector, options: { multi?: boolean; upsert?: boolean; }, cursor: Mongo.Cursor<Model>) => {});
Collection.after.findOne((userId: string, selector: Mongo.Selector, options: { multi?: boolean; upsert?: boolean; }, doc: Model) => {});
Collection.after.insert((userId: string, doc: Model) => {});
Collection.after.remove((userId: string, doc: Model) => {});
Collection.after.update((userId: string, doc: Model, fieldNames: string[], modifier: Mongo.Modifier, options: { multi?: boolean; upsert?: boolean; }) => {}, { fetchPrevious: true });
Collection.after.upsert((userId: string, doc: Model, selector: Mongo.Selector, modifier: Mongo.Modifier, options: { multi?: boolean; upsert?: boolean; }) => {});

cursor = Collection.direct.find({ _id: doc._id }, { sort: { createdAt: -1 }, skip: 5, limit: 5, fields: { createdAt: 1 }, reactive: true, transform: () => {} });
cursor = Collection.direct.find(doc._id, { sort: { createdAt: -1 }, skip: 5, limit: 5, fields: { createdAt: 1 }, reactive: true, transform: () => {} });

doc = Collection.direct.findOne({ _id: doc._id }, { sort: { createdAt: -1 }, skip: 5, fields: { createdAt: 1 }, reactive: true, transform: () => {} });
doc = Collection.direct.findOne(doc._id, { sort: { createdAt: -1 }, skip: 5, fields: { createdAt: 1 }, reactive: true, transform: () => {} });

doc._id = Collection.direct.insert(doc, () => {});

doc.value = Collection.direct.remove({ _id: doc._id }, () => {});
doc.value = Collection.direct.remove(doc._id, () => {});

doc.value = Collection.direct.update({ _id: doc._id }, { $inc: { votes: 2 } }, { multi: true, upsert: true }, () => {});
doc.value = Collection.direct.update(doc._id, { $inc: { votes: 2 } }, { multi: true, upsert: true }, () => {});

let { numberAffected, insertedId }: { numberAffected?: number; insertedId?: string; } = Collection.direct.upsert(doc._id, { $inc: { votes: 2 } }, { multi: true }, () => {});

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
