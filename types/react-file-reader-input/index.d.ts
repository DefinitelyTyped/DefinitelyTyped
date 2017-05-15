// Type definitions for react-file-reader-input
// Project: https://www.npmjs.com/package/react-file-reader-input
// Definitions by: Dmitry Rogozhny <https://github.com/dmitryrogozhny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

///<reference types="react" />

declare module "react-file-reader-input" {
    interface FileInputProps {
        as?: string;
        onChange?: (event: React.SyntheticEvent<any>, results: any) => void;
    }

    class FileInput extends React.Component<FileInputProps, {}> {
    }

    export = FileInput;
}
