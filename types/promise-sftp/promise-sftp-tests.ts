import PromiseSftp = require("promise-sftp");

const sftp = new PromiseSftp();

// $ExpectType () => boolean
sftp.destroy;

// $ExpectType Bluebird<DirectoryListing[]>
sftp.list();

// $ExpectType typeof STATUSES
PromiseSftp.STATUSES;
