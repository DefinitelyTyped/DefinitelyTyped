import ScreenshotTester, { OutputSettings, ScreenshotOptions } from "puppeteer-screenshot-tester";

let outputSettings: OutputSettings;
// Test limits of the compressionclevel that goes from 0 to 9
outputSettings = {
    forceExt: "png",
    // @ts-expect-error
    compressionLevel: -1,
};
outputSettings = {
    forceExt: "png",
    compressionLevel: 0,
};
outputSettings = {
    forceExt: "png",
    compressionLevel: 9,
};
// @ts-expect-error
outputSettings = {
    forceExt: "png",
    compressionLevel: 10,
};

// Test limits of the compression that goes from 1 to 100
// @ts-expect-error
outputSettings = {
    forceExt: "jpg",
    compressionLevel: 0,
};
outputSettings = {
    forceExt: "jpg",
    compressionLevel: 1,
};
outputSettings = {
    forceExt: "jpg",
    compressionLevel: 100,
};
outputSettings = {
    forceExt: "jpg",
    // @ts-expect-error
    compressionLevel: 101,
};

// Test that ScheenshotOptions only accepts those properties which are in Puppeteer.ScreenshotOptions
let screenshotOptions: ScreenshotOptions;
screenshotOptions = { fullPage: true };
// @ts-expect-error
screenshotOptions = { nonexistent: "some-value" };

// Test that ScheenshotOptions also accepts saveNewImageOnError and overwriteImageOnChange which are not in Puppeteer.ScreenshotOptions
screenshotOptions = { saveNewImageOnError: true, overwriteImageOnChange: true };

// $ExpectType Promise<TesterFunction>
ScreenshotTester();
