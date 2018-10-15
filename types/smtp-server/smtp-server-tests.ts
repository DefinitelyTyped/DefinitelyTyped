import { AddressInfo } from 'net';
import { SMTPServer, SMTPServerAddress, SMTPServerAuthentication, SMTPServerAuthenticationResponse, SMTPServerOptions, SMTPServerSession } from 'smtp-server';
import { Readable } from 'stream';

const options: SMTPServerOptions = {
    hideSTARTTLS: true,
    onConnect,
    onMailFrom,
    onRcptTo,
    onData,
    onClose,
};

const port = 2525;

function onConnect(session: SMTPServerSession, callback: (err?: Error) => void): void {
    console.log(`[${session.id}] onConnect`);
    callback();
}

function onAuth(auth: SMTPServerAuthentication, session: SMTPServerSession, callback: (err: Error | undefined, response?: SMTPServerAuthenticationResponse) => void): void {
    if (auth.method === 'PLAIN' && auth.username === 'username' && auth.password === 'password') {
        callback(undefined, { user: auth.username });
    } else {
        callback(new Error('Invalid username or password'));
    }
}

function onMailFrom(from: SMTPServerAddress, session: SMTPServerSession, callback: (err?: Error) => void): void {
    console.log(`[${session.id}] onMailFrom ${from.address}`);
    if (from.address.split('@')[1] === 'spammer.com') {
        // code 421 disconnects SMTP session immediately
        callback(Object.assign(new Error('we do not like spam!'), { responseCode: 421 }));
    } else {
        callback();
    }
}

function onRcptTo(to: SMTPServerAddress, session: SMTPServerSession, callback: (err?: Error) => void): void {
    console.log(`[${session.id}] onRcptTo ${to.address}`);
    callback();
}

function onData(stream: Readable, session: SMTPServerSession, callback: (err?: Error) => void): void {
    console.log(`[${session.id}] onData started`);

    let messageLength = 0;

    stream.on('data', (chunk: Buffer) => {
        console.log(`[${session.id}] onData got data chunk ${chunk.length} bytes`);
        messageLength += chunk.length;
    });

    stream.once('end', () => {
        console.log(`[${session.id}] onData finished after reading ${messageLength} bytes`);
        callback();
    });
}

function onClose(session: SMTPServerSession) {
    console.log(`[${session.id}] onClose`);
}

const server = new SMTPServer(options);

server.on('error', (err) => {
    console.log(`Server got error:`, err);
});

server.on('close', () => {
    console.log('Server closed');
});

server.listen(port, () => {
    const address = server.server.address() as AddressInfo;
    console.log(`Listening on [${address.address}]:${address.port}`);
});
