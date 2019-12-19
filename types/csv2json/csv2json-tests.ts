import Pumpify = require("pumpify");
import csv2json = require("csv2json");
import fs = require("fs");

fs.createReadStream('data.csv')
  .pipe(
    // $ExpectType Pumpify
    csv2json({
      separator: ';'
    }))
  .pipe(fs.createWriteStream('data.json'));
