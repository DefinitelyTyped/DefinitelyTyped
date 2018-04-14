import http = require('http');
import https = require('https');
import express = require('express');
import expressWs = require('express-ws');

const dummyApp = express();
const httpServer = http.createServer(dummyApp);
const httpsServer = https.createServer({}, dummyApp);

expressWs(dummyApp); // optional server argument
expressWs(dummyApp, httpsServer); // https server allowed
expressWs(dummyApp, httpServer, {
    leaveRouterUntouched: false,
    // ws server options
    wsOptions: {
        clientTracking: true
    }
});

const { app, getWss, applyTo } = expressWs(express());
app.ws('/', (ws, req) => {
    ws.on('message', msg => {
        console.log(msg);
    });
});

router.ws(
    '/:id',
    (ws, req, next) => { next(); },
    (ws, req, next) => {
        ws.send(req.params.id);

        ws.on('close', (code, reason) => {
            console.log('code:', code);
            console.log('reason:', reason);
        });
    }
);

app.use(router);

app.param('id', (req, res, next) => next());

app.listen(3000);
