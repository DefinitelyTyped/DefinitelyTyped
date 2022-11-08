// Type definitions for kuler 2.0
// Project: https://github.com/3rd-Eden/kuler
// Definitions by: Tristan F. <https://github.com/LeoDog896>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface KulerInstance {
    prefix: string;
    suffix: string;
    text: string;
    /** Parse a hex color string and parse it to it's RGB equiv. */
    hex: (color: string) => [number, number, number];
    /** Transform a 255 RGB value to an RGV code. */
    rgb: (r: number, g: number, b: number) => string;
    /** Turns RGB 0-5 values into a single ANSI code. */
    ansi: (r: number, g: number, b: number) => string;
    /** Marks an end of color sequence. */
    reset: () => string;
    /** Colour the terminal using CSS. */
    style: (color: string) => string;
}

declare function kuler(text: string, color: string): string;
declare function kuler(text: string): KulerInstance;

export = kuler;
