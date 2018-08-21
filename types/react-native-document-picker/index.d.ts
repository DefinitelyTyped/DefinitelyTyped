// Type definitions for react-native-document-picker 2.0
// Project: https://github.com/Elyx0/react-native-document-picker
// Definitions by: Jacob Baskin <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const DocumentPicker: {
    show(options: Options, callback: (error: Error, result: Result) => void): void;
};

export const DocumentPickerUtil: {
    allFiles(): string;
    pdf(): string;
    audio(): string;
    plainText(): string;
};

export interface Options {
    top?: number;
    left?: number;
    filetype: string[];
}

export interface Result {
    uri: string;
    type: string;
    fileName: string;
    fileSize: number;
}
