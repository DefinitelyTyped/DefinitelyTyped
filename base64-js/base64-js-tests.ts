/// <reference path="base64-js.d.ts" />

import base64js = require('base64-js');

const bytes: Uint8Array = base64js.toByteArray('shemp');
const decoded: string = base64js.fromByteArray(new Uint8Array(0));
