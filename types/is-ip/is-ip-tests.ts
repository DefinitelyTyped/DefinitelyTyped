import * as isIp from "is-ip";

isIp("nope");
// => false

isIp("127.0.0.1");
// => true

isIp("0.0.0.0");
// => true

isIp("127.0.0.256");
// => false

isIp.v4("127.0.0.1");
// => true

isIp.v4("1:2:3:4:5:6:7:8");
// => false

isIp.v6("1:2:3:4:5:6:7:8");
// => true

isIp.v6("::");
// => true

isIp.v6("127.0.0.1");
// => false
