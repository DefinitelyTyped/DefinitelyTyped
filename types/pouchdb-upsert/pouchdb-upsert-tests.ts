import * as pouchdbUpsert from 'pouchdb-upsert';
PouchDB.plugin(pouchdbUpsert);

interface UpsertDocModel {
   name: string;
   readonly?: boolean;
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

function testUpsert_WithPromise_AndReturnFalsey() {
  db.upsert<UpsertDocModel>(docToUpsert._id, (doc: PouchDB.Core.Document<UpsertDocModel>) => {
    if (doc.readonly)
      return false;
    // Make some updates....
    return doc;
  }).then((res: PouchDB.UpsertResponse) => {
  });
}

function testUpsert_WithPromise_AndReturnNewObject() {
  // callback return boolean
  db.upsert<UpsertDocModel>(docToUpsert._id, (doc: PouchDB.Core.Document<UpsertDocModel>) => {
    return {name: 'test', readonly: true};
  }).then((res: PouchDB.UpsertResponse) => {
  });
}

function testUpsert_WithCallback_AndReturnDoc() {
  db.upsert<UpsertDocModel>(docToUpsert._id, (doc: PouchDB.Core.Document<UpsertDocModel>) => {
    // Make some updates....
    return doc;
  }, (res: PouchDB.UpsertResponse) => {});
}

function testUpsert_WithCallback_AndReturnFalsey() {
  // callback return boolean
  db.upsert<UpsertDocModel>(docToUpsert._id, (doc: PouchDB.Core.Document<UpsertDocModel>) => {
    if (doc.readonly)
      return false;
    // Make some updates....
    return doc;
  }, (res: PouchDB.UpsertResponse) => {});
}

function testUpsert_WithCallback_AndReturnNewObject() {
  // callback return boolean
  db.upsert<UpsertDocModel>(docToUpsert._id, (doc: PouchDB.Core.Document<UpsertDocModel>) => {
    return {name: 'test', readonly: true};
  }, (res: PouchDB.UpsertResponse) => {});
}

function testPutIfNotExists_WithPromise() {
  db.putIfNotExists(docToUpsert).then((res: PouchDB.UpsertResponse) => {});
}

function testPutIfNotExists_WithCallback() {
  db.putIfNotExists(docToUpsert, (res: PouchDB.UpsertResponse) => {});
}
