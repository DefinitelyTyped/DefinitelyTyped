import textFit = require("textfit");

const element = document.createElement("div");

const options: textFit.TextFitOption = {
    alignVert: false,
    alignHoriz: false,
    detectMultiLine: true,
    minFontSize: 6,
    maxFontSize: 80,
    reProcess: true,
    widthOnly: false,
    alignVertWithFlexbox: false,
};

textFit(element, options);
