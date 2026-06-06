/// <reference types="node"/>
/// <reference types="vinyl" />

import { Transform } from "stream";
import File = require("vinyl");

interface IComparator {
    /**
     * @param stream Should be used to queue sourceFile if it passes some comparison
     * @param sourceFile File to operate on
     * @param destPath Destination for sourceFile as an absolute path
     */
    (stream: Transform, sourceFile: File, destPath: string): void;
}

interface IDestination {
    (file: string | Buffer): string;
}

interface IOptions {
    /**
     * The working directory the folder is relative to.
     * @default process.cwd()
     */
    cwd?: string | undefined;

    /**
     * Extension of the destination files.
     */
    extension?: string | undefined;

    /**
     * Function that determines whether the source file is different from the destination file.
     * @default changed.compareLastModifiedTime
     */
    hasChanged?: IComparator | undefined;

    /**
     * Function to transform the path to the destination file. Should return the absolute path to the (renamed) destination file.
     */
    transformPath?: ((destPath: string) => string) | undefined;
}

interface IGulpChanged {
    (destination: string | IDestination, options?: IOptions): NodeJS.ReadWriteStream;

    compareLastModifiedTime: IComparator;
    compareContents: IComparator;
}

declare const changed: IGulpChanged;
export = changed;
