import { Answers, QuestionCollection } from "inquirer";

type WriteLevel = "DEBUG" | "INFO" | "WARNING" | "ERROR";

export = UI;

/**
 * The UI provides the CLI with a unified mechanism for providing output and
 * requesting input from the user. This becomes useful when wanting to adjust
 * logLevels, or mock input/output for tests.
 */
declare class UI {
    constructor(options?: {
        inputStream?: NodeJS.ReadableStream | undefined;
        outputStream?: NodeJS.WritableStream | undefined;
        errorStream?: NodeJS.WritableStream | undefined;
        writeLevel?: WriteLevel | undefined;
        ci?: boolean | undefined;
    });

    /**
     * Unified mechanism to write a string to the console.
     * Optionally include a writeLevel, this is used to decide if the specific
     * logging mechanism should or should not be printed.
     */
    write(message: string, level?: WriteLevel): void;

    /**
     * Unified mechanism to write a string and new line to the console.
     * Optionally include a writeLevel, this is used to decide if the specific
     * logging mechanism should or should not be printed.
     */
    writeLine(message: string, level?: WriteLevel): void;

    /**
     * Helper method to write a string with the DEBUG writeLevel and gray chalk
     */
    writeDebugLine(message: string): void;

    /**
     * Helper method to write a string with the INFO writeLevel and cyan chalk
     */
    writeInfoLine(message: string): void;

    /**
     * Helper method to write a string with the WARNING writeLevel and yellow chalk.
     * Optionally include a test. If falsy, the warning will be printed. By default, warnings
     * will be prepended with WARNING text when printed.
     */
    writeWarnLine(message: string, test?: boolean, prepend?: boolean): void;

    /**
     * Helper method to write a string with the WARNING writeLevel and yellow chalk.
     * Optionally include a test. If falsy, the deprecation will be printed. By default deprecations
     * will be prepended with DEPRECATION text when printed.
     */
    writeDeprecateLine(message: string, test?: boolean, prepend?: boolean): void;

    /**
     * Unified mechanism to an Error to the console.
     * This will occure at a writeLevel of ERROR
     */
    writeError(error: object): void;

    /**
     * Sets the write level for the UI. Valid write levels are 'DEBUG', 'INFO',
     * 'WARNING', and 'ERROR'.
     */
    setWriteLevel(level: WriteLevel): void;

    /**
     * Begins a progress spinner with a message (only if the INFO write level is visible).
     */
    startProgress(message: string): void;

    /**
     * Ends the current progress spinner.
     */
    stopProgress(): void;

    /**
     * Launch the prompt interface (inquiry session) with (Array of Questions || Question)
     * See [Inquirer.js#question](https://github.com/SBoudrias/Inquirer.js#question) for Question properties
     */
    prompt<T extends Answers>(questions: QuestionCollection<T>, callback?: (answers: T) => void): Promise<T>;
}
