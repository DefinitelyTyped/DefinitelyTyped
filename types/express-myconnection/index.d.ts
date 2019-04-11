// Type definitions for express-myconnection v1.0.4
// Project: https://www.npmjs.org/package/express-myconnection
// Definitions by: Michael Ferris <https://github.com/Cellule>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="express" />
/// <reference types="mysql" />

declare namespace mysql {
  export interface Connection {}
  export interface MysqlError {}
}

declare namespace Express {

  export interface Request {
    getConnection?: (callback: (err: mysql.MysqlError, connection: mysql.Connection) => void) => void;
  }
}

declare module "express-myconnection" {
  import express = require('express');
  import mysql = require('mysql');

  function connection(mysqlInstance: (typeof mysql), dbConfig: mysql.ConnectionConfig, strategy: string): express.RequestHandler;

  export = connection;
}
