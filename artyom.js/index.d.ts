// Type definitions for artyom.js
// Project: https://github.com/sdkcarlos/artyom.js
// Definitions by: Sema García (José Manuel García) <https://github.com/semagarcia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Artyom configuration object, contains the properties to initialize Artyom.js engine.
 */
type artyomConfigProperties = {
    /** Set the default language of artyom with this property */
    lang?: string,
    recognizing?: boolean,
    /** Choose if should listen one command and then stops, or listening forever */
    continuous?: boolean,
    /** Moderates the speed with which Artyom talks (0 ~ 1) */
    speed?: number,
    /** Adjust the volume of the voice of artyom */
    volume?: number,
    /** If listen is equal to true the voice recognition will be started otherwise this property can be ignored */
    listen: boolean,
    /** Recognition mode: normal, quick, remote */
    mode?: string,
    /** Displays all the grammars recognized in the console */
    debug: boolean,
    helpers?: {
        redirectRecognizedTextOutput: any,
        remoteProcessorHandler: any,
        lastSay: any
    },
    /** Set a keyword that allows your command to be executed immediately when you say this word (Useful in noisy environments) */
    executionKeyword?: string,
    /** Set a keyword that allows to enable the command recognition automatically if this word is recognized while artyom is paused (artyom.dontObey) */
    obeyKeyword?: string,
    speaking?: boolean,
    obeying?: boolean,
    soundex?: boolean
}

/**
 * Artyom command object. A command is a Javascript Literal Object and supports the following properties.
 * A normal command is composed by (indexes, action); smart command is composed by (indexes, action, smart=true).
 * The description field is optional.
 */
type artyomCommand = {
    /** Description of the command */
    description?: string,
    /** Flag to specify is a command is either normal or smart */
    smart?: boolean,
    /** Triggers of the command */
    indexes: string[],
    /** Logic to execute when the command is triggered */
    action: (i: number, wildcard?: string) => void
}

/**
 * 
 */
interface ArtyomJS { 
    /**
     * Contains some basic information that artyom needs to know as the type of device and browser
     * @see http://ourcodeworld.com/projects/projects-documentation/6/read-doc/artyom-device/artyom-js
     */
    device?: {
        isChrome: boolean | RegExpMatchArray,
        isMobile: boolean | RegExpMatchArray
    },

    /**
     * Artyom can return inmediately the voices available in your browser.
     * @see http://ourcodeworld.com/projects/projects-documentation/14/read-doc/artyom-getvoices/artyom-js
     * @returns {Array}
     */
    getVoices?: () => any,

    /**
     * Returns an array with all the available commands for artyom.
     * @see http://ourcodeworld.com/projects/projects-documentation/10/read-doc/artyom-getavailablecommands/artyom-js
     * @returns {Array}
     */
    getAvailableCommands?: () => any,

    /**
     * Set up artyom for the application. This function will set the default language used by artyom
     * or notice the user if artyom is not supported in the actual browser.
     * @see http://ourcodeworld.com/projects/projects-documentation/15/read-doc/artyom-initialize/artyom-js
     * @returns {Boolean}
     */
    initialize?: (config: artyomConfigProperties) => boolean,

    /**
     * Force artyom to stop listen even if is in continuos mode.
     * @see http://ourcodeworld.com/projects/projects-documentation/9/read-doc/artyom-fatality/artyom-js
     * @returns {Boolean}
     */
    fatality?: () => boolean,

    /**
     * Add dinamically commands to artyom using. You can even add commands while artyom is active.
     * @see http://ourcodeworld.com/projects/projects-documentation/4/read-doc/artyom-addcommands/artyom-js
     * @param {Object | Array[Objects]} param
     */
    addCommands?: (param: artyomCommand) => any,

    /**
     * Remove the commands of artyom with indexes that matches with the given text.
     * @see http://ourcodeworld.com/projects/projects-documentation/19/read-doc/artyom-removecommands/artyom-js
     * @returns {Array}
     */
    removeCommands?: (identifier: string) => artyomCommand[],

    /**
     * Removes all the added commands of artyom.
     * @see http://ourcodeworld.com/projects/projects-documentation/7/read-doc/artyom-emptycommands/artyom-js
     */
    emptyCommands?: () => any,

    /**
     * Stops the actual and pendings messages that artyom have to say.
     * @see http://ourcodeworld.com/projects/projects-documentation/23/read-doc/artyom-shutup/artyom-js
     */
    shutUp?: () => void,

    /**
     * Returns an object with the actual properties of artyom.
     * @see http://ourcodeworld.com/projects/projects-documentation/12/read-doc/artyom-getproperties/artyom-js
     */
    getProperties?: () => artyomConfigProperties,

    /**
     * Create a listener when an artyom action is called.
     * @see http://ourcodeworld.com/projects/projects-documentation/24/read-doc/artyom-when/artyom-js
     */
    when?: (event: any, action: Function) => any,

    /**
     * Returns the code language of artyom according to initialize function.
     * @see http://ourcodeworld.com/projects/projects-documentation/11/read-doc/artyom-getlanguage/artyom-js
     * @returns {String} Language
     */
    getLanguage?: () => string,

    /**
     * Process the given text into chunks and execute the private function artyom_talk.
     * @param {String} message Text to be spoken
     * @param {Object} callbacks { onStart, onEnd }
     * @see http://ourcodeworld.com/projects/projects-documentation/20/read-doc/artyom-say/artyom-js
     */
    say?: (message: string, callbacks?: Object) => any,

    /**
     * Repeats the last sentence that artyom said. Useful in noisy environments.
     * @param {Boolean} returnObject If set to true, an object with the text and the timestamp when was executed will be returned.
     * @see http://ourcodeworld.com/projects/projects-documentation/25/read-doc/artyom-repeatlastsay/artyom-js
     */
    repeatLastSay?: (returnObject: boolean) => any,

    /**
     * Verify if the browser supports speechSynthesis.
     * @see http://ourcodeworld.com/projects/projects-documentation/40/read-doc/artyom-speechsupported/artyom-js
     * @returns {Boolean}
     */
    speechSupported?: () => boolean,

    /**
     * Verify if the browser supports webkitSpeechRecognition.
     * @see http://ourcodeworld.com/projects/projects-documentation/39/read-doc/artyom-recognizingsupported/artyom-js
     * @returns {Boolean}
     */
    recognizingSupported?: () => boolean,

    /**
     * Simulate a voice command via JS.
     * @see http://ourcodeworld.com/projects/projects-documentation/22/read-doc/artyom-simulateinstruction/artyom-js
     * @returns {Boolean}
     */
    simulateInstruction?: (sentence: any) => boolean,

    /**
     * Displays a message in the console if the artyom propery DEBUG is set to true.
     * @param {string} error The error to be debugged
     * @param {string} level Error level: { error | warn | info }
     * @see http://ourcodeworld.com/projects/projects-documentation/38/read-doc/artyom-debug/artyom-js
     */
    debug?: (error: string, level?: string) => void,

    /**
     * Allows to retrieve the recognized spoken text of artyom and do something with it everytime something is recognized.
     * @param {String} action
     * @returns {Boolean}
     */
    redirectRecognizedTextOutput?: (action: string) => boolean,

    /**
     * Says a random quote and returns it's object.
     * @param data 
     */
    sayRandom?: (data: any) => any,

    /**
     * Artyom provide an easy way to create a dictation for your user. Just create an instance and start and stop when you want.
     */
    newDictation?: (settings: any) => any,

    /**
     * A voice prompt will be executed.
     */
    newPrompt?: (config: any) => any,

    /**
     * Extend the functions of artyom as you like.
     * It's no possible to add properties to the artyom object as artyom is a non-extensible object.
     * If you need to extend the artyom functions you can easily extend the "extensions" properties.
     * 
     * @example <caption>Creating a custom artyom method</caption>
     *   // creates artyom.extensions.hello method
     *   artyom.extensions.hello = function(){
     *     artyom.say("Hello !");
     *   };
     */
    extensions?: () => Object,

    /**
     * This function will return the webkitSpeechRecognition object used by artyom retrieve it only to debug on it or get some 
     * values, do not make changes directly.
     */
    getNativeApi?: () => any,

    /**
     * This function returns a boolean according to the SpeechRecognition status if artyom is listening, will return true.
     * Note: This is not a feature of SpeechRecognition, therefore this value hangs on the fiability of the onStart and onEnd 
     * events of the SpeechRecognition
     * @returns {Boolean}
     */
    isRecognizing?: () => boolean,

    /**
     * This function returns a boolean according to the speechSynthesis status if artyom is speaking, will return true.
     * Note: This is not a feature of speechSynthesis, therefore this value hangs on the fiability of the onStart and onEnd 
     * events of the speechSynthesis.
     * @returns {Boolean}
     */
    isSpeaking?: () => boolean,

    /**
     * The SpeechSynthesisUtterance objects are stored in the artyom_garbage_collector variable to prevent the wrong behaviour 
     * of artyom.say. Use this method to clear all spoken SpeechSynthesisUtterance unused objects.
     * @returns {Boolean}
     */
    clearGarbageCollection?: () => any,

    /**
     * Returns the SpeechSynthesisUtterance garbageobjects.
     */
    getGarbageCollection?: () => any,

    /**
     * Pause the processing of commands. Artyom still listening in the background and it can be resumed after a couple of seconds.
     * @returns {Boolean}
     */
    dontObey?: () => boolean,

    /**
     * Allow artyom to obey commands again.
     * @returns {Boolean}
     */
    obey?: () => boolean,

    /**
     * A boolean to check if artyom is obeying commands or not.
     * @returns {Boolean}
     */
    isObeying?: () => boolean,

    /**
     * Returns a string with the actual version of Artyom script.
     * @returns {String}
     */
    getVersion?: () => string,

    /**
     * Add commands like an artisan. If you use artyom for simple 
     * tasks then probably you don't like to write a lot to achieve it.
     * Use the artisan syntax to write less, but with the same accuracy.
     * @disclaimer Not a promise-based implementation, just syntax.
     * @returns {Object}
     */
    on?: (indexes: any, smart: any) => any,

    /**
     * Process the recognized text if artyom is active in remote mode.
     * @returns {Boolean}
     */
    remoteProcessorService?: (action: any) => boolean
}

declare let webkitSpeechRecognition: any;
declare let SpeechSynthesisUtterance: any;
declare module "artyom.js" {
    export class ArtyomInternals {
        soundex(s: string): string;
    }

    export class ArtyomHelpers {
        isChrome(): boolean;
        isMobileDevice(): boolean;
    }

    export class Artyom {
        static getInstance(): ArtyomJS;
    }
}
