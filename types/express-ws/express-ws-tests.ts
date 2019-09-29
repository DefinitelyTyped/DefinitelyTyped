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

/**
 * applyTo accepts router object
 */
applyTo(express.Router());

/**
 * applyTo accepts router-like objects
 */
applyTo({
    get() { return this; }
});

/**
 * getWss function returns ws server
 */
getWss().clients.forEach(ws => {
    if (ws.readyState !== ws.OPEN) {
        ws.terminate();
        return;
    }
    ws.ping();
});

/**
 * ws method is added to express app instance
 */
app.ws('/', (ws, req) => {
    ws.on('message', msg => {
        console.log(msg);
    });
});

/**
 * ws method is added to express.Router prototype
 */
const router = express.Router();

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
