// Imported from: https://github.com/soywiz/typescript-node-definitions/d.ts

/// <reference types="node" />

import { exec } from "child_process";
import vnu = require("vnu-jar");

exec(`java -jar ${vnu} --version`, (error, stdout) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }

    console.log(stdout);
});
