// Type definitions for react-file-reader
// Project: https://www.npmjs.com/package/react-file-reader
// Definitions by: Luke Schoen <https://github.com/ltfschoen>
//                 Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

///<reference types="react" />

import React, { Component, ReactElement } from "react";

export type FileTypes = '.csv' | '.zip' | '.json' | 'image/*';

declare module "react-file-reader" {
    interface ReactFileReaderProps {
        fileTypes: FileTypes | FileTypes[];
        multipleFiles: boolean;
        base64: boolean;
        disabled: boolean;
        handleFiles: (event: React.SyntheticEvent<any>, fileList: ReadonlyArray<FileList>) => void;
        children: any;
    }

    export class ReactFileReader extends React.Component<ReactFileReaderProps> {
    }
}
