/// <reference path="bcrypt.d.ts" />

import bcrypt = require("bcrypt");

var num: number;
var str: string;
var bool: boolean;

str = bcrypt.genSaltSync();
str = bcrypt.genSaltSync(num);

bcrypt.genSalt(function (err: Error, salt: string): void {
  str = salt;
});
bcrypt.genSalt(num, function (err: Error, salt: string): void {
  str = salt;
});

str = bcrypt.hashSync(str, str);
str = bcrypt.hashSync(str, num);

bcrypt.hash(str, str, function (err: Error, encrypted: string):void {
  str = encrypted;
})
bcrypt.hash(str, num, function (err: Error, encrypted: string): void {
  str = encrypted;
});

bool = bcrypt.compareSync(str, str);
bcrypt.compare(str, str, function (err: Error, same: boolean): void {
  bool = same;
});

num = bcrypt.getRounds(str);