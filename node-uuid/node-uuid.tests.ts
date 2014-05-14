/// <reference path="node-uuid.d.ts" />

import uuid = require('node-uuid');

var uid1: string = uuid.v1()
var uid2: string = uuid.v2()
var uid3: string = uuid.v3()
var uid4: string = uuid.v4()

var options: UUIDOptions = {
  node: [],
  clockseq: 2,
  nsecs: 3,
  msecs: new Date()
}

var padding: number[] = [0, 1, 2]

var offset: number = 15

uuid.v1(options, padding, offset)
uuid.v2(options, padding, offset)
uuid.v3(options, padding, offset)
uuid.v4(options, padding, offset)
