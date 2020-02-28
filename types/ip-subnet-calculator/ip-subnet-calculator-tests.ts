import * as IpSubnetCalculator from "ip-subnet-calculator";

IpSubnetCalculator.calculate("", "") // $ExpectType IpSubnetCalculator.SubnetResult[]
IpSubnetCalculator.calculateSubnetMask("", 1) // $ExpectType IpSubnetCalculator.SubnetResult
IpSubnetCalculator.calculateCIDRPrefix("", 1) // $ExpectType IpSubnetCalculator.SubnetResult

IpSubnetCalculator.isIp("") // $ExpectType boolean
IpSubnetCalculator.isDecimalIp(0) // $ExpectType boolean

IpSubnetCalculator.toDecimal("") // $ExpectType number
IpSubnetCalculator.toString(0) // $ExpectType string