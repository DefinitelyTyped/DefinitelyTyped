// Type definitions for artyom.js
// Project: https://github.com/sdkcarlos/artyom.js
// Definitions by: Sema García (José Manuel García) <https://github.com/semagarcia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

    onaudiostart: (ev: Event) => any;
    onsoundstart: (ev: Event) => any;
    onspeechstart: (ev: Event) => any;
    onspeechend: (ev: Event) => any;
    onsoundend: (ev: Event) => any;
    onresult: (ev: SpeechRecognitionEvent) => any;
    onnomatch: (ev: SpeechRecognitionEvent) => any;
    onerror: (ev: SpeechRecognitionError) => any;
    onstart: (ev: Event) => any;
    onend: (ev: Event) => any;
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

    onvoiceschanged: (ev: Event) => any;
    speak(utterance: SpeechSynthesisUtterance): void;
    cancel(): void;
    pause(): void;
    resume(): void;
    getVoices(): SpeechSynthesisVoice[];
}

interface SpeechSynthesisGetter {
    speechSynthesis: SpeechSynthesis;
}

//interface Window extends SpeechSynthesisGetter {}

declare var speechSynthesis: SpeechSynthesis;

interface SpeechSynthesisUtterance extends EventTarget {
    text: string;
    lang: string;
    voice: SpeechSynthesisVoice;
    volume: number;
    rate: number;
    pitch: number;

    onstart: (ev: SpeechSynthesisEvent) => any;
    onend: (ev: SpeechSynthesisEvent) => any;
    onerror: (ev: SpeechSynthesisErrorEvent) => any;
    onpause: (ev: SpeechSynthesisEvent) => any;
    onresume: (ev: SpeechSynthesisEvent) => any;
    onmark: (ev: SpeechSynthesisEvent) => any;
    onboundary: (ev: SpeechSynthesisEvent) => any;
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
        action: (i: number, wildcard?: string, full?: string) => void;
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

    export interface ArtyomJS {
        device: ArtyomDevice;

        artyomWSR: ArtyomRecognizer;

        getVoices(): SpeechSynthesisVoice[];

        getAvailableCommands(): ArtyomCommand[];

        initialize(config: ArtyomConfigProperties): boolean;

        fatality(): boolean;

        /**
         * Method to add bla, bla, bla...
         */
        addCommands(param: ArtyomCommand | ArtyomCommand[]): boolean;

        removeCommands(identifier: string): number[];

        emptyCommands(): ArtyomCommand[];

        shutUp(): void;

        getProperties(): ArtyomConfigProperties;

        when(event: any, action: any): any;

        getLanguage(): string;

        artyomTalk(text: any, actualChunk: any, totalChunks: any, callbacks: any): any;

        splitStringByChunks(input: any, chunk_length: any): string[];

        say(message: any, callbacks: any): void;

        repeatLastSay(returnObject: any): void;

        speechSupported(): boolean;

        recognizingSupported(): boolean;

        simulateInstruction(sentence: string): boolean;

        artyomExecute(voice: string): any;

        debug(stringEvent: string, traceLevel: string): void;

        redirectRecognizedTextOutput(action: () => void): boolean;

        sayRandom(data: any): any;

        newDictation(settings: any): any;

        newPrompt(config: any): any;

        artyomHey(): any;

        getNativeApi(): any;

        isRecognizing(): boolean;

        isSpeaking(): boolean;

        clearGarbageCollection(): any;

        getGarbageCollection(): any;

        dontObey(): any;

        obey(): any;

        isObeying(): boolean;

        remoteProcessorService(action: any): any;
    }

    /**
     * ArtyomBuilder bla, bla...
     */
    export class ArtyomBuilder {
        /**
         * Method to bla, bla, bla...
         */
        static getInstance(): ArtyomJS
    }

}

export = Artyom;
export as namespace Artyom;