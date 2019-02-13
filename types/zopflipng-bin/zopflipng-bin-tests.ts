import { execFile } from "child_process";
import * as zopflipng from "zopflipng-bin";

execFile(zopflipng, ["-m", "--lossy_8bit", "input.png", "outout.png"], { encoding: "utf8" }, (err: Error | null) => {
    console.log("Image minified!");
});
