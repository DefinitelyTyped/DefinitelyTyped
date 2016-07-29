// Type definitions for react-file-reader-input
// Project: https://www.npmjs.com/package/react-file-reader-input
// Definitions by: Dmitry Rogozhny <https://github.com/dmitryrogozhny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react/react.d.ts" />

declare module "react-file-reader-input" {
    import React = __React;

    interface FileInputProps {
        as?: string;
        onChange?: (event: React.SyntheticEvent, results: any) => void;
    }

    class FileInput extends React.Component<FileInputProps, {}> {
    }

    export = FileInput;
}
