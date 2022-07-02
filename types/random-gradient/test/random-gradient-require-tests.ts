import randomGradient = require("random-gradient");

const direction: randomGradient.GradientDirection = "horizontal";

randomGradient("test");
randomGradient("test", "diagonal");
randomGradient("test", direction);
