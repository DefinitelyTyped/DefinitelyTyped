import * as pouchdbUpsert from 'pouchdb-upsert';
PouchDB.plugin(pouchdbUpsert);

interface UpsertDocModel {
   _id: 'test-doc1';
   name: 'test';
}
declare const docToUpsert: PouchDB.Core.Document<UpsertDocModel>;
const db = new PouchDB<UpsertDocModel>();

function testUpsert_WithPromise_AndReturnDoc() {
  db.upsert(docToUpsert._id, (doc: PouchDB.Core.Document<UpsertDocModel>) => {
    // Make some updates....
    return doc;
  }).then((res: PouchDB.UpsertResponse) => {
  });
}

function testUpsert_WithPromise_AndReturnBoolean() {
  db.upsert<UpsertDocModel>(docToUpsert._id, (doc: PouchDB.Core.Document<UpsertDocModel>) => {
    // Make some updates....
    return false;
  }).then((res: PouchDB.UpsertResponse) => {
  });
}

function testUpsert_WithCallback_AndReturnDoc() {
  db.upsert<UpsertDocModel>(docToUpsert._id, (doc: PouchDB.Core.Document<UpsertDocModel>) => {
    // Make some updates....
    return doc;
  }, (res: PouchDB.UpsertResponse) => {});
}

function testUpsert_WithCallback_AndReturnBoolean() {
  // callback return boolean
  db.upsert<UpsertDocModel>(docToUpsert._id, (doc: PouchDB.Core.Document<UpsertDocModel>) => {
    // Make some updates....
    return false;
  }, (res: PouchDB.UpsertResponse) => {});
}

function testPutIfNotExists_WithPromise() {
  db.putIfNotExists(docToUpsert).then((res: PouchDB.UpsertResponse) => {});
}

function testPutIfNotExists_WithCallback() {
  db.putIfNotExists(docToUpsert, (res: PouchDB.UpsertResponse) => {});
}
