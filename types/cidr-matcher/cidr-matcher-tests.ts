import Matcher = require("cidr-matcher");

const matcher = new Matcher(["0.0.0.0/0", "::/0"]);

// $ExpectType boolean
matcher.contains("192.168.1.1");

// @ts-expect-error
matcher.contains();

// $ExpectType boolean
matcher.containsAny(["192.168.1.1", "2001:4860:4860::8888"]);

// @ts-expect-error
matcher.containsAny("192.168.1.1");

// $ExpectType void
matcher.addNetworkClass("192.168.20.0/16");

// @ts-expect-error
matcher.addNetworkClass();
