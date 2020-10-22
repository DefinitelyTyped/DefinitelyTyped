import assert = require('assert');
import rangeCheck = require('range_check');

// isIP (same function as validIp and valid_ip)
assert(rangeCheck.isIP('10.0.1.5')); // True

// ver
assert(rangeCheck.ver('10.0.1.5') === 4); // IPv4 address, so returns 4.
assert(rangeCheck.ver('2001:4860:8006::62') === 6); // IPv6 address, so returns 6.
assert(rangeCheck.ver('foo') === 0); // Invalid, so returns 0.

// isV4
assert(rangeCheck.isV4('10.0.1.5')); // True
assert(!rangeCheck.isV4('foo')); // False
assert(!rangeCheck.isV4('123::123')); // False

// isV6
assert(rangeCheck.isV6('123::123')); // True
assert(!rangeCheck.isV6('foo')); // False
assert(!rangeCheck.isV6('10.0.1.5')); // False

// storeIP (same function as searchIP)
assert(rangeCheck.storeIP('foo') === null); // Invalid address, so null.
assert(rangeCheck.storeIP('::ffff:127.0.0.1') === '127.0.0.1'); // IPv4 mapped as IPv6, so convert to IPv4.
assert(rangeCheck.storeIP('2001:0000:0111:0000:0011:0000:0001:0000') === '2001:0:111:0:11:0:1:0'); // Abbreviate IPv6
assert(rangeCheck.storeIP('2001:0001:0000:0001:0000:0000:0000:0000') === '2001:1:0:1::'); // Abbreviate IPv6
assert(rangeCheck.storeIP('0000:0000:0000:0000:0000:0000:0000:0000') === '::'); // Abbreviate IPv6
assert(rangeCheck.storeIP('0000:0000:0000:0000:0000:0000:0000:0001') === '::1'); // Abbreviate IPv6
assert(rangeCheck.storeIP('2041:0000:140F:0000:0000:0000:875B:131B') === '2041:0:140F::875B:131B'); // Abbreviate IPv6
assert(rangeCheck.storeIP('2001:0001:0002:0003:0004:0005:0006:0007') === '2001:1:2:3:4:5:6:7'); // Abbreviate IPv6
assert(rangeCheck.storeIP('127.0.0.1') === '127.0.0.1'); // Leave IPv4 addresses alone, so same as input.

// displayIP
assert(rangeCheck.displayIP(null) === ''); // Null, so return an empty string.
assert(rangeCheck.displayIP('::ffff:127.0.0.1') === '127.0.0.1'); // IPv4 mapped as IPv6, so convert to IPv4.
assert(rangeCheck.displayIP('2001:0:111:0:11:0:1:0') === '2001:0000:0111:0000:0011:0000:0001:0000'); // Normalize IPv6
assert(rangeCheck.displayIP('2001:1:0:1::') === '2001:0001:0000:0001:0000:0000:0000:0000'); // Normalize IPv6
assert(rangeCheck.displayIP('::') === '0000:0000:0000:0000:0000:0000:0000:0000'); // Normalize IPv6
assert(rangeCheck.displayIP('::1') === '0000:0000:0000:0000:0000:0000:0000:0001'); // Normalize IPv6
assert(rangeCheck.displayIP('2041:0:140F::875B:131B') === '2041:0000:140F:0000:0000:0000:875B:131B'); // Normalize IPv6
assert(rangeCheck.displayIP('2001:1:2:3:4:5:6:7') === '2001:0001:0002:0003:0004:0005:0006:0007'); // Normalize IPv6
assert(rangeCheck.displayIP('127.0.0.1') === '127.0.0.1'); // Leave IPv4 addresses alone, so same as input.

// isRange (same function as validRange and valid_range)
assert(rangeCheck.isRange('2001:db8::/32')); // True
assert(rangeCheck.isRange('10.0.0.0/8')); // True
assert(!rangeCheck.isRange('qwerty')); // False

// inRange (same function as in_range)
assert(rangeCheck.inRange('10.0.1.5', '10.0.0.0/8')); // True
assert(!rangeCheck.inRange('192.0.1.5', '10.0.0.0/8')); // False
assert(rangeCheck.inRange('2001:db8:1234::1', '2001:db8::/32')); // True
assert(rangeCheck.inRange('192.168.1.1', ['10.0.0.0/8', '192.0.0.0/8'])); // True
