import * as WebSocket from 'uws';
import { Buffer } from 'buffer';
import * as http from'http';
import * as https from'https';
import * as fs from'fs';

const WebSocketServer = WebSocket.Server;
const non_ssl = new WebSocketServer({ port: 3000 });

let non_ssl_disconnections = 0;
non_ssl.on('connection', function(ws) {
    ws.on('message', function(message) {
        ws.send(message);
    });

    ws.on('close', function() {
      if (++non_ssl_disconnections == 519) {
          non_ssl.close();
      }
    });
});

const options = {
    key: fs.readFileSync('../../ssl/key.pem'),
    cert: fs.readFileSync('../../ssl/cert.pem'),
    passphrase: '1234'
};

const httpsServer = https.createServer(options, (req: any, res: any) => {
    req.socket.end();
});

const ssl = new WebSocketServer({ server: httpsServer });

let ssl_disconnections = 0;
ssl.on('connection', function(ws) {
    ws.on('message', function(message) {
      ws.send(message);
    });

    ws.on('close', function() {
      if (++ssl_disconnections == 519) {
          ssl.close();
      }
    });
});

httpsServer.listen(3001);

/**
 * HTTP module.
 */

const document: Buffer = Buffer.from('Hello world!');

const server: http.Server = WebSocket.http.createServer(
    (req: http.IncomingMessage, res: http.ServerResponse): void => {
    if (req.method === 'POST') {
        const body: Buffer[] = [];

        req.on('data', (chunk: Buffer) => {
            body.push(Buffer.from(chunk));
        }).on('end', () => {
            res.end('You posted me this: ' + Buffer.concat(body).toString());
        });
        // handle some GET url
    } else if (req.url === '/') {
        res.end(document);
    } else {
        res.end('Unknown request by: ' + req.headers['user-agent']);
    }
});

server.listen(3002);
