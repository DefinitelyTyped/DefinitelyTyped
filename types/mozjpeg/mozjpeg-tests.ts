import { execFile } from "child_process";
import * as mozjpeg from "mozjpeg";

execFile(mozjpeg, ["-outfile", "output.jpg", "input.jpg"], {encoding: "utf-8"}, (err: Error | null) => {
    console.log("Image minified!");
});
