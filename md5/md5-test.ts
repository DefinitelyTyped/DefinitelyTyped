/// <reference path="md5.d.ts" />

var hash: string;
hash = CybozuLabs.MD5.calc("abc");
hash = CybozuLabs.MD5.calc("abc", CybozuLabs.MD5.BY_ASCII);
hash = CybozuLabs.MD5.calc("abc", CybozuLabs.MD5.BY_UTF16);

var version: string;
version = CybozuLabs.MD5.VERSION;