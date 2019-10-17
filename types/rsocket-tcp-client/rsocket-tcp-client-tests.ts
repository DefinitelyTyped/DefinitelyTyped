import { RSocketClient, BufferEncoders } from 'rsocket-core';
import RSocketTcpClient from 'rsocket-tcp-client';
import { ReactiveSocket, Payload } from 'rsocket-types';
import { createInterface } from 'readline';

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8080';

// Create an instance of a client
const client = new RSocketClient<Buffer, null>({
  // note: default `serializers` is pass-through
  setup: {
    // ms btw sending keepalive to server
    keepAlive: 60000,
    // ms timeout if no keepalive response
    lifetime: 180000,
    // format of `data`
    dataMimeType: 'application/octet-stream',
    // format of `metadata`
    metadataMimeType: 'application/octet-stream',
  },
  // Transports default to sending/receiving strings:
  // Use BufferEncoders to enable binary
  transport: new RSocketTcpClient(
    { host: HOST, port: +PORT }, // options to Node.js net.connect()
    BufferEncoders,
  )
});

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt for message and send then return response
async function send(socket: ReactiveSocket<Buffer, null>): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    readline.question(`send:`, (input) => {
      if (input === '') {
        resolve('');
      } else {
        // create payload
        const request: Payload<Buffer, null> = {
          data: Buffer.from(input),
          metadata: null,
        };
        // socket provides the rsocket interactions fire/forget, request/response,
        // request/stream, etc as well as methods to close the socket.
        socket.requestResponse(request).subscribe({
          onSubscribe: () => {
            console.log('->', request);
          },
          onComplete: response => {
            console.log('<-', response);
            if (response.data) {
              resolve(response.data.toString());
            } else {
              reject(new Error('empty response received'));
            }
          },
          onError: reject,
        });
      }
    });
  });
}

// Open the connection
client.connect().subscribe({
  onComplete: async (socket: ReactiveSocket<Buffer, null>) => {
    console.log(`connected to server at ${HOST}:${PORT}...`);
    let reply = '';
    do {
      reply = await send(socket);
      console.log(`receive:${reply}`);
    } while (reply);

    console.log(`close`);
    client.close();
    process.exit();
  },
  onError: error => console.error(error),
});
