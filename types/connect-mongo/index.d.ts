// Type definitions for connect-mongo
// Project: https://github.com/kcbanner/connect-mongo
// Definitions by: Mizuki Yamamoto <https://github.com/Syati>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="express-session" />

import * as express from 'express';
import * as mongoose from 'mongoose';
import * as mongodb from 'mongodb';
import * as session from 'express-session';

declare function connectMongo(connect: (options?: session.SessionOptions) => express.RequestHandler): connectMongo.MongoStoreFactory;

declare namespace connectMongo {

    export interface DefaultOptions {
        /**
         * The hostname of the database you are connecting to.
         * (Default: '127.0.0.1')
         */
        host?: string;

        /**
         * The port number to connect to.
         * (Default: 27017)
         */
        port?: string;

        /**
         * (Default: false)
         */
        autoReconnect?: boolean;

        /**
         * (Default: true)
         */
        ssl?: boolean;

        /**
         * (Default: 1)
         */
        w?: number;

        /**
         * The colletion of the database you are connecting to.
         * (Default: sessions)
         */
        collection?: string;

        /**
         * Serialize sessions using JSON.stringify and deserialize them with JSON.parse.
         * (Default: true)
         */
        stringify?: boolean;

        /**
         * Default: false
         */
        hash?: boolean;

        /**
         * Default: 14 days (60 * 60 * 24 * 14)
         */
        ttl?: number;

        /**
         * Automatically remove expired sessions.
         * (Default: 'native')
         */
        autoRemove?: string;

        /**
         * (Default: 10)
         */
        autoRemoveInterval?: number;

        /**
         * don't save session if unmodified
         */
        touchAfter?: number;
    }

    export interface MongoUrlOptions extends DefaultOptions {
        url: string;
        mongoOptions?: mongoose.ConnectionOptions;
    }

    export interface MogooseConnectionOptions extends DefaultOptions {
        mongooseConnection: mongoose.Connection;
    }

    export interface NativeMongoOptions extends DefaultOptions {
        db: mongodb.Db;
    }

    export interface NativeMongoPromiseOptions extends DefaultOptions {
        dbPromise: Promise<mongodb.Db>;
    }

    export interface MongoStoreFactory {
        new(options: MongoUrlOptions | MogooseConnectionOptions | NativeMongoOptions | NativeMongoPromiseOptions): MongoStore;
    }

    export class MongoStore extends session.Store {
        get: (sid: string, callback: (err: any, session: Express.SessionData | null) => void) => void;
        set: (sid: string, session: Express.SessionData, callback?: (err: any) => void) => void;
        destroy: (sid: string, callback?: (err: any) => void) => void;
        length: (callback: (err: any, length: number) => void) => void;
        clear: (callback?: (err?: any) => void) => void;
        touch: (sid: string, session: Express.SessionData, callback?: (err: any) => void) => void;
    }
}

export = connectMongo;
