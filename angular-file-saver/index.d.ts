// Type definitions for angular-file-saver 1.2.0
// Project: https://github.com/alferov/angular-file-saver
// Definitions by: Donald Nairn <https://github.com/deenairn/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace angular {
    interface FileSaver {
        saveAs(blob: Blob, fileName: string, disableBOM: boolean);
    }
}