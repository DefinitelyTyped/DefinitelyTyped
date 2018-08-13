import {Duplex} from 'stream';
import * as WebSocket from 'ws';

//Adapted from https://github.com/avital/websocket-json-stream
export class WebSocketJSONStream extends Duplex {
    constructor(private readonly ws:WebSocket) {
        super({objectMode: true});
        this.ws.on('message', (msg: string) => {
            this.push(JSON.parse(msg))
        });
        this.ws.on('close', () => {
            this.push(null); // end readable stream
            this.end(); // end writable stream

            this.emit('close');
            this.emit('end');
        });
        this.on('error', function() { ws.close(); });
        this.on('end',   function() { ws.close(); });
    };
    public _read():void {};
    public _write(msg:any, encoding:string, next:Function):void {
        this.ws.send(JSON.stringify(msg));
        next();
    };
};