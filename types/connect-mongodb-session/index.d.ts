import session = require("express-session");
import { MongoClient, MongoClientOptions } from "mongodb";

export = ConnectMongoDBSession;

declare function ConnectMongoDBSession(fn: typeof session): typeof ConnectMongoDBSession.MongoDBStore;

declare namespace ConnectMongoDBSession {
    class MongoDBStore extends session.Store {
        constructor(connection?: MongoDBSessionOptions, callback?: (error: Error) => void);
        client: MongoClient;

        get(sid: string, callback: (err: any, session?: session.SessionData | null) => void): void;
        set(sid: string, session: session.SessionData, callback?: (err?: any) => void): void;
        destroy(sid: string, callback?: (err?: any) => void): void;
        all(
            callback: (err: any, obj?: session.SessionData[] | { [sid: string]: session.SessionData } | null) => void,
        ): void;
        clear(callback?: (err?: any) => void): void;
    }

    interface MongoDBSessionOptions {
        uri: string;
        collection: string;
        expires?: number | undefined;
        databaseName?: string | undefined;
        connectionOptions?: MongoClientOptions | undefined;
        idField?: string | undefined;
        expiresKey?: string | undefined;
        expiresAfterSeconds?: number | undefined;
    }
}
