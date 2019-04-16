/// <reference types="node" />
import whichpm = require("which-pm");

whichpm(process.cwd())
    .then(pm => {
        pm; // $ExpectType PMInfo | null
        if (pm !== null && pm !== undefined) {
            pm.name; // $ExpectType string
            pm.version; // $ExpectType string | undefined
        }
    })
    .catch(err => console.error(err));

const _wpm = whichpm(process.cwd()); // $ExpectType Promise<PMInfo | null>
