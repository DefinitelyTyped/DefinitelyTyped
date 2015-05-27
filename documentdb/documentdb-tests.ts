/// <reference path="documentdb.d.ts" />

import docDB = require('documentdb');
var docDBClient = new docDB.DocumentClient('host', { masterKey: 'masterKey' });

docDBClient.createDatabase({ id: 'foo' }, undefined, (error, result) => {

    if (error) {
        throw new Error(error.body);
    }
    else {
        console.log('Created database: ' + result.id);
    }
});

docDBClient.createCollection('database', { id: 'foo' }, undefined, (error, result) => {

    if (error) {
        throw new Error(error.body);
    }
    else {
        console.log('Created collection: ' + result.id);
    }
});

var procedure: docDB.Procedure = {
    id: 'procedure-one',
    body: function () {
        console.log('foo');
    }
};

docDBClient.createStoredProcedure('collection', procedure, undefined, (error, result) => {

    if (error) {
        throw new Error(error.body);
    }
    else {
        console.log('Created procedure: ' + result.id);
    }
});

var document: docDB.NewDocument<{ val: string }> = {
    id: '10'
};

docDBClient.createDocument('collection', document, undefined, (error, result) => {

    if (error) {
        throw new Error(error.body);
    }
    else {
        console.log('Created document: ' + result.id);
    }
});

docDBClient.executeStoredProcedure('procedure', [10, 'foo'], (error, result) => {

    if (error) {
        throw new Error(error.body);
    }
    else {
        console.log('Procedure result: ' + result);
    }
});

