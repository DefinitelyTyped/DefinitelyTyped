declare namespace CordovaPluginsSaveDialog {
    interface CordovaPluginsSaveDialog {
        /**
         * Opens a save dialog and store raw contents in a file.
         *
         * @param blob The file contents.
         * @param name A file name to display on default. If omitted, `unknown` is used.
         *
         * @returns A promise whose fulfillment value is a URI of the saved file in the user-selected location.
         */
        saveFile(blob: Blob, name?: string): Promise<string>;
    }
}

interface CordovaPlugins {
    saveDialog: CordovaPluginsSaveDialog.CordovaPluginsSaveDialog;
}
