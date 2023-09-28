import * as fs from "fs";
import gunzip from "gunzip-maybe";

fs.createReadStream("file.gz").pipe(gunzip()).pipe(fs.createWriteStream("file"));
