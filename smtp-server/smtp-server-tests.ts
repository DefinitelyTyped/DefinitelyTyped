import { SMTPServer, SMTPServerOptions } from './';

function SMTPServerConnectTest() {
    let options: SMTPServerOptions = {
        secure: false,
    };
    let server = new SMTPServer(options);
    server.listen(2323);
}

SMTPServerConnectTest();

