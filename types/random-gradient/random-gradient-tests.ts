import randomGradient, { GradientDirectionT } from "random-gradient";

const direction: GradientDirectionT = "horizontal";

randomGradient("test");
randomGradient("test", "diagonal");
randomGradient("test", direction);
