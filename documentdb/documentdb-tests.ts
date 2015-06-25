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

var dbQuerySpec: docDB.SqlQuerySpec = {query: 'SELECT * FROM d WHERE d.meta = @meta', parameters: [{name: '@meta', value: {creator: 'John Smith', type: 'documentdb'}}]};
docDBClient.queryDatabases(dbQuerySpec).toArray((error, result) => {
    
    if (error) {
        throw new Error(error.body);
    }
    else {
        if (result.length < 1) {
            throw new Error('Database foo not found');
        }
        else {
            console.log('Found database: ' + result[0].id);
        }
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

var trigger: docDB.Trigger = {
    id: 'trigger-one',
    body: function () {
        console.log('bar');
    },
    triggerType: 'pre',
    triggerOperation: 'all'
};

docDBClient.createTrigger('collection', trigger, undefined, (error, result) => {
    
    if (error) {
        throw new Error(error.body);
    }
    else {
        console.log('Created trigger: ' + result.id);
    }
});

var triggerQuerySpec: docDB.SqlQuerySpec = {query: 'SELECT * FROM t WHERE t.id = @id', parameters: [{name: '@id', value: 'trigger-foo'}]};
docDBClient.queryTriggers('collection', triggerQuerySpec).toArray((error, result) => {
    
    if (error) {
        throw new Error(error.body);
    }
    else {
        if (result.length < 1) {
            throw new Error('Trigger trigger-foo not found');
        }
        else {
            console.log('Found trigger: ' + result[0].id);
        }
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
        
        docDBClient.replaceDocument(result._self, document, undefined, (subError, subResult) => {
            
            if (subError) {
                throw new Error(subError.body);
            }
            else {
                console.log('Replaced document: ' + subResult.id);
            }
        })
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