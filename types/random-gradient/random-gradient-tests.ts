import randomGradient, { GradientDirectionT } from "random-gradient";

const direction: GradientDirection = "horizontal";

randomGradient("test");
randomGradient("test", "diagonal");
randomGradient("test", direction);
