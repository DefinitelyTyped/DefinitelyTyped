import * as net from 'net';
import { once } from 'events';

{
    const key = 'TLSKey';
    const cert = 'TLSCert';

    const socket = net.createQuicSocket!({ endpoint: { port: 1234 } });

    socket.on('session', async (session) => {
        session.on('stream', (stream) => {
          stream.end('Hello World');
          stream.setEncoding('utf8');
          stream.on('data', console.log);
          stream.on('end', () => console.log('stream ended'));
        });

        const uni = await session.openStream({ halfOpen: true });
        uni.write('hi ');
        uni.end('from the server!');
    });

    (async () => {
        await socket.listen({ key, cert, alpn: 'hello' });
        console.log('The socket is listening for sessions!');
    })();
}

{
    const key = 'TLSKey';
    const cert = 'TLSCert';
    const ca = 'ca';

    const options = { key, cert, ca, alpn: 'zzz' };

    const client = net.createQuicSocket!({ client: options });
    const server = net.createQuicSocket!({ server: options });

    client.on('close', () => {});
    server.on('close', () => {});
    server.on('busy', () => {
        console.log(server.serverBusy);
    });

    // When the server is set as busy, all connections
    // will be rejected with a SERVER_BUSY response.
    server.serverBusy = true;

    (async () => {
        await server.listen();

        const req = await client.connect({
            address: '127.0.0.1',
            port: server.endpoints[0].address.port,
        });

        req.on('close', () => {
            console.log(req.closeCode.code);
            server.close();
            client.close();
        });

        await Promise.all([
            once(server, 'close'),
            once(client, 'close')
        ]);
    });
}
