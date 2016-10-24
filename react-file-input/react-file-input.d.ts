// Type definitions for react-file-input
// Project: https://www.npmjs.com/package/react-file-input
// Definitions by: Dmitry Rogozhny <https://github.com/dmitryrogozhny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react/react.d.ts" />

declare module "react-file-input" {
    import React = __React;

    interface FileInputProps {
        name: string;
        className: string;
        accept: string;
        placeholder: string;
        disabled?: boolean;
        onChange: (event: React.SyntheticEvent) => void;
    }

    class FileInput extends React.Component<FileInputProps, {}> {
    }

    export = FileInput;
}
