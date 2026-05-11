import * as angular from "angular";

declare const moduleName: "ngFileSaver";
export = moduleName;

declare module "angular" {
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
