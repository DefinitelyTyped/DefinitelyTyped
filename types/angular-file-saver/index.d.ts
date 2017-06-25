// Type definitions for angular-file-saver 1.1
// Project: https://github.com/alferov/angular-file-saver
// Definitions by: Donald Nairn <https://github.com/deenairn/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as angular from 'angular';
declare module 'angular' {
    /**
     * A core Angular factory proving FileSaver functionality.
     */
    export interface FileSaver {
        /**
         * Immediately starts saving a file
         * @param data: a Blob instance;
         * @param filename: a String custom filename (an extension is optional);
         * @param disableAutoBOM : (optional) Boolean Disable automatically provided Unicode text encoding hints;
         */
        saveAs(blob: Blob, fileName: string, disableBOM?: boolean): void;
    }
}
