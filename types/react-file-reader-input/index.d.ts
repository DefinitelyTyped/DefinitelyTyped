// Type definitions for react-file-reader-input 1.1
// Project: https://www.npmjs.com/package/react-file-reader-input
// Definitions by: Dmitry Rogozhny <https://github.com/dmitryrogozhny>, Ali Taheri <https://github.com/alitaheri>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

declare class FileInput extends React.Component<FileInput.Props> {
}

declare namespace FileInput {
    type Format = 'buffer' | 'binary' | 'url' | 'text';
    type Result = [ProgressEvent, File];

    interface Props {
        /**
         * what format the `FileReader` should read the file as
         * (i.e., `'buffer'`, `'binary'`, `'url'`, `'text'`).
         *
         * Defaults to `'url'`.
         */
        as?: Format;

        /**
         * Callback function called when the files are choosen by the user.
         *
         * Results will be an array of arrays, the size of which depending
         * on how many files were selected.
         *
         * Each result will be an array of two items:
         *
         * `progressEvent`: `result[0]` is a `ProgressEvent` object.
         * You can retrieve the raw results at `progressEvent.target.result`
         * among other things.
         *
         * `file`: `result[1]` is a `File` object. You can retrieve the file name
         * at file.name among other things.
         *
         * @param event The event that triggered file changes
         * @param results The array of files
         */
        onChange(event: React.SyntheticEvent<any>, results: Result[]): void;
    }
}

export = FileInput;
