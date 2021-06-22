import * as IpSubnetCalculator from "ip-subnet-calculator";

IpSubnetCalculator.calculate("", ""); // $ExpectType SubnetResult[]
IpSubnetCalculator.calculateSubnetMask("", 1); // $ExpectType SubnetResult
IpSubnetCalculator.calculateCIDRPrefix("", 1); // $ExpectType SubnetResult

IpSubnetCalculator.isIp(""); // $ExpectType boolean
IpSubnetCalculator.isDecimalIp(0); // $ExpectType boolean

IpSubnetCalculator.toDecimal(""); // $ExpectType number
IpSubnetCalculator.toString(0); // $ExpectType string
