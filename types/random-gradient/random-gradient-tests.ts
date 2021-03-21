import randomGradient = require("random-gradient");
import type { GradientDirection } from "random-gradient";

const direction: GradientDirection = "horizontal";

randomGradient("test");
randomGradient("test", "diagonal");
randomGradient("test", direction);
