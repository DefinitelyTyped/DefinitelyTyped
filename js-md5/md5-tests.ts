/// <reference path="md5.d.ts" />

md5('Message to hash');
md5('');
md5('中文');
md5([]);
md5(new Uint8Array([]));

$.md5('message');
$.md5('Message to hash');
$.md5('');
$.md5('中文');
$.md5([]);
$.md5(new Uint8Array([]));

'message'.md5('Message to hash');
'message'.md5('');
'message'.md5('中文');
'message'.md5([]);
'message'.md5(new Uint8Array([]));