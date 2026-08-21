declare namespace randomGradient {
    type GradientDirection = "diagonal" | "radial" | "horizontal" | "vertical";
}

declare function randomGradient(uuid: string, type?: randomGradient.GradientDirection): string;

export = randomGradient;
