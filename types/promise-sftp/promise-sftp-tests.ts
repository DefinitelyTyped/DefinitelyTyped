import PromiseSftp = require("promise-sftp");

const sftp = new PromiseSftp();

// $ExpectType () => boolean
sftp.destroy;

// $ExpectType typeof STATUSES
PromiseSftp.STATUSES;
