import { Client, Server } from 'styletron-engine-monolithic';

new Client();
new Server();

const myServer = new Server();
myServer.getCss(); // $ExpectType string
myServer.getStylesheetsHtml(); // $ExpectType string
