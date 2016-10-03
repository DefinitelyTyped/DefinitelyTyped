/// <reference path="radius.d.ts" />
/// <reference path="../node/node.d.ts" />

import radius = require('radius');

var radius_secret: string = "shhhh"

radius.add_dictionary("./");
var encodedPacket: Buffer = radius.encode({
    code: "Access-Request",
    secret: radius_secret,
    attributes: {
        "NAS-IP-Address": "10.5.5.5",
        "User-Name": "me",
        "User-Password": "its-a-secret"
    }
});

var radiusPacket: radius.RadiusPacket = radius.decode({
    packet: encodedPacket,
    secret: radius_secret
});

var response: Buffer;

if (radiusPacket.attributes["User-Name"] == "me" && radiusPacket.attributes["User-Password"] == "its-a-secret") {
    response = radius.encode_response({
        packet: radiusPacket,
        code: "Access-Accept",
        secret: radius_secret
    });
} else {
    response = radius.encode_response({
        packet: radiusPacket,
        code: "Access-Reject",
        secret: radius_secret
    });
}

console.log(radius.verify_response({
    request: encodedPacket,
    response: response,
    secret: radius_secret
}));