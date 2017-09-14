import { SMTPServer, SMTPServerOptions } from 'smtp-server';

function SMTPServerConnectTest() {
    let options: SMTPServerOptions = {
        secure: false,
    };
    let server = new SMTPServer(options);
    server.on('error', err => {
        console.log('Error %s', err.message);
    });
    server.listen(2323);
}

SMTPServerConnectTest();

