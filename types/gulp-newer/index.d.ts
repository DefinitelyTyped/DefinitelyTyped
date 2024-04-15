/// <reference types="node"/>

interface IDestinationOption {
    /**
     * Path to destination directory or file.
     */
    dest: string;
}

interface IExtOption {
    /**
     * Source files will be matched to destination files with the provided extension.
     */
    ext: string;
}

interface IMapOption {
    /**
     * Map relative source paths to relative destination paths.
     */
    map: (relativePath: string) => string;
}

interface IExtraOption {
    /**
     * An extra file, file glob, or list of extra files and/or globs, to check for updated time stamp(s).
     * If any of these files are newer than the destination files, then all source files will be passed into the stream.
     */
    extra?: string | string[];
}

type ValidOptionPermutations =
    | (IDestinationOption & Partial<IExtOption> & Partial<IMapOption>)
    | (Partial<IDestinationOption> & Partial<IExtOption> & IMapOption);

type IOptions = IExtraOption & ValidOptionPermutations;

interface IGulpNewer {
    /**
     * Create a transform stream that passes through files whose modification time
     * is more recent than the corresponding destination file's modification time.
     * @param dest Path to destination directory or file.
     */
    (dest: string): NodeJS.ReadWriteStream;

    /**
     * Create a transform stream that passes through files whose modification time
     * is more recent than the corresponding destination file's modification time.
     */
    (options: IOptions): NodeJS.ReadWriteStream;
}

declare const newer: IGulpNewer;
export = newer;
