import jsftp = require('jsftp');
import jsftpLsr = require('jsftp-lsr');

const Ftp = jsftpLsr(jsftp);

const connectOpts = {
    host: 'localhost',
    port: 22222,
};
const ftpClient = new Ftp(connectOpts);  // $ExpectType JsftpLsr

ftpClient.lsr('foo', (err, data) => {});  // $ExpectType void

ftpClient.lsr('foo');  // $ExpectError

ftpClient.lsr();  // $ExpectError
