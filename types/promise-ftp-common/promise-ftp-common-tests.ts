import * as PromiseFtpCommon from "promise-ftp-common";

// $ExpectType typeof STATUSES
PromiseFtpCommon.STATUSES;

// $ExpectType typeof FtpReconnectError
PromiseFtpCommon.FtpReconnectError;

// $ExpectType typeof FtpConnectionError
PromiseFtpCommon.FtpConnectionError;

// $ExpectType FtpReconnectError
new PromiseFtpCommon.FtpReconnectError();

// $ExpectType FtpConnectionError
new PromiseFtpCommon.FtpConnectionError();
