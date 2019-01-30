/// <reference path="sharedb.d.ts" />
import * as WS from 'ws';
import * as ShareDB from './sharedb';

export class Connection {
    constructor(ws: WebSocket | WS);
    get(collectionName: string, documentID: string): Doc;
    createFetchQuery(collectionName: string, query: string, options: {results?: Query[]}, callback: (err: Error, results: any) => any): Query;
    createSubscribeQuery(collectionName: string, query: string, options: {results?: Query[]}, callback: (err: Error, results: any) => any): Query;
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
