import netmask = require("netmask");

let block = new netmask.Netmask("10.0.0.0/12");
console.log("base", block.base);

if (block.contains("10.0.8.10")) {
    console.log("block contains 10.0.8.10");
}

block = new netmask.Netmask("216.240.32.0", "255.255.255.0");
block = new netmask.Netmask("216.240.32.0", 24);

class CustomizedNetmask extends netmask.Netmask {
    // Test that we can override `next` to return a CustomizedNetmask (as opposed to netmask.Netmask) object
    next(count: number = 1): CustomizedNetmask {
        return new CustomizedNetmask(netmask.long2ip(this.netLong + this.size * count), this.mask);
    }
}
