import supportsColor = require("supports-color");

if (supportsColor) {
    // Terminal supports color
}

if (supportsColor.hasBasic) {
    // Terminal supports color
}

if (supportsColor.has256) {
    // Terminal supports 256 colors
}

if (supportsColor.has16m) {
    // Terminal supports 16 million colors (truecolor)
}
