/// <reference types="express" />
/// <reference types="mysql" />

declare namespace mysql {
    export interface Connection {}
    export interface MysqlError {}
}

declare namespace Express {
    export interface Request {
        getConnection?: ((callback: (err: mysql.MysqlError, connection: mysql.Connection) => void) => void) | undefined;
    }
}

declare module "express-myconnection" {
    import express = require("express");
    import mysql = require("mysql");

    function connection(
        mysqlInstance: typeof mysql,
        dbConfig: mysql.ConnectionConfig,
        strategy: string,
    ): express.RequestHandler;

    export = connection;
}
