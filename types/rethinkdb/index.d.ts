// Type definitions for RethinkDB 2.3.x client driver
// Project: http://rethinkdb.com/
// Definitions by: Bazyli Brzóska <https://github.com/niieani>
// Definitions by: Marshall Cottrell <https://github.com/marshall007>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Reference: https://rethinkdb.com/api/javascript/


import core from 'rethinkdb-core';

declare const rethinkdb: rethinkdb.ReqlClient;

declare namespace rethinkdb {

    export interface ReqlClient extends core.ReqlClient { }
    
    export interface Connection extends core.Connection { }
    
    export interface CursorResult<T> extends core.CursorResult<T> { }
    export interface ArrayResult<T> extends core.ArrayResult<T> { }

}

export = rethinkdb;