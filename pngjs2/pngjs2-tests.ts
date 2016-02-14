/// <reference path="pngjs2.d.ts" />

import * as fs from "fs";
import { PNG } from "pngjs2";

let png = new PNG({ filterType: 4 });

fs.createReadStream("in.png")
  .pipe(png)
  .on("parsed", () => {
    for (let y = 0; y < png.height; y++) {
      for (let x = 0; x < png.width; x++) {
        let idx = (png.width * y + x) << 2;

        // invert color
        png.data[idx] = 255 - png.data[idx];
        png.data[idx+1] = 255 - png.data[idx+1];
        png.data[idx+2] = 255 - png.data[idx+2];

        // and reduce opacity
        png.data[idx+3] = png.data[idx+3] >> 1;
      }
    }

    png.pack().pipe(fs.createWriteStream('out.png'));
  });
