/// <reference path="protobufjs.d.ts" />

import ProtoBuf = require("protobufjs");

ProtoBuf.loadProtoFile("test.proto", builder => {
	builder.build();

	var message: ProtoBuf.IProtoBufMessage;
	message.toArrayBuffer();
	message.toBuffer();
});
