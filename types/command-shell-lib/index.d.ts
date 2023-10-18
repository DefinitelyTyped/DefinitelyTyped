/** A single command specifying parameters, description and the corresponding handler. */
export interface Command {
    /**
     * A list of needed parameters for the command
     * (if its invoked with a different number of parameters an error will be raised).
     */
    parameters: string[];
    /** Contains the contents that will be shown in the command help. */
    description: string;
    /** The function that will be called when the command is executed. */
    handler: (params: string[]) => void;
}
/** An object specifying multiple commands and the corresponding name as the attributes key. */
export interface CommandsObject {
    [name: string]: Command;
}
/** A simple object capable of writing to a log location (e. g. a Console object can be used). */
export interface LogWriter {
    log: (message?: any, ...optionalParams: any[]) => void;
}

/** Prints a prompt to the LogWriter if not performing a stress test. */
export function prompt(): void;
/** Shows the command help created from the commands object. */
export function showHelp(commands: CommandsObject): void;
/**
 * Executes the given command (the list of words parsed from the command line input) in the context of the commands
 * describe by the object Commands.
 */
export function executeCommander(command: ReadonlyArray<string>, commands: CommandsObject): void;
/** Creates a function that shows the selected branch (attribute) of the config, formatted with the correct indentation. */
export function showConfig(config: { [name: string]: any }, branch: string): () => void;
/**
 * Initialize the command line client with the given commands and prompt. Each command has the following structure:
 *
 *     'create': {
 *      parameters: ['objectUri'],
 *      description: '\tCreate a new object. The object is specified using the /type/id OMA notation.',
 *      handler: create
 *  }
 *
 * where: the parameters attribute is a list of the needed parameters for the command (if its invoked with a different
 * number of parameters an error will be raised); the description attribute contains the contents that will be shown
 * in the command help; and the handler is the function that will be called when the command is executed.
 */
export function initialize(commands: CommandsObject, promptString: string): void;
/** Destroys the underlying readline interface. */
export function destroy(): void;
/** Creates a function that prints the provided name. */
export function printName(name: string): () => void;
/** Prints a string to signal that a feature has not yet been implemented.  */
export function notImplemented(): void;
/** Handles a standard error by printing its name and message to the configured LogWriter. */
export function handleError(error: Error): void;
/** Sets the LogWriter object to be used for all logging. */
export function setWriter(newWriter: LogWriter): void;
/** Gets the currently used LogWriter object. */
export function getWriter(): LogWriter;
