

import wrapAnsi = require("wrap-ansi");

wrapAnsi("input", 80) === "output";
wrapAnsi("input", 80, {}) === "output";
wrapAnsi("input", 80, { hard: true }) === "output";
wrapAnsi("input", 80, { hard: false }) === "output";
wrapAnsi("input", 80, { trim: true }) === "output";
wrapAnsi("input", 80, { trim: false }) === "output";
wrapAnsi("input", 80, { wordWrap: true }) === "output";
wrapAnsi("input", 80, { wordWrap: false }) === "output";
