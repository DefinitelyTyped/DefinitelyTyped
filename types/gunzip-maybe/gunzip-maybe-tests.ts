import gunzip from "gunzip-maybe";
import * as fs from "fs";

fs.createReadStream("file.gz").pipe(gunzip()).pipe(fs.createWriteStream("file"));
