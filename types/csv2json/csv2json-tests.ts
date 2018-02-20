import csv2json from "csv2json";
import fs = require("fs");

fs.createReadStream('data.csv')
  .pipe(csv2json({
    separator: ';'
  }))
  .pipe(fs.createWriteStream('data.json'));
