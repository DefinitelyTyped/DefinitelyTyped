import ipInt = require("ip-to-int");
 
// IP to Integer
ipInt.ipInt('89.150.79.17').toInt(); // 1503022865
 
// Integer to IP
ipInt.ipInt('1503022865').toIp(); // 89.150.79.17