import { execFile } from "child_process";
import * as pngquant from "pngquant-bin";

execFile(pngquant, ["-o", "output.png", "input.png"], { encoding: "utf8" }, (err: Error | null) => {
    console.log("Image minified!");
});
