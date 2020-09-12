import { Server, Client, Packet, ServerOptions } from 'mosca';

const settings: ServerOptions = {
    port: 1883,
    host: '0.0.0.0'
};

const server = new Server(settings);

server.on('ready', () => {});

server.on('clientConnected', (client: Client) => {});

server.on('clientDisconnected', (client: Client) => {});

server.on('published', (packet: Packet, client: Client) => {});

server.on('subscribed', (topic: string, client: Client) => {});
