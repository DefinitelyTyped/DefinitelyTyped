

import wrapAnsi = require("wrap-ansi");

wrapAnsi("input", 80) === "output";
wrapAnsi("input", 80, {}) === "output";
wrapAnsi("input", 80, { hard: true }) === "output";
wrapAnsi("input", 80, { hard: false }) === "output";
