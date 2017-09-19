// Type definitions for pouch-redux-middleware 0.5
// Project: https://github.com/pgte/pouch-redux-middleware
// Definitions by: Adam Charron <https://github.com/charrondev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Dispatch, Action, Middleware } from 'redux';
import PouchDB from 'pouchdb';

export interface Document {
  _id: any;
  [field: string]: any;
}

export interface Path {
  path: string;
  db: PouchDB.Database<any>;
  scheduleRemove?(doc: Document): void;
  scheduleInset?(doc: Document): void;
  propagateDelete?(doc: Document, dispatch: Dispatch<any>): void;
  propagateInsert?(doc: Document, dispatch: Dispatch<any>): void;
  propagateUpdate?(doc: Document, dispatch: Dispatch<any>): void;
  handleResponse?(err: Error, data: any, errorCallback: (err: Error) => void): void;
  queue?(...args: any[]): any;
  docs?: any;
  actions: {
    remove(doc: Document): Action;
    update(doc: Document): Action;
    insert(doc: Document): Action;
  };
}

export default function PouchMiddlewareFactory(paths?: Path[] | Path): Middleware;
