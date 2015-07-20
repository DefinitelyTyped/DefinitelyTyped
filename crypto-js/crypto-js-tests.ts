/// <reference path="crypto-js.d.ts" />

import CryptoJS = require('crypto-js');

var str: string;

str = CryptoJS.MD5('some message');
str = CryptoJS.MD5('some message', 'some key');

str = CryptoJS.SHA1('some message');
str = CryptoJS.SHA1('some message', 'some key', { any: true });

str = CryptoJS.format.OpenSSL('some message');
str = CryptoJS.format.OpenSSL('some message', 'some key');

str = CryptoJS.enc.Utf8('some message');
str = CryptoJS.enc.Utf8('some message', 'some key');

str = CryptoJS.mode.OFB('some message');
str = CryptoJS.mode.OFB('some message', 'some key');

str = CryptoJS.pad.Ansix923('some message');
str = CryptoJS.pad.Ansix923('some message', 'some key');
