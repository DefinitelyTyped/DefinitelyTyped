import * as WebSocket from 'uws';
import * as fs from'fs';
import * as https from'https';

const WebSocketServer = WebSocket.Server;
const non_ssl = new WebSocketServer({ port: 3000 });

var non_ssl_disconnections = 0;
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

var ssl_disconnections = 0;
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
