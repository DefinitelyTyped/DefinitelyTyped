/// <reference path="azure-mobile-apps.d.ts" />

import express = require('express');
import mobileApps = require('azure-mobile-apps');
import logger = require('azure-mobile-apps/src/logger');
import queries = require('azure-mobile-apps/src/query');

var app = express(),
    mobileApp = mobileApps();

// various configuration permutations   
mobileApps({
    debug: true,
    data: {
        provider: 'mssql',
        server: '',
        user: '',
        database: '',
        password: ''
    }
});

mobileApps({
    data: {
        provider: 'memory'
    }
})

// it would be nice to integrate with winston
mobileApps({ logging: { level: 'silly', transports: [{}] } })

// various custom middleware syntaxes     
mobileApp.use(function (req: any, res: any, next: any) { next(); });
mobileApp.use([function () {}, function () {}]);
mobileApp.use(function () {}, function () {});
mobileApp.use(function () {}).use(function () {});

// basic syntax for tables and api
mobileApp.tables.add('todoitem');
mobileApp.tables.add('todoitem', { authorize: true });
mobileApp.tables.add('todoitem', mobileApps.table());
mobileApp.tables.import('tables');
mobileApp.api.add('api', { authorize: true, get: function () {}, delete: function () {} });
mobileApp.api.import('api');

// Express.Table, instantiated from the mobile app
var table = mobileApp.table()
table.use(function (req: Express.Request, res: Express.Response, next: any) {
    next(new Error());
});
table.use([function () {}, function () {}]);
table.read(function (context: Azure.MobileApps.Context) {
    context.query.where({ p1: 'test' });
    return context.execute()
        .then(function (result: any) {
            return result;
        })
        .catch(function (error: any) { })
        .then(function () {});
});
table.insert(function (context: Azure.MobileApps.Context) {
    context.query.id = 'anotherId';
    context.query.single = true;
    context.item.userId = context.user.id;    
    context.push.send('tag', {}, function (error, result) {});
    context.push.gcm.send('tag', {}, function (error, result) {});
    context.push.apns.send('tag', { payload: { } }, function (error, result) {});
    context.push.wns.sendToastText01('tag', '', { headers: { } }, function (error, result) {});
});
table.read.use(function () {});
table.read.use([function () {}, function () {}]);
table.read.use(function () {}, function () {});
table.use(function () {}).use(function () {}).read(function () {}).use(function () {})

// Express.Table, instantiated from the static require('azure-mobile-apps').table()
// This is going to be interesting if we ever support more than one provider
var table2 = mobileApps.table();
table2.read(function (context: Azure.MobileApps.Context) {})

// Logger
logger.silly('test', 'message');
logger.error('Something happened', new Error());
mobileApps.logger.debug('a debug message')

// Query
queries.create('table').where({ x: 10 }).select('col1,col2');
mobileApps.query.create('table');