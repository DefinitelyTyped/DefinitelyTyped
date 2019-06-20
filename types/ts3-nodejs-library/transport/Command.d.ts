declare class Command {
    constructor();

    /**
     * Initializes the Respone with default values
     */
    reset(): this;

    /**
     * Sets the main command to send
     * @param - Sets the command which will be sent to the TeamSpeak Query
     */
    setCommand(cmd: string): this;

    /**
     * Sets the TeamSpeak Key Value Pairs
     * @param - Sets the Object with the key value pairs which should get sent to the TeamSpeak Query
     */
    setOptions(opts: any): this;

    /**
     * Sets the TeamSpeak Key Value Pairs
     * @param - Sets the Object with the key value pairs which should get sent to the TeamSpeak Query
     */
    setMultiOptions(opts: []): this;

    /**
     * Checks wether there are options used with this command
     */
    hasOptions(): boolean;

    /**
     * Checks wether there are options used with this command
     */
    hasMultiOptions(): boolean;

    /**
     * Set TeamSpeak Flags
     * @param - Sets the Flags which should get sent to the TeamSpeak Query
     */
    setFlags(flags: any): this;

    /**
     * Checks wether there are flags used with this command
     */
    hasFlags(): boolean;

    /**
     * Set the Line which has been received from the TeamSpeak Query
     * @param - The Line which has been received from the TeamSpeak Query
     */
    setResponse(line: string): this;

    /**
     * Set the error line which has been received from the TeamSpeak Query
     * @param - The error Line which has been received from the TeamSpeak Query
     */
    setError(error: string): this;

    /**
     * Get the Parsed Error Object which has been received from the TeamSpeak Query
     * @returns the Parsed Error Object
     */
    getError(): any;

    /**
     * Checks if a error has been received
     * @returns true when a error has been received
     */
    hasError(): boolean;

    /**
     * Get the Parsed Response Object which has been received from the TeamSpeak Query
     * @returns the Parsed Response Object
     */
    getResponse(): any;

    /**
     * Parses a Query Response
     * @param - The Line which has been received
     * @returns the parsed Data
     */
    static parse(data: string): any;

    /**
     * Checks if a error has been received
     * @version 1.0
     * @returns the parsed String which is readable by the TeamSpeak Query
     */
    build(): string;

    /**
     * Parses a value to the type which the key represents
     * @param - The Key which should get looked up
     * @param - The value which should get parsed
     * @returns the parsed Data
     */
    static parseValue(k: string, v: any): any;
}

export = Command;
