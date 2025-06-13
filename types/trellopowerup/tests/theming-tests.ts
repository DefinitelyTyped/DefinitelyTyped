import * as Trello from "trellopowerup";

// Test HexColor type
const validHexColors: Trello.Theming.HexColor[] = [
    "#000000",
    "#ffffff",
    "#123456",
    "#abc",
    "#ABC123",
    "#f0f0f0",
    "#red",
    "#blue-500",
];

// $ExpectType "#000000"
const blackHex: Trello.Theming.HexColor = "#000000";
// $ExpectType "#ffffff"
const whiteHex: Trello.Theming.HexColor = "#ffffff";
// $ExpectType "#abc123"
const customHex: Trello.Theming.HexColor = "#abc123";

// Test ColorName type
const validColorNames: Trello.Theming.ColorName[] = [
    "blue",
    "green",
    "orange",
    "red",
    "yellow",
    "purple",
    "pink",
    "sky",
    "lime",
    "gray",
    "black",
    "business-blue",
    "shades",
    "neutrals",
];

// $ExpectType "blue"
const blueColor: Trello.Theming.ColorName = "blue";
// $ExpectType "business-blue"
const businessBlue: Trello.Theming.ColorName = "business-blue";
// $ExpectType "neutrals"
const neutralsColor: Trello.Theming.ColorName = "neutrals";

// Test ColorWeight type
const validColorWeights: Trello.Theming.ColorWeight[] = [
    0,
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
];

// $ExpectType 0
const lightestWeight: Trello.Theming.ColorWeight = 0;
// $ExpectType 500
const mediumWeight: Trello.Theming.ColorWeight = 500;
// $ExpectType 900
const darkestWeight: Trello.Theming.ColorWeight = 900;

// Test Color type (template literal)
const validColors: Trello.Theming.Color[] = [
    "blue#500",
    "red#700",
    "green#300",
    "business-blue#600",
    "neutrals#0",
    "shades#900",
];

// $ExpectType "blue#500"
const blueColor500: Trello.Theming.Color = "blue#500";
// $ExpectType "red#700"
const redColor700: Trello.Theming.Color = "red#700";
// $ExpectType "business-blue#600"
const businessBlue600: Trello.Theming.Color = "business-blue#600";

// Test getHexString function type
declare const getHex: Trello.Theming.getHexString;

// $ExpectType `#${string}`
getHex("blue", 500);
// $ExpectType `#${string}`
getHex("red", 700);
// $ExpectType `#${string}`
getHex("business-blue", 0);
// $ExpectType `#${string}`
getHex("neutrals", 900);

// Assignment test (no $ExpectType)
const hex: Trello.Theming.HexColor = getHex("blue", 500);

// Test namedColorStringToHex function type
declare const namedToHex: Trello.Theming.namedColorStringToHex;

// $ExpectType `#${string}`
namedToHex("#ffffff");
// $ExpectType `#${string}`
namedToHex("blue#500");
// $ExpectType `#${string}`
namedToHex("red#700");

// Test function usage with variables
const colorName: Trello.Theming.ColorName = "green";
const colorWeight: Trello.Theming.ColorWeight = 400;
const color: Trello.Theming.Color = "purple#300";
const hexColor: Trello.Theming.HexColor = "#123abc";

// $ExpectType `#${string}`
getHex(colorName, colorWeight);
// $ExpectType `#${string}`
namedToHex(color);
// $ExpectType `#${string}`
namedToHex(hexColor);

// Test type errors for HexColor
// @ts-expect-error - HexColor must start with #
const invalidHex1: Trello.Theming.HexColor = "ffffff";
// @ts-expect-error - HexColor must start with #
const invalidHex2: Trello.Theming.HexColor = "blue";
// @ts-expect-error - HexColor must be string starting with #
const invalidHex3: Trello.Theming.HexColor = 123;

// Test type errors for ColorName
// @ts-expect-error - 'cyan' is not a valid ColorName
const invalidColorName1: Trello.Theming.ColorName = "cyan";
// @ts-expect-error - 'light-blue' is not a valid ColorName
const invalidColorName2: Trello.Theming.ColorName = "light-blue";
// @ts-expect-error - ColorName must be string literal
const invalidColorName3: Trello.Theming.ColorName = 123;

// Test type errors for ColorWeight
// @ts-expect-error - 25 is not a valid ColorWeight
const invalidWeight1: Trello.Theming.ColorWeight = 25;
// @ts-expect-error - 150 is not a valid ColorWeight
const invalidWeight2: Trello.Theming.ColorWeight = 150;
// @ts-expect-error - 1000 is not a valid ColorWeight
const invalidWeight3: Trello.Theming.ColorWeight = 1000;
// @ts-expect-error - ColorWeight must be number
const invalidWeight4: Trello.Theming.ColorWeight = "500";

// Test type errors for Color template literal
// @ts-expect-error - 'cyan' is not a valid ColorName
const invalidColor1: Trello.Theming.Color = "cyan#500";
// @ts-expect-error - 150 is not a valid ColorWeight
const invalidColor2: Trello.Theming.Color = "blue#150";
// @ts-expect-error - missing # separator
const invalidColor3: vColor = "blue500";
// @ts-expect-error - wrong separator
const invalidColor4: vColor = "blue-500";
// @ts-expect-error - 'teal' is not a valid ColorName
const invalidColor5: Trello.Theming.Color = "teal#300";

// Test type errors for getHexString function
declare const getHexFunc: Trello.Theming.getHexString;
// @ts-expect-error - first parameter should be ColorName
getHexFunc("invalid-color", 500);
// @ts-expect-error - second parameter should be ColorWeight
getHexFunc("blue", 150);
// @ts-expect-error - parameters should be (ColorName, ColorWeight)
getHexFunc(500, "blue");
// @ts-expect-error - missing second parameter
getHexFunc("blue");

// Test type errors for namedColorStringToHex function
declare const namedColorFunc: Trello.Theming.namedColorStringToHex;
// @ts-expect-error - parameter should be HexColor or Color, not plain string
namedColorFunc("blue");
// @ts-expect-error - parameter should be HexColor or Color, not number
namedColorFunc(123);
// @ts-expect-error - 'cyan#500' is not a valid Color (cyan not in ColorName)
namedColorFunc("cyan#500");
// @ts-expect-error - 'blue#150' is not a valid Color (150 not in ColorWeight)
namedColorFunc("blue#150");

// Test function return type errors
// @ts-expect-error - getHexString returns HexColor, not Color
const wrongReturn1: Trello.Theming.Color = getHex("red", 700);
// @ts-expect-error - namedColorStringToHex returns HexColor, not Color
const wrongReturn2: Trello.Theming.Color = namedToHex("blue#500");

// Test edge cases with valid combinations
// $ExpectType "shades#0"
const shadesLight: Trello.Theming.Color = "shades#0";
// $ExpectType "neutrals#900"
const neutralsDark: Trello.Theming.Color = "neutrals#900";
// $ExpectType `#${string}`
getHex("business-blue", 10);
// $ExpectType `#${string}`
getHex("sky", 90);

// Test all ColorName values work in Color template
const allColorCombinations: Trello.Theming.Color[] = [
    "blue#500",
    "green#500",
    "orange#500",
    "red#500",
    "yellow#500",
    "purple#500",
    "pink#500",
    "sky#500",
    "lime#500",
    "gray#500",
    "black#500",
    "business-blue#500",
    "shades#500",
    "neutrals#500",
];

// Test all ColorWeight values work in Color template
const allWeightCombinations: Trello.Theming.Color[] = [
    "blue#0",
    "blue#10",
    "blue#20",
    "blue#30",
    "blue#40",
    "blue#50",
    "blue#60",
    "blue#70",
    "blue#80",
    "blue#90",
    "blue#100",
    "blue#200",
    "blue#300",
    "blue#400",
    "blue#500",
    "blue#600",
    "blue#700",
    "blue#800",
    "blue#900",
];
