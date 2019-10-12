import { RSocketServer, BufferEncoders } from 'rsocket-core';
import RSocketTCPServer from 'rsocket-tcp-server';
import { Payload } from 'rsocket-types';
import { Single } from 'rsocket-flowable';

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8080';

// Create an instance of a client
const server = new RSocketServer<Buffer, null> ({
  // Handle incoming connections
  getRequestHandler: (socket, payload) => {
    console.log('connect payload', payload);
    socket.connectionStatus().subscribe({
      onNext: value => {
        console.log('connection', value);
      }
    });

    // Return a responder that handles incoming payloads
    // We only handle the request/response type
    return {
      requestResponse: (incomingRequest: Payload<Buffer, null>) => {
        console.log('->', incomingRequest);
        // Echo the request back
        return new Single(subscriber => {
          subscriber.onSubscribe(() => {});
          console.log('<-', incomingRequest);
          subscriber.onComplete(incomingRequest);
        });
      },
    };
  },

  // Transports default to sending/receiving strings:
  // Use BufferEncoders to enable binary
  transport: new RSocketTCPServer(
    { host: HOST, port: +PORT }, // options to Node.js net.connect()
    BufferEncoders,
  ),
});

console.log('starting server...');
server.start();
