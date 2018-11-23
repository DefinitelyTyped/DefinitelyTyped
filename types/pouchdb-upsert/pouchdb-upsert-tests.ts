import * as pouchdbUpsert from 'pouchdb-upsert';
PouchDB.plugin(pouchdbUpsert);

interface UpsertDocModel {
  name: string;
  readonly?: boolean;
}

declare const docToUpsert: PouchDB.Core.Document<UpsertDocModel>;
const db = new PouchDB<UpsertDocModel>();

function testUpsert_WithPromise_AndReturnDoc() {
  db.upsert(docToUpsert._id, (doc) => {
    // Make some updates....
    // `doc` may be empty if the document didn't already exist, so we have to
    // cast it to the type containing the required fields.  If the document type
    // had all optional fields, the cast would not be necessary.
    return doc as UpsertDocModel;
  }).then((res: PouchDB.UpsertResponse) => {
  });
}

function testUpsert_WithPromise_AndReturnFalsey() {
  db.upsert(docToUpsert._id, (doc) => {
    if (doc.readonly)
      return false;
    // Make some updates....
    return doc as UpsertDocModel;
  }).then((res: PouchDB.UpsertResponse) => {
  });
}

function testUpsert_WithPromise_AndReturnNewObject() {
  // callback return boolean
  db.upsert(docToUpsert._id, (doc) => {
    return {name: 'test', readonly: true};
  }).then((res: PouchDB.UpsertResponse) => {
  });
}

function testUpsert_WithCallback_AndReturnDoc() {
  db.upsert(docToUpsert._id, (doc) => {
    // Make some updates....
    return doc as UpsertDocModel;
  }, (error: PouchDB.Core.Error, res: PouchDB.UpsertResponse) => {});
}

function testUpsert_WithCallback_AndReturnFalsey() {
  // callback return boolean
  db.upsert(docToUpsert._id, (doc) => {
    if (doc.readonly)
      return false;
    // Make some updates....
    return doc as UpsertDocModel;
  }, (error: PouchDB.Core.Error, res: PouchDB.UpsertResponse) => {});
}

function testUpsert_WithCallback_AndReturnNewObject() {
  // callback return boolean
  db.upsert(docToUpsert._id, (doc) => {
    return {name: 'test', readonly: true};
  }, (error: PouchDB.Core.Error, res: PouchDB.UpsertResponse) => {});
}

function testPutIfNotExists_WithPromise() {
  db.putIfNotExists(docToUpsert).then((res: PouchDB.UpsertResponse) => {});
}

function testPutIfNotExists_WithCallback() {
  db.putIfNotExists(docToUpsert, (error: PouchDB.Core.Error, res: PouchDB.UpsertResponse) => {});
}
