export type HexColor = `#${string}`;

export type ColorName =
    | "blue"
    | "green"
    | "orange"
    | "red"
    | "yellow"
    | "purple"
    | "pink"
    | "sky"
    | "lime"
    | "gray"
    | "black"
    | "business-blue"
    | "shades"
    | "neutrals";

export type ColorWeight =
    | 0
    | 10
    | 20
    | 30
    | 40
    | 50
    | 60
    | 70
    | 80
    | 90
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;

export type Color = `${ColorName}#${ColorWeight}`;

export type getHexString = (name: ColorName, weight: ColorWeight) => HexColor;
export type namedColorStringToHex = (name: HexColor | Color) => HexColor;
