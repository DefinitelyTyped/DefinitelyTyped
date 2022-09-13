import * as File from 'vinyl';

declare namespace Conflicter {
    /**
     * Provides options for creating a conflicter.
     */
    interface ConflicterOptions {
        /**
         * A value indicating whether conflicts shouldn't be checked.
         */
        force?: boolean;

        /**
         * A value indicating whether the conflicter should stop when the first conflict occurs.
         */
        bail?: boolean;

        /**
         * A value indicating whether whitespace characters should be ignored when checking for changes.
         */
        ignoreWhitespace?: boolean;

        /**
         * A value indicating whether identical files should be written to the disk as well.
         */
        regenerate?: boolean;

        /**
         * A value indicating whether no operations should be executed.
         */
        dryRun?: boolean;

        /**
         * The path to be used as a reference for relative paths.
         */
        cwd?: string;
    }

    /**
     * Represents a file which can be checked for conflicts.
     */
    type ConflicterFile = Pick<File, "path" | "contents">;

    /**
     * The status of a checked file.
     */
    type Status = "skip" | "create" | "force" | "identical";

    /**
     * Represents a checked file.
     */
    interface CheckedFile extends File {
        /**
         * The status of the file.
         */
        conflicter: Status;
    }
}

declare class Conflicter {
    /**
     * A value indicating whether conflicts shouldn't be checked.
     */
    force: boolean;

    /**
     * Detects conflicts between the actual file located at the `path` and the `contents` passed to the function.
     *
     * @param file
     * The file to check for conflicts.
     *
     * @returns
     * A value indicating whether there is a conflict.
     */
    _detectConflict(file: Conflicter.ConflicterFile): boolean;

    /**
     * Prints the differences of the specified `file` to the console.
     *
     * @param file
     * The file to print the diff for.
     */
    _printDiff(file: Conflicter.ConflicterFile): void;

    /**
     * Checks whether the specified `file` conflicts with the file saved on the disk.
     *
     * @param file
     * The file to check for conflicts.
     */
    checkForCollision(file: File): Promise<Conflicter.CheckedFile>;
}

export = Conflicter;
