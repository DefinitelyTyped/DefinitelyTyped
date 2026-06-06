import * as React from "react";

// note: BigTextProps.colors are based on cfonts (https://github.com/dominikwilkowski/cfonts). I will have commented out
// some of the accepted inputs. Becuase it also allows for hex colors, I decided to not narrow it down
// from a string type. A regex would be VERY useful here, but is unfortunately unsupported
// (see this issue: https://github.com/Microsoft/TypeScript/issues/6579). I will happily update this type if
// this feature ever gets added! That way the colors[] will be typed as any of the accepted colors OR a valid hex color.
// However until then, the type will be string.

// The official cfont docs state the following would be accepted (in addition to any valid hex):
// type DefinedColors =
//     | 'system'
//     | 'black'
//     | 'red'
//     | 'green'
//     | 'yellow'
//     | 'blue'
//     | 'magenta'
//     | 'cyan'
//     | 'white'
//     | 'gray'
//     | 'redBright'
//     | 'greenBright'
//     | 'yellowBright'
//     | 'blueBright'
//     | 'magentaBright'
//     | 'cyanBright'
//     | 'whiteBright';

interface BigTextProps {
    text: string;
    font?:
        | "block"
        | "slick"
        | "tiny"
        | "grid"
        | "pallet"
        | "shade"
        | "simple"
        | "simpleBlock"
        | "3d"
        | "simple3d"
        | "chrome"
        | "huge"
        | undefined;
    align?: "left" | "center" | "right" | undefined;
    colors?: string[] | undefined;
    backgroundColor?:
        | "transparent"
        | "black"
        | "red"
        | "green"
        | "yellow"
        | "blue"
        | "magenta"
        | "cyan"
        | "white"
        | undefined;
    letterSpacing?: number | undefined;
    lineHeight?: number | undefined;
    space?: boolean | undefined;
    maxLength?: number | undefined;
}

declare const BigText: React.FC<BigTextProps>;
export = BigText;
