import ipInt = require("ip-to-int");

ipInt("89.150.79.17").toInt(); // $ExpectType number
ipInt("1503022865").toIP(); // $ExpectType string
