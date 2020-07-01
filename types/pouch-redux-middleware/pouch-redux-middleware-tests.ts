import * as redux from 'redux';
import makePouchMiddleware, { Document, Path } from 'pouch-redux-middleware';
import PouchDB = require('pouchdb');

const types = {
    DELETE_TODO: 'delete-todo',
    BATCH_INSERT_TODO: 'batch-insert-todo',
    INSERT_TODO: 'insert-todo',
    UPDATE_TODO: 'update-todo'
};

const path: Path<{}> = {
    path: "/test",
    db: new PouchDB('test'),
    actions: {
        remove: doc => ({ type: types.DELETE_TODO, id: doc._id }),
        batchInsert: doc => ({ type: types.BATCH_INSERT_TODO, todo: doc }),
        insert: doc => ({ type: types.INSERT_TODO, todo: doc }),
        update: doc => ({ type: types.UPDATE_TODO, todo: doc }),
    },
    initialBatchDispatched: (error?: Error) => {},
};

const middleware: redux.Middleware = makePouchMiddleware<{}>(path);
const otherMiddleware: redux.Middleware = makePouchMiddleware([path, path, path]);
