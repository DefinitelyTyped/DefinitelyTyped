// Type definitions for Knex.js
// Project: https://github.com/tgriesser/knex
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "knex" {
  interface KnexStatic {
    Clients: Clients;
    new(): Knex;
  }

  interface Knex {

  }

  interface Clients {
    "mysql": Function;
    "mysql2": Function;
    "maria": Function;
    "mariadb": Function;
    "mariasql": Function;
    "oracle": Function;
    "pg": Function;
    "postgres": Function;
    "postgresql": Function;
    "sqlite": Function;
    "sqlite3": Function;
    "strong-oracle": Function;
    "websql": Function;
    "fdbsql": Function;
  }


  var _: KnexStatic;
  export = _;
}
