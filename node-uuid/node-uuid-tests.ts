/// <reference path="node-uuid.d.ts" />

import nodeUuid = require('node-uuid');

var uid1: string = nodeUuid.v1();
var uid2: string = nodeUuid.v2();
var uid3: string = nodeUuid.v3();
var uid4: string = nodeUuid.v4();

var options: __NodeUUID.UUIDOptions = {
  node: [],
  clockseq: 2,
  nsecs: 3,
  msecs: new Date()
};

var padding: number[] = [0, 1, 2];

var offset: number = 15;

var buf : number[] = [];

nodeUuid.parse(uid4, buf, offset);
nodeUuid.unparse(buf, offset);

var uid21: number[] = nodeUuid.v1(options, padding, offset);
var uid22: number[] = nodeUuid.v2(options, padding, offset);
var uid23: number[] = nodeUuid.v3(options, padding, offset);
var uid24: number[] = nodeUuid.v4(options, padding, offset);

var buffer: Buffer;

var uid31: Buffer = nodeUuid.v1(options, buffer, offset);
var uid32: Buffer = nodeUuid.v2(options, buffer, offset);
var uid33: Buffer = nodeUuid.v3(options, buffer, offset);
var uid34: Buffer = nodeUuid.v4(options, buffer, offset);
