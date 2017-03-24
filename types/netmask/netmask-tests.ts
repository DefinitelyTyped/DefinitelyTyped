

import netmask = require('netmask');

var address: string = '127.0.0.1';

var nm = new netmask.Netmask(address, '255.255.255.0');

var nm2 = new netmask.Netmask('127.0.0.1/255.255.255.0');

if (nm.contains('127.0.0.123')) {}

nm.forEach((ip: string): void => console.log(ip));

var adjacent: netmask.Netmask = nm.next();
