import { stdout, stderr } from "supports-color";

if (stdout) {
    // Terminal standard output supports color
}

if (stdout.hasBasic) {
    // Terminal standard output supports color
}

if (stdout.has256) {
    // Terminal standard output supports 256 colors
}

if (stdout.has16m) {
    // Terminal standard output supports 16 million colors (truecolor)
}

if (stderr) {
    // Terminal standard error supports color
}

if (stderr.hasBasic) {
    // Terminal standard error supports color
}

if (stderr.has256) {
    // Terminal standard error supports 256 colors
}

if (stderr.has16m) {
    // Terminal standard error supports 16 million colors (truecolor)
}
