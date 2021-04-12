/// <reference types="node" />

import { stdout, stderr, supportsColor } from "supports-color";

if (stdout) {
    // Terminal standard output supports color
    if (stdout.hasBasic) {
        stdout.level; // $ExpectType number
        // Terminal standard output supports color
    }

    if (stdout.has256) {
        // Terminal standard output supports 256 colors
    }

    if (stdout.has16m) {
        // Terminal standard output supports 16 million colors (truecolor)
    }
}

if (stderr) {
    // Terminal standard error supports color
    if (stderr.hasBasic) {
        stderr.level; // $ExpectType number
        // Terminal standard error supports color
    }

    if (stderr.has256) {
        // Terminal standard error supports 256 colors
    }

    if (stderr.has16m) {
        // Terminal standard error supports 16 million colors (truecolor)
    }
}

supportsColor(process.stdout, { sniffFlags: true }); // $ExpectType SupportsColor
supportsColor(process.stdout, { sniffFlags: false }); // $ExpectType SupportsColor
supportsColor(
    {
        isTTY: true,
    },
    { sniffFlags: true },
);
supportsColor({ isTTY: true });
