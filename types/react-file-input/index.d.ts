// Type definitions for react-file-input
// Project: https://www.npmjs.com/package/react-file-input
// Definitions by: Dmitry Rogozhny <https://github.com/dmitryrogozhny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

///<reference types="react" />
///<reference types="react-dom" />

declare module "react-file-input" {
    interface FileInputProps {
        name: string;
        className: string;
        accept: string;
        placeholder: string;
        disabled?: boolean;
        onChange: (event: ReactDOM.SyntheticEvent<any>) => void;
    }

    class FileInput extends React.Component<FileInputProps> {
    }

    export = FileInput;
}
