// Type definitions for angular-clipboard v1.5
// Project: https://github.com/omichelsen/angular-clipboard
// Definitions by: Bradford Wagner <https://github.com/bradfordwagner/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default 'angular.clipboard';
export type ClipboardService = angular.clipboard.ClipboardService;

declare module 'angular' {
    export namespace clipboard {
        /**
         * Definition of the Clipboard Service
         */
        interface ClipboardService {
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
}
