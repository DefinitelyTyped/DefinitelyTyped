/// <reference path="b64.d.ts" />

var value: string = base64js.fromByteArray(new Uint8Array(10));

var bytesValue: Uint8Array = base64js.toByteArray("c3VyZS4=");
