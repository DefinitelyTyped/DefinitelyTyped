/// <reference path="sharedb.d.ts" />
import * as WS from 'ws';
import * as ShareDB from './sharedb';
import Agent = require('./agent');

export class Connection {
    constructor(ws: WebSocket | WS);

    // This direct reference from connection to agent is not used internal to
    // ShareDB, but it is handy for server-side only user code that may cache
    // state on the agent and read it in middleware
    agent: Agent | null;
    get(collectionName: string, documentID: string): Doc;
    createFetchQuery(collectionName: string, query: any, options: {results?: Query[]}, callback: (err: Error, results: any[]) => void): Query;
    createSubscribeQuery(collectionName: string, query: any, options: {results?: Query[]}, callback: (err: Error, results: any[]) => void): Query;
}
export type Doc = ShareDB.Doc;
export type Query = ShareDB.Query;
export type Error = ShareDB.Error;
export type Op = ShareDB.Op;
export type AddNumOp = ShareDB.AddNumOp;
export type ListMoveOp = ShareDB.ListMoveOp;
export type ListInsertOp = ShareDB.ListInsertOp;
export type ListDeleteOp = ShareDB.ListDeleteOp;
export type ListReplaceOp = ShareDB.ListReplaceOp;
export type StringInsertOp = ShareDB.StringInsertOp;
export type StringDeleteOp = ShareDB.StringDeleteOp;
export type ObjectInsertOp = ShareDB.ObjectInsertOp;
export type ObjectDeleteOp = ShareDB.ObjectDeleteOp;
export type ObjectReplaceOp = ShareDB.ObjectReplaceOp;
export type SubtypeOp = ShareDB.SubtypeOp;

export type Path = ShareDB.Path;
export type ShareDBSourceOptions = ShareDB.ShareDBSourceOptions;

export const types: ShareDB.Types;
