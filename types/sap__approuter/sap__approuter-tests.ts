import approuter = require('@sap/approuter');

let ar = approuter();

ar.beforeRequestHandler
    .use('/my-ext', function myMiddleware(req, res, next) {
        res.end('Request handled by my extension!');
    });
ar.start();
