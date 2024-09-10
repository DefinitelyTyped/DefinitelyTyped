import { Page, ScreenshotOptions as PuppeteerScreenshotOptions } from "puppeteer";
import { JpegOptions, PngOptions, WebpOptions } from "sharp";

interface PngOutputSettings {
    /**
     * If not null or undefined, overrides the extension provided in
     * either the type or path options of the ScreenshotOptions and
     * therefore will affect which image formatter is used.
     * If the extension is not declared neither in forceExt, path or
     * type properties, the overall default will finally be 'png'.
     *
     * @defaultValue `null`
     */
    forceExt?: null | "png";

    /**
     * Sets the compression level.
     * Valid values are null or integers from 0 to 9.
     * If null or undefined, internally gets the value 8.
     *
     * @defaultValue `null`
     */
    compressionLevel?: null | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

    /**
     * Overrides the default options of the image formatter.
     *
     * @defaultValue `{}`
     */
    overrides?: PngOptions;
}

interface JpegOutputSettings {
    /**
     * If not null or undefined, overrides the extension provided in either
     * the type or path options of the ScreenshotOptions and therefore will
     * affect which image formatter is used.
     *
     * @defaultValue `null`
     */
    forceExt?: null | "jpg" | "jpeg";

    /**
     * Sets the compression level.
     * Valid values are null or integers from 1 to 100.
     * If null or undefined, internally gets the value 85.
     *
     * @defaultValue `null`
     */
    compressionLevel?: null | OneTo100;

    /**
     * Overrides the default options of the image formatter.
     *
     * @defaultValue `{}`
     */
    overrides?: JpegOptions;
}

interface WebpOutputSettings {
    /**
     * If not null or undefined, overrides the extension provided in either
     * the type or path options of the ScreenshotOptions and therefore will
     * affect which image formatter is used.
     *
     * @defaultValue `null`
     */
    forceExt?: null | "webp";

    /**
     * Set the compression level.
     * Valid values are null or integers from 1 to 100.
     * If null or undefined, internally gets the value 85.
     *
     * @defaultValue `null`
     */
    compressionLevel?: null | OneTo100;

    /**
     * Overrides the default options of the image formatter.
     *
     * @defaultValue `{}`
     */
    overrides?: WebpOptions;
}

declare namespace ScreenshotTester {
    type Rectangle = [x: number, y: number, width: number, height: number];
    interface MatchingBox {
        /**
         * Rectangles to ignore when comparing the expected image with the actual.
         *
         * @defaultValue `[]`
         */
        ignoreRectangles?: Rectangle[];

        /**
         * Rectangles to be included when comparing the expected image with the actual.
         *
         * @defaultValue `[]`
         */
        includeRectangles?: Rectangle[];
    }

    type OutputSettings = PngOutputSettings | JpegOutputSettings | WebpOutputSettings;

    interface ErrorSettings {
        /**
         * Color for error pixels.
         * Valid values are integers from 0 to 255.
         * Default equals to a solid pink.
         *
         * @defaultValue `{red: 255, green: 0, blue: 255, alpha: 255}`
         */
        errorColor?: {
            red?: number;
            green?: number;
            blue?: number;
            alpha?: number;
        };

        /**
         * @defaultValue `'flat'`
         */
        errorType?: "flat" | "movement";

        /**
         * Multiplier of the alpha channel of error color.
         * Valid values are decimals from 0 to 1.
         *
         * @defaultValue `0.7`
         */
        transparency?: number;
    }

    interface ScreenshotOptions extends PuppeteerScreenshotOptions {
        /**
         * When the test fails, the new image will be stored separated from the old one.
         *
         * @defaultValue `false`
         */
        saveNewImageOnError?: boolean;

        /**
         * When the test fails, the new image will be stored overwritng the old one.
         * If value is `true` the saveNewImageOnError option doesn't have any effect.
         *
         * @defaultValue `false`
         */
        overwriteImageOnChange?: boolean;
    }
}

type TesterFunction = (
    page: Page,
    /**
     * Becomes part of the filename of the image in case that the filename is not
     * included in the path property of the ScreenshotOptions object.
     *
     * @defaultValue `'test'`
     */
    name?: string,
    screenshotOptions?: ScreenshotTester.ScreenshotOptions,
) => Promise<boolean>;

declare function ScreenshotTester(
    /**
     * Percentage of error pixels over total above which it will be considered an error.
     * Valid values go from 0 to 100 accepting up to two point decimals.
     *
     * @defaultValue `0`
     */
    threshold?: number,
    /**
     * @defaultValue `false`
     */
    includeAntialiasing?: boolean,
    /**
     * Ignore colors on the comparison.
     *
     * @defaultValue `false`
     */
    ignoreColors?: boolean,
    matchingBox?: ScreenshotTester.MatchingBox,
    errorSettings?: ScreenshotTester.ErrorSettings,
    outputSettings?: ScreenshotTester.OutputSettings,
): Promise<TesterFunction>;

type OneTo100 =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32
    | 33
    | 34
    | 35
    | 36
    | 37
    | 38
    | 39
    | 40
    | 41
    | 42
    | 43
    | 44
    | 45
    | 46
    | 47
    | 48
    | 49
    | 50
    | 51
    | 52
    | 53
    | 54
    | 55
    | 56
    | 57
    | 58
    | 59
    | 60
    | 61
    | 62
    | 63
    | 64
    | 65
    | 66
    | 67
    | 68
    | 69
    | 70
    | 71
    | 72
    | 73
    | 74
    | 75
    | 76
    | 77
    | 78
    | 79
    | 80
    | 81
    | 82
    | 83
    | 84
    | 85
    | 86
    | 87
    | 88
    | 89
    | 90
    | 91
    | 92
    | 93
    | 94
    | 95
    | 96
    | 97
    | 98
    | 99
    | 100;

export = ScreenshotTester;
