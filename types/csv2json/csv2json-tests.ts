import csv2json = require("csv2json");
import fs = require("fs");

fs.createReadStream('data.csv')
  .pipe(csv2json({
    separator: ';'
  }))
  .pipe(fs.createWriteStream('data.json'));
