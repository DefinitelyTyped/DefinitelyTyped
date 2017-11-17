import * as redux from 'redux';
import makePouchMiddleware, { Document, Path } from 'pouch-redux-middleware';
import * as PouchDB from 'pouchdb';

const types = {
    DELETE_TODO: 'delete-todo',
    INSERT_TODO: 'insert-todo',
    UPDATE_TODO: 'update-todo'
};

const path: Path = {
    path: "/test",
    db: new PouchDB('test'),
    actions: {
        remove: doc => ({ type: types.DELETE_TODO, id: doc._id }),
        insert: doc => ({ type: types.INSERT_TODO, todo: doc }),
        update: doc => ({ type: types.UPDATE_TODO, todo: doc }),
    }
};

const middleware: redux.Middleware = makePouchMiddleware(path);
const otherMiddleware: redux.Middleware = makePouchMiddleware([path, path, path]);
