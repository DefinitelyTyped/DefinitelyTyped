/// <reference types="react" />

declare module "react-file-input" {
    interface FileInputProps {
        name: string;
        className: string;
        accept: string;
        placeholder: string;
        disabled?: boolean | undefined;
        onChange: (event: React.SyntheticEvent<any>) => void;
    }

    class FileInput extends React.Component<FileInputProps> {
    }

    export = FileInput;
}
