/**
 * Options for function `start`
 */
export interface StartOptions {
    /**
     * Should annyang restart itself if it is closed indirectly, because of silence or window conflicts?
     */
    autoRestart?: boolean | undefined;
    /**
     * Allow forcing continuous mode on or off. Annyang is pretty smart about this, so only set this if you know what you're doing.
     */
    continuous?: boolean | undefined;
}

/**
 * A command option that supports custom regular expressions
 */
export interface CommandOptionRegex {
    regexp: RegExp;
    callback(): void;
}

/**
 * Commands that annyang should listen to
 *
 * #### Examples:
 * ````javascript
 * {'hello :name': helloFunction, 'howdy': helloFunction};
 * {'hi': helloFunction};
 * ````
 */
export interface CommandOption {
    [command: string]: CommandOptionRegex | (() => void);
}

/**
 * Supported Events that will be triggered to listeners, you attach using `annyang.addCallback()`
 *
 * `start` - Fired as soon as the browser's Speech Recognition engine starts listening
 * `error` - Fired when the browser's Speech Recogntion engine returns an error, this generic error callback will be followed by more accurate error callbacks (both will fire if both are defined)
 * `errorNetwork` - Fired when Speech Recognition fails because of a network error
 * `errorPermissionBlocked` - Fired when the browser blocks the permission request to use Speech Recognition.
 * `errorPermissionDenied` - Fired when the user blocks the permission request to use Speech Recognition.
 * `end` - Fired when the browser's Speech Recognition engine stops
 * `result` - Fired as soon as some speech was identified. This generic callback will be followed by either the `resultMatch` or `resultNoMatch` callbacks.
 *     Callback functions registered to this event will include an array of possible phrases the user said as the first argument
 * `resultMatch` - Fired when annyang was able to match between what the user said and a registered command
 *     Callback functions registered to this event will include three arguments in the following order:
 *       * The phrase the user said that matched a command
 *       * The command that was matched
 *       * An array of possible alternative phrases the user might've said
 * `resultNoMatch` - Fired when what the user said didn't match any of the registered commands.
 *     Callback functions registered to this event will include an array of possible phrases the user might've said as the first argument
 */
export type Events =
    | "start"
    | "soundstart"
    | "error"
    | "end"
    | "result"
    | "resultMatch"
    | "resultNoMatch"
    | "errorNetwork"
    | "errorPermissionBlocked"
    | "errorPermissionDenied";

export interface Annyang {
    /**
     * Start listening.
     * It's a good idea to call this after adding some commands first, but not mandatory.
     */
    start(options?: StartOptions): void;

    /**
     * Stop listening, and turn off mic.
     */
    abort(): void;

    /**
     * Pause listening. annyang will stop responding to commands (until the resume or start methods are called), without turning off the browser's SpeechRecognition engine or the mic.
     */
    pause(): void;

    /**
     * Resumes listening and restores command callback execution when a result matches.
     * If SpeechRecognition was aborted (stopped), start it.
     */
    resume(): void;

    /**
     * Turn on output of debug messages to the console. Ugly, but super-handy!
     *
     * @param [newState=true] Turn on/off debug messages
     */
    debug(newState?: boolean): void;

    /**
     * Set the language the user will speak in. If this method is not called, defaults to 'en-US'.
     *
     * @see [Languages](https://github.com/TalAter/annyang/blob/master/docs/FAQ.md#what-languages-are-supported)
     */
    setLanguage(lang: string): void;

    /**
     * Add commands that annyang will respond to. Similar in syntax to init(), but doesn't remove existing commands.
     *
     * #### Examples:
     * ````javascript
     * var commands = {'hello :name': helloFunction, 'howdy': helloFunction};
     * var commands2 = {'hi': helloFunction};
     *
     * annyang.addCommands(commands);
     * annyang.addCommands(commands2);
     * // annyang will now listen to all three commands
     * ````
     */
    addCommands(commands: CommandOption): void;

    /**
     * Removes all existing commands or a specific command
     * #### Examples:
     * ````javascript
     * var commands : annyang.CommandOption = {'hello': helloFunction, 'howdy': helloFunction, 'hi': helloFunction};
     *
     * // Don't respond to hello
     * annyang.removeCommands('hello');
     *
     * // Remove all existing commands
     * annyang.removeCommands();
     * ````
     */
    removeCommands(command?: string): void;

    /**
     * Removes a list of commands
     * #### Examples:
     * ````javascript
     * var commands : annyang.CommandOption = {'hello': helloFunction, 'howdy': helloFunction, 'hi': helloFunction};
     * // Add some commands
     * annyang.addCommands(commands);
     * // Don't respond to howdy or hi
     * annyang.removeCommands(['howdy', 'hi']);
     * ````
     */
    removeCommands(command: string[]): void;

    addCallback(
        event: Events,
        callback: (userSaid?: string, commandText?: string, results?: string[]) => void,
        context?: any,
    ): void;

    removeCallback(event?: Events, callback?: (userSaid: string, commandText: string, results: string[]) => void): void;

    /**
     * Returns true if speech recognition is currently on.
     * Returns false if speech recognition is off or annyang is paused.
     */
    isListening(): boolean;

    /**
     * Returns the instance of the browser's SpeechRecognition object used by annyang.
     * Useful in case you want direct access to the browser's Speech Recognition engine.
     */
    getSpeechRecognizer(): any;

    /**
     * Simulate speech being recognized. This will trigger the same events and behavior as when the Speech Recognition
     * detects speech.
     *
     * Can accept either a string containing a single sentence, or an array containing multiple sentences to be checked
     * in order until one of them matches a command (similar to the way Speech Recognition Alternatives are parsed)
     *
     * #### Examples:
     * ````javascript
     * annyang.trigger('Time for some thrilling heroics');
     * annyang.trigger(
     *     ['Time for some thrilling heroics', 'Time for some thrilling aerobics']
     *   );
     * ````
     */
    trigger(command: string | string[]): void;
}
