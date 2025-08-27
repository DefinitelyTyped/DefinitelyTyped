export {};

declare global {
    function saveAs(data: any, filename: string, dataType: string): void;

    /**
     * Save data to file with given filename, using IITCm file chooser, or generic browser routine.
     * `dataType` can be set to filter IITCm file chooser filetypes.
     */
    function saveFile(data: string, filename?: string, dataType?: string): void;
}
