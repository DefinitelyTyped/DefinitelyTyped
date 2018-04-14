import http = require('http');
import express = require('express');
import expressWs = require('express-ws');

const expressApp = express();
const server = http.createServer(expressApp);

const instance = expressWs(expressApp, server, {
    leaveRouterUntouched: false,
    wsOptions: {
        clientTracking: true
    }
});
const router = express.Router();
const wss = instance.getWss();
const { app } = instance;

instance.applyTo({});

setInterval(() => {
    wss.clients.forEach(client => {
        if (client.readyState !== 1) {
            client.terminate();
            return;
        }
        client.ping();
    });
}, 5000);

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
