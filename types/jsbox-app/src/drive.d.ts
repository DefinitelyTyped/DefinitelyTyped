// JSBox iCloud API TypeScript Declaration

declare namespace DriveTypes {
    interface DriveOpenOptions {
        types?: string[];
        handler: (data: NSData) => void;
    }

    interface DriveOpenOptionsMulti {
        types?: string[];
        multi: true;
        handler: (files: NSData[]) => void;
    }

    interface SaveOptions {
        data: NSData;
        name: string;
        handler?: (path: string) => void;
        // Empirical testing shows that the handler has an available parameter, which is the file path.
    }
}

interface JBDrive {
    open(options: DriveTypes.DriveOpenOptions): void;
    open(options?: Omit<DriveTypes.DriveOpenOptions, "handler">): Promise<NSData>;
    open(options: DriveTypes.DriveOpenOptionsMulti): void;
    open(options: Omit<DriveTypes.DriveOpenOptionsMulti, "handler">): Promise<NSData[]>;

    save(options: DriveTypes.SaveOptions): void;
    save(options: Omit<DriveTypes.SaveOptions, "handler">): Promise<string>;
    // Empirical testing shows that this method returns a file path.

    read(path: string): NSData;
    download(path: string): Promise<NSData>;
    write(args: { data: NSData; path: string }): boolean;
    delete(path: string): boolean;
    list(path: string): string[];
    copy(args: { src: string; dst: string }): boolean;
    move(args: { src: string; dst: string }): boolean;
    mkdir(path: string): boolean;
    exists(path: string): boolean;
    isDirectory(path: string): boolean;
    absolutePath(path: string): string;
}

declare const $drive: JBDrive;
