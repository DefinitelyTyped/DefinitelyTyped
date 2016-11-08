/// <reference path="./pouchdb-upsert.d.ts" />

import * as pouchdbUpsert from 'pouchdb-upsert';
PouchDB.plugin(pouchdbUpsert);

namespace PouchDBUpsertTests {
  type UpsertDocModel = { _id: 'test-doc1', name: 'test' };
  let docToUpsert: PouchDB.Core.Document<UpsertDocModel>;
  const db = new PouchDB<UpsertDocModel>();

  function testUpsert_WithPromise_AndReturnDoc() {
    db.upsert(docToUpsert._id, (doc: PouchDB.Core.Document<UpsertDocModel>) => {
      // Make some updates....
      return doc;
    }).then((res: PouchDB.Core.Response) => {
    });
  }

  function testUpsert_WithPromise_AndReturnBoolean() {
    db.upsert(docToUpsert._id, (doc: PouchDB.Core.Document<UpsertDocModel>) => {
      // Make some updates....
      return false;
    }).then((res: PouchDB.Core.Response) => {
    });
  }

  function testUpsert_WithCallback_AndReturnDoc() {
    db.upsert(docToUpsert._id, (doc: PouchDB.Core.Document<UpsertDocModel>) => {
      // Make some updates....
      return doc;
    }, (res: PouchDB.Core.Response) => {});
  }

  function testUpsert_WithCallback_AndReturnBoolean() {
    // callback return boolean
    db.upsert(docToUpsert._id, (doc: PouchDB.Core.Document<UpsertDocModel>) => {
      // Make some updates....
      return false;
    }, (res: PouchDB.Core.Response) => {});
  }

  function testPutIfNotExists_WithPromise() {
    db.putIfNotExists(docToUpsert).then( (res: PouchDB.Core.Response) => {});
  }

  function testPutIfNotExists_WithCallback() {
    db.putIfNotExists(docToUpsert, (res: PouchDB.Core.Response) => {});
  }
}
