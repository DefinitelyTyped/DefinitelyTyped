/// <reference types="node" />
const fold = require("foldify");
const path = require("path");
const fs = require("fs");
const dir = path.join(process.cwd(), "scripts");

if (fs.existsSync(dir)) {
    const modules = fold(dir, { recursive: true });
    console.log(modules);
}
console.log("Directory doesn't exist");