import Ftp from 'jsftp';

const connectOpts = {
    host: 'localhost',
    port: 22222,
};

const ftp = new Ftp(connectOpts);  // $ExpectType Ftp

ftp.ls('foo', (err) => { });  // $ExpectType void

ftp.list('foo', (err) => { });  // $ExpectType void

ftp.get('foo', (err) => { });  // $ExpectType void
ftp.get('foo', 'bar', (err) => { });  // $ExpectType void

ftp.put('foo', 'bar', (err) => { });  // $ExpectType void

ftp.rename('foo', 'bar', (err) => { });  // $ExpectType void

ftp.raw('foo', 'param', (err) => { });  // $ExpectType void

ftp.auth('foo', 'bar', (err) => { });  // $ExpectType void

ftp.keepAlive();  // $ExpectType void

ftp.destroy();  // $ExpectType void
