import PromiseFtp = require("promise-ftp");

// $ExpectType FtpConnectionError
new PromiseFtp.FtpConnectionError();
