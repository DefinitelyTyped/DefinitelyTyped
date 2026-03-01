// JSBox Archiver API TypeScript Declaration

declare namespace ArchiverTypes {
    interface ZipOptions {
        files?: NSData[];
        paths?: string[];
        directory?: string;
        dest: string;
        handler?: (success: boolean) => void;
    }

    interface UnzipOptions {
        file?: NSData;
        path?: string;
        dest: string;
        handler: (success: boolean) => void;
    }
}

interface JBArchiver {
    zip(options: ArchiverTypes.ZipOptions): void;
    unzip(options: ArchiverTypes.UnzipOptions): void;
    unzip(options: Omit<ArchiverTypes.UnzipOptions, "handler">): Promise<boolean>;
}

declare const $archiver: JBArchiver;
