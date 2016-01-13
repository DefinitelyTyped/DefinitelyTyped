/// <reference path="azure-mobile-apps.d.ts" />

var app = require('express')(),
    mobileApp = require('azure-mobile-apps')({
        debug: true,
        data: {
            provider: 'mssql',
            server: '',
            user: '',
            database: '',
            password: ''
        }
    })  
    
mobileApp.tables.add('todoitem', {
    authorize: true
});

mobileApp.api.add('customApi', {
    authorize: true,
    post: function (req: any, res: any, next: any) {
        next();
    },
    patch: [function (req: any, res: any, next: any) {}, function (req: any, res: any, next: any) {}]
})

mobileApp.use(function (req: any, res: any, next: any) {
    next(); 
});

var table = mobileApp.table()
table.read(function (context: AzureMobileApps.Context) {
    return context.execute().then(function (result: any) {
        return result;
    });
});

table.use(function (req: any, res: any, next: any) {
    next(new Error());
});

var logger = require('azure-mobile-apps/src/logger');
logger.silly('test', 'message');
logger.error('Something happened', new Error());

var queries = require('azure-mobile-apps/src/query');
queries.create('table').where({ x: 10 }).select('col1,col2');