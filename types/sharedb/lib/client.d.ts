/// <reference path="sharedb.d.ts" />
import * as WebSocket from 'ws';
import * as ShareDB from './sharedb';

export class Connection {
    constructor(ws: WebSocket);
    get(collectionName: string, documentID: string): Doc;
    createFetchQuery(collectionName: string, query: string, options: {results?: Query[]}, callback: (err: Error, results: any) => any): Query;
    createSubscribeQuery(collectionName: string, query: string, options: {results?: Query[]}, callback: (err: Error, results: any) => any): Query;
}
export type Doc = ShareDB.Doc;
export type Query = ShareDB.Query;
