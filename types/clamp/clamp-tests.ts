import clamp = require("clamp");

clamp(0, -100, 100);
clamp(0, 100, -100);
clamp(100, 0, 50);
clamp(50, 100, 150);
