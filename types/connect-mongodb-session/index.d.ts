// Type definitions for connect-mongodb-session
// Project: https://github.com/kcbanner/connect-mongodb-session
// Definitions by: Nattapong Sirilappanich <https://github.com/NattapongSiri>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="express-session" />

import session = require('express-session');
import * as express from 'express';
import {MongoClientOptions} from 'mongodb'

declare function connect(fn : (options?: session.SessionOptions) => express.RequestHandler) : connectMongodbSession.MongoDBStore

declare namespace connectMongodbSession {
    export interface MongoDBStore extends session.Store {
        new(connection?: ConnectionInfo, callback?: (error) => void)
    }

    export interface ConnectionInfo {
        idField? : string
        collection : string
        connectionOptions?: MongoClientOptions
        databaseName?: string
        expires?: number
        uri : string
    }
}

export = connect