import { Page, ScreenshotOptions as PuppeteerScreenshotOptions } from "puppeteer";
import { JpegOptions, PngOptions, WebpOptions } from "sharp";

interface PngOutputSettings {
    forceExt?: null | "png";
    compressionLevel?: null | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    overrides?: PngOptions;
}
interface JpegOutputSettings {
    forceExt?: null | "jpg" | "jpeg";
    compressionLevel?: null | OneTo100;
    overrides?: JpegOptions;
}
interface WebpOutputSettings {
    forceExt?: null | "webp";
    compressionLevel?: null | OneTo100;
    overrides?: WebpOptions;
}

declare namespace ScreenshotTester {
    type Rectangle = [x: number, y: number, width: number, height: number];
    interface MatchingBox {
        ignoreRectangles?: Rectangle[];
        includeRectangles?: Rectangle[];
    }

    type OutputSettings = PngOutputSettings | JpegOutputSettings | WebpOutputSettings;

    interface ErrorSettings {
        /**
         * Color for error pixels.
         * Valid values are integers from 0 to 255.
         * Defaults to solid pink.
         */
        errorColor?: {
            red?: number;
            green?: number;
            blue?: number;
            alpha?: number;
        };
        errorType?: "flat" | "movement";
        transparency?: number; // from 0 to 1
    }

    interface ScreenshotOptions extends PuppeteerScreenshotOptions {
        saveNewImageOnError?: boolean;
        overwriteImageOnChange?: boolean;
    }
}

type TesterFunction = (
    page: Page,
    name?: string,
    screenshotOptions?: ScreenshotTester.ScreenshotOptions,
) => Promise<boolean>;

declare function ScreenshotTester(
    threshold?: number,
    includeAntialiasing?: boolean,
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
