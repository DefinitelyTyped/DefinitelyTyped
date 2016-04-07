/// <reference path="numbro.d.ts" />
import numbro = require("numbro");

var valueFormat: string = numbro(1000).format('0,0');
// '1,000'

var valueUnformat: number = numbro().unformat('($10,000.00)');
// '-10000'

var value3: Numbro = numbro(1000);
var added: Numbro = value3.add(10);
// 1010

var value4: Numbro = numbro(1000);
var formatValue4a: string = value4.format('0,0');
// '1,000'
var formatValue4b: number = value4.value();
// 1000

var value5: Numbro = numbro();
value5.set(1000);
var value5Num: number = value5.value();
// 1000

var value6: Numbro = numbro(1000);
var value: number = 100;
var difference = value6.difference(value);
// 900

var value7: Numbro = numbro(0);
numbro.zeroFormat('N/A');
var zeroString: string = value7.format('0.0');
// 'N/A'

var a: Numbro = numbro(1000);
var b: Numbro = numbro(a);
var c: Numbro = a.clone();

var aVal: number = a.set(2000).value();
// 2000
var bVal: number = b.value();
// 1000
var cVal: number = c.add(10).value();
// 1010
