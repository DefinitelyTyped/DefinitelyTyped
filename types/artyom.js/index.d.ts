// Type definitions for artyom.js 1.0
// Project: https://github.com/sdkcarlos/artyom.js
// Definitions by: Sema García (José Manuel García) <https://github.com/semagarcia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Extension of Window interface
 */
interface ArtyomWindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
  SpeechSynthesisUtterance: any;
}

interface SpeechRecognition extends EventTarget {
    grammars: SpeechGrammarList;
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    maxAlternatives: number;
    serviceURI: string;
    start(): void;
    stop(): void;
    abort(): void;
    onaudiostart(ev: Event): any;
    onsoundstart(ev: Event): any;
    onspeechstart(ev: Event): any;
    onspeechend(ev: Event): any;
    onsoundend(ev: Event): any;
    onresult(ev: SpeechRecognitionEvent): any;
    onnomatch(ev: SpeechRecognitionEvent): any;
    onerror(ev: SpeechRecognitionError): any;
    onstart(ev: Event): any;
    onend(ev: Event): any;
}

interface SpeechRecognitionStatic {
    prototype: SpeechRecognition;
    new (): SpeechRecognition;
}

declare var SpeechRecognition: SpeechRecognitionStatic;
declare var webkitSpeechRecognition: SpeechRecognitionStatic;

interface SpeechRecognitionError extends Event {
    error: string;
    message: string;
}

interface SpeechRecognitionAlternative {
    transcript: string;
    confidence: number;
}

interface SpeechRecognitionResult {
    length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
    isFinal: boolean;
}

interface SpeechRecognitionResultList {
    length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionEvent extends Event {
    resultIndex: number;
    results: SpeechRecognitionResultList;
    interpretation: any;
    emma: Document;
}

interface SpeechGrammar {
    src: string;
    weight: number;
}

interface SpeechGrammarStatic {
    prototype: SpeechGrammar;
    new (): SpeechGrammar;
}

declare var SpeechGrammar: SpeechGrammarStatic;
declare var webkitSpeechGrammar: SpeechGrammarStatic;

interface SpeechGrammarList {
    length: number;
    item(index: number): SpeechGrammar;
    [index: number]: SpeechGrammar;
    addFromURI(src: string, weight: number): void;
    addFromString(string: string, weight: number): void;
}

interface SpeechGrammarListStatic {
    prototype: SpeechGrammarList;
    new (): SpeechGrammarList;
}

declare var SpeechGrammarList: SpeechGrammarListStatic;
declare var webkitSpeechGrammarList: SpeechGrammarListStatic;

interface SpeechSynthesis extends EventTarget {
    pending: boolean;
    speaking: boolean;
    paused: boolean;

    onvoiceschanged(ev: Event): any;
    speak(utterance: SpeechSynthesisUtterance): void;
    cancel(): void;
    pause(): void;
    resume(): void;
    getVoices(): SpeechSynthesisVoice[];
}

interface SpeechSynthesisGetter {
    speechSynthesis: SpeechSynthesis;
}

declare var speechSynthesis: SpeechSynthesis;

interface SpeechSynthesisUtterance extends EventTarget {
    text: string;
    lang: string;
    voice: SpeechSynthesisVoice;
    volume: number;
    rate: number;
    pitch: number;

    onstart(ev: SpeechSynthesisEvent): any;
    onend(ev: SpeechSynthesisEvent): any;
    onerror(ev: SpeechSynthesisErrorEvent): any;
    onpause(ev: SpeechSynthesisEvent): any;
    onresume(ev: SpeechSynthesisEvent): any;
    onmark(ev: SpeechSynthesisEvent): any;
    onboundary(ev: SpeechSynthesisEvent): any;
}

interface SpeechSynthesisUtteranceStatic {
    prototype: SpeechSynthesisUtterance;
    new (text?: string): SpeechSynthesisUtterance;
}

declare var SpeechSynthesisUtterance: SpeechSynthesisUtteranceStatic;

interface SpeechSynthesisEvent extends Event {
    utterance: SpeechSynthesisUtterance;
    charIndex: number;
    elapsedTime: number;
    name: string;
}

interface SpeechSynthesisErrorEvent extends SpeechSynthesisEvent {
    error: string;
}

interface SpeechSynthesisVoice {
    voiceURI: string;
    name: string;
    lang: string;
    localService: boolean;
    default: boolean;
}

declare namespace Artyom {
    interface ArtyomDevice {
        isChrome(): boolean;
        isMobile(): boolean;
    }

    interface ArtyomBrowserVoiceObject {
        default: boolean;
        lang: string;
        localService: false;
        name: string;
        voiceURI: string;
    }

    interface ArtyomConfigProperties {
        /** Set the default language of artyom with this property */
        lang?: string;
        recognizing?: boolean;
        /** Choose if should listen one command and then stops, or listening forever */
        continuous?: boolean;
        /** Moderates the speed with which Artyom talks (0 ~ 1) */
        speed?: number;
        /** Adjust the volume of the voice of artyom */
        volume?: number;
        /** If listen is equal to true the voice recognition will be started otherwise this property can be ignored */
        listen: boolean;
        /** Recognition mode: normal, quick, remote */
        mode?: string;
        /** Displays all the grammars recognized in the console */
        debug: boolean;
        helpers?: {
            redirectRecognizedTextOutput: any;
            remoteProcessorHandler: any;
            lastSay: any;
        };
        /** Set a keyword that allows your command to be executed immediately when you say this word (Useful in noisy environments) */
        executionKeyword?: string;
        /** Set a keyword that allows to enable the command recognition automatically if this word is recognized while artyom is paused (artyom.dontObey) */
        obeyKeyword?: string;
        speaking?: boolean;
        obeying?: boolean;
        soundex?: boolean;
    }

    interface ArtyomCommand {
        /** Triggers of the command */
        indexes: string[];
        /** Logic to execute when the command is triggered */
        action(i: number, wildcard?: string, full?: string): void;
        /** Description of the command */
        description?: string;
        /** Flag to specify is a command is either normal or smart */
        smart?: boolean;
    }

    interface ArtyomFlags {
        restartRecognition: boolean;
    }

    interface ArtyomRecognizer {
        lang: string;
        continuous: boolean;
        interimResults: boolean;
        start(): void;
        stop(): void;
        onstart(): void;
        onresult(event: any): void;
        onerror(event: any): void;
        onend(): void;
    }

    interface ArtyomJS {
        /**
         * Contains some basic information that artyom needs to know as the type of device and browser
         * @see http://ourcodeworld.com/projects/projects-documentation/6/read-doc/artyom-device/artyom-js
         */
        device: ArtyomDevice;

        /**
         * Object which provides the speech interface, and set some of its attributes and event handlers
         */
        artyomWSR: ArtyomRecognizer;

        /**
         * Artyom can return inmediately the voices available in your browser.
         * @see http://ourcodeworld.com/projects/projects-documentation/14/read-doc/artyom-getvoices/artyom-js
         * @returns {Array}
         */
        getVoices(): SpeechSynthesisVoice[];

        /**
         * Returns an array with all the available commands for artyom.
         * @see http://ourcodeworld.com/projects/projects-documentation/10/read-doc/artyom-getavailablecommands/artyom-js
         * @returns {Array}
         */
        getAvailableCommands(): ArtyomCommand[];

        /**
         * Set up artyom for the application. This function will set the default language used by artyom
         * or notice the user if artyom is not supported in the actual browser.
         * @see http://ourcodeworld.com/projects/projects-documentation/15/read-doc/artyom-initialize/artyom-js
         * @param {ArtyomConfigProperties} config
         * @returns {Boolean}
         */
        initialize(config: ArtyomConfigProperties): boolean;

        /**
         * Force artyom to stop listen even if is in continuos mode.
         * @see http://ourcodeworld.com/projects/projects-documentation/9/read-doc/artyom-fatality/artyom-js
         * @returns {Boolean}
         */
        fatality(): boolean;

        /**
         * Add dinamically commands to artyom using. You can even add commands while artyom is active.
         * @see http://ourcodeworld.com/projects/projects-documentation/4/read-doc/artyom-addcommands/artyom-js
         * @param {ArtyomCommand | Array[ArtyomCommand]} newCommand
         * @returns {Boolean}
         */
        addCommands(newCommand: ArtyomCommand | ArtyomCommand[]): boolean;

        /**
         * Remove the commands of artyom with indexes that matches with the given text.
         * @see http://ourcodeworld.com/projects/projects-documentation/19/read-doc/artyom-removecommands/artyom-js
         * @param {string} identifier
         * @returns {Array}
         */
        removeCommands(identifier: string): number[];

        /**
         * Removes all the added commands of artyom.
         * @see http://ourcodeworld.com/projects/projects-documentation/7/read-doc/artyom-emptycommands/artyom-js
         * @returns {Array}
         */
        emptyCommands(): ArtyomCommand[];

        /**
         * Stops the actual and pendings messages that artyom have to say.
         * @see http://ourcodeworld.com/projects/projects-documentation/23/read-doc/artyom-shutup/artyom-js
         */
        shutUp(): void;

        /**
         * Returns an object with the actual properties of artyom.
         * @see http://ourcodeworld.com/projects/projects-documentation/12/read-doc/artyom-getproperties/artyom-js
         * @returns {ArtyomConfigProperties}
         */
        getProperties(): ArtyomConfigProperties;

        /**
         * Create a listener when an artyom action is called.
         * @see http://ourcodeworld.com/projects/projects-documentation/24/read-doc/artyom-when/artyom-js
         */
        when(event: any, action: any): any;

        /**
         * Returns the code language of artyom according to initialize function.
         * @see http://ourcodeworld.com/projects/projects-documentation/11/read-doc/artyom-getlanguage/artyom-js
         * @returns {String} Language
         */
        getLanguage(): string;

        /**
         * Talks a text according to the given parameters (private function).
         * @param {String} text Text to be spoken
         * @param {Int} actualChunk Number of chunk of the
         * @param {Int} totalChunks
         * @param {any} callbacks
         */
        artyomTalk(text: any, actualChunk: any, totalChunks: any, callbacks: any): any;

        /**
         * Splits a string into an array of strings with a limited size (chunk_length).
         * @param {String} input text to split into chunks
         * @param {Integer} chunk_length limit of characters in every chunk
         */
        splitStringByChunks(input: any, chunk_length: any): string[];

        /**
         * Process the given text into chunks and execute the private function artyom_talk.
         * @param {String} message Text to be spoken
         * @param {Object} callbacks { onStart, onEnd }
         * @see http://ourcodeworld.com/projects/projects-documentation/20/read-doc/artyom-say/artyom-js
         */
        say(message: any, callbacks: any): void;

        /**
         * Repeats the last sentence that artyom said. Useful in noisy environments.
         * @param {Boolean} returnObject If set to true, an object with the text and the timestamp when was executed will be returned.
         * @see http://ourcodeworld.com/projects/projects-documentation/25/read-doc/artyom-repeatlastsay/artyom-js
         */
        repeatLastSay(returnObject: any): void;

        /**
         * Verify if the browser supports speechSynthesis.
         * @see http://ourcodeworld.com/projects/projects-documentation/40/read-doc/artyom-speechsupported/artyom-js
         * @returns {Boolean}
         */
        speechSupported(): boolean;

        /**
         * Verify if the browser supports webkitSpeechRecognition.
         * @see http://ourcodeworld.com/projects/projects-documentation/39/read-doc/artyom-recognizingsupported/artyom-js
         * @returns {Boolean}
         */
        recognizingSupported(): boolean;

        /**
         * Simulate a voice command via JS.
         * @see http://ourcodeworld.com/projects/projects-documentation/22/read-doc/artyom-simulateinstruction/artyom-js
         * @param {string} sentence
         * @returns {Boolean}
         */
        simulateInstruction(sentence: string): boolean;

        /**
         * Returns an object with data of the matched element.
         * @param {string} voiceCommand
         * @returns {Object | Function}. There is a result field when the function should return a boolean value.
         */
        artyomExecute(voiceCommand: string): any;

        /**
         * Displays a message in the console if the artyom propery DEBUG is set to true.
         * @param {string} error The error to be debugged
         * @param {string} traceLevel Error level: { error | warn | info }
         * @see http://ourcodeworld.com/projects/projects-documentation/38/read-doc/artyom-debug/artyom-js
         */
        debug(stringEvent: string, traceLevel: string): void;

        /**
         * Allows to retrieve the recognized spoken text of artyom and do something with it everytime something is recognized.
         * @param {Function} action
         * @returns {Boolean}
         */
        redirectRecognizedTextOutput(action: () => void): boolean;

        /**
         * Says a random quote and returns it's object.
         * @param data
         */
        sayRandom(data: any): any;

        /**
         * Artyom provide an easy way to create a dictation for your user. Just create an instance and start and stop when you want.
         */
        newDictation(settings: any): any;

        /**
         * A voice prompt will be executed.
         */
        newPrompt(config: any): any;

        /**
         * Artyom awaits for orders when this function is executed. If artyom gets a first parameter the instance will be stopped.
         */
        artyomHey(): any;

        /**
         * This function will return the webkitSpeechRecognition object used by artyom retrieve it only to debug on it or get some
         * values, do not make changes directly.
         */
        getNativeApi(): any;

        /**
         * This function returns a boolean according to the SpeechRecognition status if artyom is listening, will return true.
         * Note: This is not a feature of SpeechRecognition, therefore this value hangs on the fiability of the onStart and onEnd
         * events of the SpeechRecognition
         * @returns {Boolean}
         */
        isRecognizing(): boolean;

        /**
         * This function returns a boolean according to the speechSynthesis status if artyom is speaking, will return true.
         * Note: This is not a feature of speechSynthesis, therefore this value hangs on the fiability of the onStart and onEnd
         * events of the speechSynthesis.
         * @returns {Boolean}
         */
        isSpeaking(): boolean;

        /**
         * The SpeechSynthesisUtterance objects are stored in the artyom_garbage_collector variable to prevent the wrong behaviour
         * of artyom.say. Use this method to clear all spoken SpeechSynthesisUtterance unused objects.
         * @returns {Boolean}
         */
        clearGarbageCollection(): any;

        /**
         * Returns the SpeechSynthesisUtterance garbageobjects.
         */
        getGarbageCollection(): any;

        /**
         * Pause the processing of commands. Artyom still listening in the background and it can be resumed after a couple of seconds.
         * @returns {Boolean}
         */
        dontObey(): any;

        /**
         * Allow artyom to obey commands again.
         * @returns {Boolean}
         */
        obey(): any;

        /**
         * A boolean to check if artyom is obeying commands or not.
         * @returns {Boolean}
         */
        isObeying(): boolean;

        /**
         * Process the recognized text if artyom is active in remote mode.
         * @returns {Boolean}
         */
        remoteProcessorService(action: any): any;

        /**
         * Returns a string with the actual version of Artyom script.
         * @returns {String}
         */
        getVersion(): string;

        /**
         * Add commands like an artisan. If you use artyom for simple
         * tasks then probably you don't like to write a lot to achieve it.
         * Use the artisan syntax to write less, but with the same accuracy.
         * @disclaimer Not a promise-based implementation, just syntax.
         * @returns {Object}
         */
        on(indexes: any, smart: any): any;
    }

    /**
     * ArtyomBuilder bla, bla...
     */
    class ArtyomBuilder {
        /**
         * Method to bla, bla, bla...
         */
        static getInstance(): ArtyomJS;
    }
}

// tslint:disable-next-line:export-just-namespace
export = Artyom;
export as namespace Artyom;
