import fold from "foldify";
import fs from "fs";
import path from "path";
const dir = path.join(process.cwd(), "scripts");

if (fs.existsSync(dir)) {
    const modules = fold(dir, { recursive: true });
    console.log(modules);
}
console.log("Directory doesn't exist");