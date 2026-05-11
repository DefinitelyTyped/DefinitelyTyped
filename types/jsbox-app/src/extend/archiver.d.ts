// JSBox Archiver API TypeScript Declaration

declare namespace ArchiverTypes {
    type ZipInput =
        | {
            files: NSData[];
        }
        | {
            paths: string[];
        }
        | {
            directory: string;
        };

    type ZipOptions = {
        dest: string;
        handler: (success: boolean) => void;
    } & ZipInput;

    type ZipPromiseOptions = {
        dest: string;
    } & ZipInput;

    type UnzipInput =
        | {
            file: NSData;
        }
        | {
            path: string;
        };

    type UnzipOptions = {
        dest: string;
        handler: (success: boolean) => void;
    } & UnzipInput;

    type UnzipPromiseOptions = {
        dest: string;
    } & UnzipInput;
}

interface JBArchiver {
    zip(options: ArchiverTypes.ZipOptions): void;
    zip(options: ArchiverTypes.ZipPromiseOptions): Promise<boolean>;
    unzip(options: ArchiverTypes.UnzipOptions): void;
    unzip(options: ArchiverTypes.UnzipPromiseOptions): Promise<boolean>;
}

declare const $archiver: JBArchiver;
