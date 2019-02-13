import { execFile } from "child_process";
import * as mozjpeg from "mozjpeg";

execFile(mozjpeg, ["-outfile", "output.jpg", "input.jpg"], {encoding: "utf8"}, (err: Error | null) => {
    console.log("Image minified!");
});
