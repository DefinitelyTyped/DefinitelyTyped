import { execFile } from "child_process";
import * as jpegtran from "jpegtran-bin";

execFile(jpegtran, ["-outfile", "output.jpg", "input.jpg"], { encoding: "utf8" }, (err: Error | null) => {
    console.log("Image minified!");
});
