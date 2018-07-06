import * as PromiseSftp from "promise-sftp";

const sftp = new PromiseSftp();

// $ExpectType destroy
sftp.destroy;

// $ExpectType STATUSES
PromiseSftp.STATUSES;
