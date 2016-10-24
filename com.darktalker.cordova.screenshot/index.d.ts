// Type definitions com.darktalker.cordova.screenshot v0.1.5
// Project: https://github.com/gitawego/cordova-screenshot
// Definitions by: Ivana Dolezalova <https://github.com/akarienta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace com.darktalker.cordova.screenshot {
    export interface SaveSuccessObject {
        success: boolean;
        filePath: string;
    }

    interface SaveCallback {
        /**
         * @param errorMessage message of error, null if there isn't any
         * @param successObject object which contains path to the file
         */
        (errorMessage?: string, successObject?: SaveSuccessObject): void;
    }

    export interface URISuccessObject {
        URI: string;
    }

    interface URICallback {
        /**
         * @param errorMessage message of error, null if there isn't any
         * @param successObject object which contains data URI of taken screenshot
         */
        (errorMessage?: string, successObject?: URICallback): void;
    }

    interface Plugin {
        /**
         * Takes a screenshot, saves it to device as JPG and provides a path to the file.
         *
         * @param saveCallback callback function, holds results
         * @param format format of to be taken image, possible values are 'jpg' and 'png' ('jpg' is default)
         * @param quality custom quality of to be taken image in percentage (100 is default)
         * @param filename custom filename of to be taken image, ('screenshot_<milliSecondsSince1970>.<format>' is default)
         */
        save(saveCallback: SaveCallback, format?: string, quality?: number, filename?: string): void;

        /**
         * Takes a screenshot and provides it trough data URI as JPG. No data are saved in the device.
         *
         * @param uriCallback callback function, holds results
         * @param quality custom quality of to be taken image in percentage (100 is default)
         */
        URI(uriCallback: URICallback, quality?: number): void;
    }
}

interface Navigator {
    screenshot: com.darktalker.cordova.screenshot.Plugin;
}
