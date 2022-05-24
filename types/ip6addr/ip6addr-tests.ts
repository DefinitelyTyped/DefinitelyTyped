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
addr.compare('fd20::5');

const addr3: ip6addr.Addr = addr2.clone();
const addr4: ip6addr.Addr = addr3.not();
const addr5: ip6addr.Addr = addr4.and('127.0.0.1');
const addr6: ip6addr.Addr = addr4.and(addr);
const addr7: ip6addr.Addr = addr4.or('127.0.0.1');
const addr8: ip6addr.Addr = addr4.or(addr);

const cidr = ip6addr.createCIDR('fe80::/10');
const cidr2 = ip6addr.createCIDR('10.0.0.0', 8);
const cidr3 = ip6addr.createCIDR(addr, 16);
cidr.toString();
addr.toString({ format: 'v6' });
addr.toString({ format: 'v6', zeroElide: false, zeroPad: true });
cidr.contains('fe80::507f:baff:fe85:92eb');
cidr.contains(addr2);
cidr.first().toString();
cidr.last().toString();
cidr.broadcast().toString();
cidr.compare(cidr2);
cidr.prefixLength();
cidr.prefixLength('auto');
cidr.address();

const range = ip6addr.createAddrRange('fd00::123', 'fd00::ea00');
range.first().toString();
range.last().toString();

ip6addr.compare('10.0.1.76', '8.8.8.8');
ip6addr.compareCIDR('192.168.0.0/24', '192.168.0.0/16');

ip6addr.compare(addr, addr2);
ip6addr.compareCIDR(cidr, cidr3);

ip6addr.createAddrRange('8.8.8.8', '10.0.1.76');
ip6addr.createAddrRange(addr, addr2);

ip6addr.parse(3566161419);
ip6addr.parse(addr8);
