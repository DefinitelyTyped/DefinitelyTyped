// Type definitions for angular-clipboard v1.5
// Project: https://github.com/omichelsen/angular-clipboard
// Definitions by: Bradford Wagner <https://github.com/bradfordwagner/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'angular-clipboard' {
    export type IClipboardService = angular.clipboard.IClipboardService;
}

declare namespace angular.clipboard {
    /**
     * Definition of the Clipboard Service
     */
    interface IClipboardService {
        /**
         * tells us whether or not angular-clipboard is supported
         */
        supported: boolean;

        /**
         * copies text to a clipboard
         * @param text the text to be copied to the clipboard
         */
        copyText(text: string): void;
    }
}
