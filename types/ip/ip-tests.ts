

import ip = require('ip');

var myIP = ip.address();

ip.cidr("192.168.0.1/24");
ip.fromLong(ip.toLong(myIP));
ip.fromPrefixLen(24);
ip.isEqual("192.168.0.1", myIP);
ip.isLoopback("127.0.0.1");
ip.isPrivate(myIP);
ip.isPublic(myIP);
ip.loopback("ipv6");
ip.mask("192.168.0.1", "255.255.255.0");
ip.not("255.255.255.0");
ip.or("192.168.0.1", "255.255.255.0");
var buff:any = ip.toBuffer(myIP);
ip.toString(buff);
ip.subnet('192.168.1.134', '255.255.255.192');
ip.cidrSubnet('192.168.1.134/26');
ip.cidrSubnet('192.168.1.134/26').contains('192.168.1.134');
