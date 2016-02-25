/// <reference path="node-uuid-global.d.ts" />

var uid1: string = uuid.v1();
var uid4: string = uuid.v4();

var options: __NodeUUID.UUIDOptions = {
  node: [],
  clockseq: 2,
  nsecs: 3,
  msecs: new Date()
};

var padding: number[] = [0, 1, 2];

var offset: number = 15;

var buf : number[] = [];

uuid.parse(uid4, buf, offset);
uuid.unparse(buf, offset);

var uid21: number[] = uuid.v1(options, padding, offset);
var uid24: number[] = uuid.v4(options, padding, offset);
