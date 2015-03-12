// Type definitions for node_acl 0.4.7
// Project: https://github.com/optimalbits/node_acl
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="acl.d.ts" />
/// <reference path="../mongodb/mongodb.d.ts" />

declare module "acl" {
  import mongo = require('mongodb');

  interface AclStatic {
    mongodbBackend: MongodbBackendStatic;
  }

  interface MongodbBackend extends Backend<Callback> { }
  interface MongodbBackendStatic {
    new(db: mongo.Db, prefix: string, useSingle: boolean): MongodbBackend;
    new(db: mongo.Db, prefix: string): MongodbBackend;
    new(db: mongo.Db): MongodbBackend;
  }
}
