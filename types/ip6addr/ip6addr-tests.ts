import ip6addr = require('ip6addr');

const addr = ip6addr.parse('fd00::0123');
addr.kind();
addr.toString();
addr.toString({ format: 'v6' });
addr.toString({ format: 'v6', zeroElide: false, zeroPad: true });
addr.toBuffer();
addr.toLong();
addr.offset(1);
const addr2 = ip6addr.parse('fd20::5');
addr.compare(addr2);

const cidr = ip6addr.createCIDR('fe80::/10');
const cidr2 = ip6addr.createCIDR('10.0.0.0', 8);
cidr.toString();
addr.toString({ format: 'v6' });
addr.toString({ format: 'v6', zeroElide: false, zeroPad: true });
cidr.contains('fe80::507f:baff:fe85:92eb');
cidr.first().toString();
cidr.last().toString();
cidr.broadcast().toString();
cidr.compare(cidr2);
cidr.prefixLength();
cidr.address();

const range = ip6addr.createAddrRange('fd00::123', 'fd00::ea00');
range.first().toString();
range.last().toString();

ip6addr.compare('10.0.1.76', '8.8.8.8');
ip6addr.compareCIDR('192.168.0.0/24', '192.168.0.0/16');
